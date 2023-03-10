import React, { useRef, useContext, useState, useEffect } from "react";
import { GlobalContext } from "../../Context";
import { validationStep } from "../../utils/validationSteps";
import * as BlinkIDSDK5 from "../../blinkid/blinkid-sdk.js";
import classes from "./index.module.scss";
const licences = {
    localhost: "sRwAAAYJbG9jYWxob3N0r/lOPgo/w35CpJnWLAMUyZvNFW6YCGkhbVFtpI+x3FGspB/FU0QsvOGWh0sQIA848ue58HP9XW1oZu7EGq9ltIsRqg4+D3y5tfST7jnJmu4RDw8bFyrOBbZzHJW6ywsEeYrkjyXEdd30NN1e5MeHs5//CrowZkLVGV4I2Jw5kReGPPvVeyHvIEG1+GEpWkv4xtM5gdpqEoBnVkpXe3oUD2StIef2L7aWqQ==",
    macro: "sRwAAAYabWFjcm8tZW1lLXB3YS1kZXYuaG9vbGkubGFKkPOA7qjwMArshJf4Et3IZclG1hYUisu5lvyXndFv6afu5SXRREceh+SFSYEtQiPHl5ZDJo1tyF2NjnNwaCuZBdsMG/uvRUazcm3yakmloSWrwuY1FKl4XfYLpEplWQg75b4/kptCnFQDZjyqiUSq2uNqrycimIYDwDcmK9YvZ9KDbZQ7CrmEuocePcHXMGXVqso5QluyUI1StMDYeIuXvjvFZlY1EYd7"
};

