import Image from "next/image";
import { Grid, Typography } from "@mui/material";
import ReactCardFlip from "react-card-flip";

import Layout from "../../components/Layout";
import BlinkId from "../../components/BlinkId";

import { FrontDNI, BackDNI } from "../../../public/assets/index";

import { validationStep } from "../../utils/validationSteps";

import classes from "./index.module.scss";

function DNI({ step, setStep, setErrMsg }) {
    return (
        <Layout>
            <section className={classes.section}>
                <Grid
                    item
                    xs={12}
                    display={"flex"}
                    flexDirection={"column"}
                    height={"max-content"}
                >
                    <Typography
                        variant="h1"
                        color={"primary"}
                        fontSize={"1.3em"}
                    >
                        Validar D.N.I
                    </Typography>

                    <Typography variant="h2" color={"primary"}>
                        {step === validationStep.FRENTE_DNI
                            ? "Comencemos con el frente"
                            : "Ahora vamos con el dorso"}
                    </Typography>
                </Grid>

                <Grid
                    item
                    alignItems={"center"}
                    className={classes.containerFlip}
                    display={"flex"}
                    height={"min-content"}
                    justifyContent={"center"}
                    xs={12}
                >
                    <ReactCardFlip
                        isFlipped={step === validationStep.DORSO_DNI}
                        flipSpeedFrontToBack={2}
                        className={classes.containerFlip}
                    >
                        <Image
                            src={FrontDNI}
                            alt="front_dni"
                            className={classes.img}
                        />
                        <Image
                            src={BackDNI}
                            alt="back_dni"
                            className={classes.img}
                        />
                    </ReactCardFlip>
                </Grid>

                <Grid
                    item
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    flexDirection={"column"}
                    flexWrap={"wrap"}
                    xs={12}
                >
                    <BlinkId
                        step={step}
                        setStep={setStep}
                        setErrMsg={setErrMsg}
                    />

                    <Typography
                        variant="h3"
                        color={"primary"}
                        width={{ xs: "80%", sm: "60%", md: "40%", lg: "30%" }}
                    >
                        Ubicá el DNI en el recuadro, procurá que tenga buena
                        iluminación y evitá reflejos. Es importante que sea el
                        último DNI vigente
                    </Typography>
                </Grid>
            </section>
        </Layout>
    );
}

export default DNI;
