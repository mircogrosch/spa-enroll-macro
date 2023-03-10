import { useEffect, useState, useContext } from "react";
import Image from "next/image";

import { Grid, Typography } from "@mui/material";

import { LoadingValidated } from "../../../public/assets/index";

import classes from "./index.module.scss";

import processEnroll from "../../services/processEnroll";
import processValidation from "../../services/processValidate";
import { GlobalContext } from "../../Context";
import Lottie from "lottie-react";
import { useRouter } from "next/router";
import { validationStep } from "../../utils/validationSteps";
function ValidateIdentity({ setStep }) {
    console.log("esto es el step", setStep);
    const { selfie, dniInfo, uuid } = useContext(GlobalContext);
    const [gif, setGif] = useState();
    const router = useRouter();
    const generateImagesProcessValidation = () => {
        const selfieBase64 = selfie.faceImage;
        const selfieB64Data = selfieBase64.split(',')[1];

        return {
            selfie: selfieB64Data,
        }
    }

    const generateImagesProcessEnroll = () => {
        const canvasFrente = document.createElement("canvas");
        const canvasDorso = document.createElement("canvas");
        const canvasFace = document.createElement("canvas");

        const ctxFace = canvasFace.getContext("2d");
        const ctxFrente = canvasFrente.getContext("2d");
        const ctxDorso = canvasDorso.getContext("2d");
        const result = dniInfo;

        canvasFrente.width = result.fullDocumentFrontImage.rawImage.width
        canvasDorso.width = result.fullDocumentBackImage.rawImage.width
        canvasFace.width = result.faceImage.rawImage.width

        canvasFrente.height = result.fullDocumentFrontImage.rawImage.height
        canvasDorso.height = result.fullDocumentBackImage.rawImage.height
        canvasFace.height = result.faceImage.rawImage.height

        ctxFrente.putImageData(result.fullDocumentFrontImage.rawImage, 0, 0)
        ctxDorso.putImageData(result.fullDocumentBackImage.rawImage, 0, 0)
        ctxFace.putImageData(result.faceImage.rawImage, 0, 0);

        // const barcodeData = result.barcode.barcodeData.stringData.split("@");

        const selfieBase64 = selfie.faceImage;
        const dniFotoBase64 = canvasFace.toDataURL("image/png");
        const frontImageDni = canvasFrente.toDataURL("image/png");
        const backImageDni = canvasDorso.toDataURL("image/png");


        const selfieB64Data = selfieBase64.split(',')[1];
        const dniFoto64Data = dniFotoBase64.split(',')[1];
        const frontDni64Data = frontImageDni.split(",")[1];
        const backDni64Data = backImageDni.split(",")[1];

        return {
            selfie: selfieB64Data,
            imageDni: dniFoto64Data,
            frontDni: frontDni64Data,
            backDni: backDni64Data
        }
    }

    const postProcessEnroll = async () => {
        const { selfie, imageDni, frontDni, backDni } = generateImagesProcessEnroll();
        const data = {
            selfie,
            imageDni,
            frontDni,
            backDni
        }
        try {
            const response = await processEnroll(uuid, data);
            return response;
        } catch (e) {
            console.log("Error en process enroll", e);
        }
    }

    const postProcessValidation = async () => {
        const { selfie } = generateImagesProcessValidation();
        try {
            const response = await processValidation(uuid, selfie);
            return response;
        } catch (e) {
            //mandar a pantalla error
            console.log("error", e);
        }

    }

    useEffect(() => {
        const processOperation = sessionStorage.getItem("optionProcess");
        if (processOperation === "E") {
            postProcessEnroll()
                .then((data) => {
                    console.log("Esto es data en enroll", data)
                    if (data.datos.status === 1) {
                        setStep(validationStep.VALIDATED)
                    } else {
                        setStep(validationStep.ERROR);
                    }
                }
                )
        } else {
            postProcessValidation()
                .then((data) => {
                    console.log("Respuesta de validate", data)
                    if (data?.datos?.completado === 1) {
                        setStep(validationStep.VALIDATED)
                    } else {
                        setStep(validationStep.ERROR);
                    }
                });

        }

    }, []);

    useEffect(() => {
        setTimeout(() => {
            setGif(LoadingValidated);
        }, 0);
    });

    return (
        <Grid
            container
            alignItems={{ xs: "center", md: "center" }}
            className={classes.container}
            display={"flex"}
            flexDirection={"column"}
            flexWrap={"wrap"}
            gap={"5em"}
            height={"100vh"}
            justifyContent={"center"}
        >
            <Grid
                item
                display={"flex"}
                flexWrap={"wrap"}
                gap={"1em"}
                justifyContent={"center"}
                mt={"-6em"}
            >
                <Typography
                    variant="h1"
                    color={"primary"}
                    fontSize={{ xs: "1.3em", sm: "1.5em" }}
                    width={{ xs: "55%", sm: "100%" }}
                >
                    Estamos validando tu identidad
                </Typography>

                <Typography
                    variant="h2"
                    color={"primary"}
                    fontSize={{ xs: "1em", sm: "1.2em" }}
                    width={{ xs: "90%", sm: "60%", sm: "100%" }}
                >
                    Aguardá unos segundos la imagen está siendo procesada
                </Typography>
            </Grid>

            <Grid item display={"flex"} justifyContent={"center"}>
                <Lottie animationData={LoadingValidated} loop autoPlay className={classes.video} />
            </Grid>
        </Grid>
    );
}

export default ValidateIdentity;