function BlinkId({ step, setStep, setErrMsg }) {
    const dniFeed = useRef(null);
    const dniCanvas = useRef(null);
    const drawContext = useRef(null);
    const BlinkIDSDK = useRef(null);
    const { setDniInfo } = useContext(GlobalContext);

    const [feedbackMsg, setFeedbackMsg] = useState("Cargando...");

    /**
     * This function will make sure that coordinate system associated with detectionResult
     * canvas will match the coordinate system of the image being recognized.
     */
    function applyTransform(transformMatrix) {
        const canvasAR = dniCanvas.current.width / dniCanvas.current.height;
        const videoAR =
            dniFeed.current.videoWidth / dniFeed.current.videoHeight;

        let xOffset = 0;
        let yOffset = 0;
        let scaledVideoHeight = 0;
        let scaledVideoWidth = 0;

        if (canvasAR > videoAR) {
            // pillarboxing: https://en.wikipedia.org/wiki/Pillarbox
            scaledVideoHeight = dniCanvas.current.height;
            scaledVideoWidth = videoAR * scaledVideoHeight;
            xOffset = (dniCanvas.current.width - scaledVideoWidth) / 2.0;
        } else {
            // letterboxing: https://en.wikipedia.org/wiki/Letterboxing_(filming)
            scaledVideoWidth = dniCanvas.current.width;
            scaledVideoHeight = scaledVideoWidth / videoAR;
            yOffset = (dniCanvas.current.height - scaledVideoHeight) / 2.0;
        }

        // first transform canvas for offset of video preview within the HTML video element (i.e. correct letterboxing or pillarboxing)
        drawContext.current.translate(xOffset, yOffset);
        // second, scale the canvas to fit the scaled video
        drawContext.current.scale(
            scaledVideoWidth / dniFeed.current.videoWidth,
            scaledVideoHeight / dniFeed.current.videoHeight
        );

        // finally, apply transformation from image coordinate system to
        // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setTransform
        drawContext.current.transform(
            transformMatrix[0],
            transformMatrix[3],
            transformMatrix[1],
            transformMatrix[4],
            transformMatrix[2],
            transformMatrix[5]
        );
    }

    function clearDrawCanvas() {
        dniCanvas.current.width = dniCanvas.current.clientWidth;
        dniCanvas.current.height = dniCanvas.current.clientHeight;

        drawContext.current.clearRect(
            0,
            0,
            dniCanvas.current.width,
            dniCanvas.current.height
        );
    }

    function setupColor(displayable) {
        let color = "#FFFF00FF";

        if (displayable.detectionStatus === 0) {
            color = "#FF0000FF";
        } else if (displayable.detectionStatus === 1) {
            color = "#00FF00FF";
        }

        drawContext.current.fillStyle = color;
        drawContext.current.strokeStyle = color;
        drawContext.current.lineWidth = 5;
    }

    function setupMessage(displayable) {
        switch (displayable.detectionStatus) {
            case BlinkIDSDK.current.DetectionStatus.Fail:
                setFeedbackMsg("Error en la detección. Reintentando.");
                break;
            case BlinkIDSDK.current.DetectionStatus.Success:
            case BlinkIDSDK.current.DetectionStatus.FallbackSuccess:
                setFeedbackMsg("Analizando documento. Espere por favor.");
                break;
            case BlinkIDSDK.current.DetectionStatus.CameraAtAngle:
                setFeedbackMsg("Ajustá el ángulo");
                break;
            case BlinkIDSDK.current.DetectionStatus.CameraTooHigh:
                setFeedbackMsg("Acercá el documento");
                break;
            case BlinkIDSDK.current.DetectionStatus.CameraTooNear:
            case BlinkIDSDK.current.DetectionStatus.DocumentTooCloseToEdge:
            case BlinkIDSDK.current.DetectionStatus.Partial:
                setFeedbackMsg("Alejá el documento");
                break;
            default:
                console.warn(
                    "Unhandled detection status!",
                    displayable.detectionStatus
                );
        }
    }

    /**
     * Utility functions for drawing detected quadrilateral onto canvas.
     */
    function drawQuad(quad) {
        clearDrawCanvas();
        // Based on detection status, show appropriate color and message
        setupColor(quad);
        setupMessage(quad);

        applyTransform(quad.transformMatrix);
        drawContext.current.beginPath();
        drawContext.current.moveTo(quad.topLeft.x, quad.topLeft.y);
        drawContext.current.lineTo(quad.topRight.x, quad.topRight.y);
        drawContext.current.lineTo(quad.bottomRight.x, quad.bottomRight.y);
        drawContext.current.lineTo(quad.bottomLeft.x, quad.bottomLeft.y);
        drawContext.current.closePath();
        drawContext.current.stroke();
    }

    async function startScan(sdk) {
        // Initialize canvas context

        let combinedGenericIDRecognizer = null;
        drawContext.current = dniCanvas.current.getContext("2d");
        // 1. Create a recognizer objects which will be used to recognize single image or stream of images.
        //
        // GenericCombine ID Recognizer - scan ID documents on both sides
        combinedGenericIDRecognizer =
            await BlinkIDSDK.current.createBlinkIdCombinedRecognizer(sdk);
        // Retrieve current settings
        const settings = await combinedGenericIDRecognizer.currentSettings();
        // Update desired settings
        settings["returnFullDocumentImage"] = true;
        settings["returnFaceImage"] = true;

        // Apply settings
        await combinedGenericIDRecognizer.updateSettings(settings);

        // Create a callbacks object that will receive recognition events, such as detected object location etc.
        const callbacks = {
            onQuadDetection: (quad) => drawQuad(quad),
            onDetectionFailed: () => setFeedbackMsg("Error en la detección"),

            // This callback is required for combined experience.
            onFirstSideResult: () => {
                clearDrawCanvas();
                setFeedbackMsg(
                    "Da vuelta el documento y acercá el dorso del mismo"
                );

                setStep(validationStep.DORSO_DNI);
            },
        };

        // 2. Create a RecognizerRunner object which orchestrates the recognition with one or more
        //    recognizer objects.

        const recognizerRunner =
            await BlinkIDSDK.current.createRecognizerRunner(
                // SDK instance to use
                sdk,
                // List of recognizer objects that will be associated with created RecognizerRunner object
                [combinedGenericIDRecognizer],
                // [OPTIONAL] Should recognition pipeline stop as soon as first recognizer in chain finished recognition
                false,
                // Callbacks object that will receive recognition events
                callbacks
            );

        // 3. Create a VideoRecognizer object and attach it to HTMLVideoElement that will be used for displaying the camera feed
        const videoRecognizer =
            await BlinkIDSDK.current.VideoRecognizer.createVideoRecognizerFromCameraStream(
                dniFeed.current,
                recognizerRunner
            );

        setFeedbackMsg("Acerca el frente de tu DNI");

        // 4. Start the recognition and get results from callback
        // updateScanFeedback("Acercá el frente del documento", true)
        try {
            videoRecognizer.startRecognition(
                // 5. Obtain the results
                async (recognitionState) => {
                    let errorMsg = null;
                    console.log("recognitionState", recognitionState);
                    if (!videoRecognizer) return;

                    // Pause recognition before performing any async operation
                    videoRecognizer.pauseRecognition();

                    if (
                        recognitionState ===
                        BlinkIDSDK.current.RecognizerResultState.Empty
                    )
                        errorMsg = 4000001;

                    const blinkIdResult =
                        await combinedGenericIDRecognizer.getResult();

                    if (
                        blinkIdResult.state ===
                        BlinkIDSDK.current.RecognizerResultState.Empty
                    )
                        errorMsg = 4000001;

                    if (
                        blinkIdResult.state ===
                        BlinkIDSDK.current.RecognizerResultState.Uncertain
                    )
                        errorMsg = 4000002;

                    // TODO VER ESTO
                    // BlinkIDSDK.RecognizerResultState.Uncertain

                    console.log(
                        "Esto es lo que se setea en dniInfo",
                        blinkIdResult
                    );
                    setDniInfo(blinkIdResult);

                    // 6. Release all resources allocated on the WebAssembly heap and associated with camera stream

                    // Release browser resources associated with the camera stream
                    videoRecognizer?.releaseVideoFeed();

                    // Release memory on WebAssembly heap used by the RecognizerRunner
                    recognizerRunner?.delete();

                    // Release memory on WebAssembly heap used by the recognizer
                    combinedGenericIDRecognizer?.delete();

                    // Clear any leftovers drawn to canvas
                    clearDrawCanvas();

                    if (errorMsg) {
                        setErrMsg(errorMsg);
                        setStep(validationStep.ERROR);
                    } else setStep(validationStep.SELFIE);
                }
            );
        } catch (error) {
            setStep(validationStep.ERROR);
            console.error(
                "Error during initialization of VideoRecognizer:",
                error
            );
        }
    }

    useEffect(() => {
        // Check if browser has proper support for WebAssembly
        BlinkIDSDK.current = BlinkIDSDK5;
        if (!BlinkIDSDK.current.isBrowserSupported()) {
            setStep(validationStep.ERROR);
            return;
        }

        let licenseKey = licences.macro;

        const loadSettings = new BlinkIDSDK.current.WasmSDKLoadSettings(
            licenseKey
        );

        loadSettings.allowHelloMessage = true;

        loadSettings.engineLocation = window.location.origin + "/resourcesV5";

        BlinkIDSDK.current.loadWasmModule(loadSettings).then(
            (sdkInstance) => {
                startScan(sdkInstance);
            },
            (error) => {
                setStep(validationStep.ERROR);
                console.error("Error al cargar SDK!", error);
            }
        );
    }, []);

    return (
        <div className={classes["dni-screen-scanning"]}>
            <div
                className={
                    step === validationStep.FRENTE_DNI
                        ? classes["videoContainer"]
                        : `${classes["videoContainer"]} ${classes["flip"]}`
                }
            >
                <video ref={dniFeed} id="dni-feed" playsInline></video>
            </div>
            <canvas
                ref={dniCanvas}
                className={classes["dni-feedback"]}
            ></canvas>
            <p className={classes["camera-dni-guides"]}>
                <span style={{ background: "#24224F" }}>{feedbackMsg}</span>
            </p>
        </div>
    );
}

export default BlinkId;
