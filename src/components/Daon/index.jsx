import React, { useState, useContext, useRef, useEffect } from "react";
import classes from "./index.module.scss";
import { GlobalContext } from "../../Context";
import { validationStep } from "../../utils/validationSteps";
import getPublicKeyDaon from "../../services/getPublicKeyDaon";
function DaonCapture({ setFeedbackMsg, setStep }) {
    const [loading, setLoading] = useState(false);
    const { setSelfie, uuid } = useContext(GlobalContext);
    const [publicKeyDaon, setPublicKeyDaon] = useState(null);
    const [accepted, setAccepted] = useState(false);
    const selfieFeed = useRef(null);

    const getPublicKey = async () => {
        try {
            const response = await getPublicKeyDaon(uuid);
            console.log("Esto es response", response);
        } catch (e) {
            console.log("error en get public", e);
        }
    }
    useEffect(() => {
        getPublicKey();
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const { Daon } = window;
            console.log("Window Daon", window.Daon);


            const configuration = {
                width: 1280,
                height: 720,
                thresholds: {
                    ThresholdInterEyesDistance: 150,
                },
            };

            const fc = new Daon.FaceCapture(configuration);

            //loads wasm modules
            fc.loadDFQModule({
                urlFaceDetectorWasm:
                    window.location.origin + "/DaonFaceQuality.wasm",
                onFaceModuleLoaded: ({ isLoaded, error }) => {
                    if (isLoaded) {
                        setLoading(false);
                        fc.isGyroscopeActive()
                            .then(() => {
                                //starts the camera
                                fc.startCamera(selfieFeed.current).then((r) => {
                                    selfieFeed.current.onloadedmetadata =
                                        () => {
                                            startFaceDetector(fc);
                                        };
                                });
                            })
                            .catch((err) => {
                                console.log(err);
                                setStep(validationStep.ERROR);
                                //user should be given an option to enable motion and sensor data so he can retry the camera init
                            });
                    }
                    if (error) {
                        setStep(validationStep.ERROR);
                        console.log(error);
                    }
                },
            });
        }
    }, []);

    function startFaceDetector(fc) {
        fc.startFaceDetector({
            onFaceDetectorInitialized: function () {
                fc.findFace();
            },
            onFaceDetectorError: function (err) {
                //logic when error occurs
                setStep(validationStep.ERROR);
                console.log(err);
            },
            onFaceDetectorFeedback: function (detectorFeedbackObject) {
                //Logic on feedback
                if (detectorFeedbackObject.result === "PASS") {
                    //user sucessfully captured selfie, selfie is of sufficiant quality

                    console.log(detectorFeedbackObject);
                    setSelfie(detectorFeedbackObject);
                    fc.destroy();
                    setTimeout(() => {
                        setStep(validationStep.VALIDATING);
                    }, 1000);
                } else {
                    // selfie image is of insuficient quality (it is mandatory to keep invoking findFace in the loop until selfie image of a good quality is detected)
                    setTimeout(() => {
                        fc.findFace();
                    }, 500);

                    switch (detectorFeedbackObject.feedback.message) {
                        case "Face too small. Please move closer to camera":
                            setFeedbackMsg(
                                "Por favor, acercate más a la camara."
                            );
                            setAccepted(false);

                            break;
                        case "Please center your face in the oval":
                            setFeedbackMsg(
                                "Por favor, centra tu cara en el ovalo."
                            );
                            setAccepted(false);

                            break;
                        case "Hold on for a few seconds":
                            setFeedbackMsg("Quedate quieto por unos segundos.");
                            setAccepted(true);
                            break;
                        default:
                            setFeedbackMsg("No se pudo encontrar un rostro.");
                            setAccepted(false);

                            break;
                    }
                }
            },
        }
            // , {
            //     serverPublicKey,
            //     idxUserId
            // }        
        );
    }

    return (
        <div className={classes["selfie-screen-scanning"]}>
            <div
                className={
                    accepted
                        ? `${classes["selfieContainer"]} ${classes["green"]}`
                        : classes["selfieContainer"]
                }
            >
                <video
                    ref={selfieFeed}
                    className={classes["selfie-feed"]}
                    playsInline
                ></video>
            </div>
        </div>
    );
}

export default DaonCapture;
