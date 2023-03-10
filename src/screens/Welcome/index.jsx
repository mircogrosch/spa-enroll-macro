import React, { useContext } from "react";
import Image from "next/image";
import Layout from "../../components/Layout";

import { Button, Typography, Grid } from "@mui/material";

import { WelcomePresentation } from "../../../public/assets/index";

import { validationStep } from "../../utils/validationSteps";

import classes from "./index.module.scss";

import { GlobalContext } from "../../Context";

function Welcome({ setStep }) {
  const { optionProcess } = useContext(GlobalContext);
  return (
    <Layout>
      <Grid
        item
        xs={8}
        md={6}
        lg={4}
        xl={3}
        height={"max-content"}
        mt={-5}
      >
        <Typography variant="h1" color={"primary"} fontSize={"1.3em"}>
          Hola vamos a {optionProcess === "E" ? "registrar" : "validar"} tu identidad para una experiencia más
          segura
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        display={"inline-flex"}
        justifyContent={"center"}
        alignItems={"center"}
        height={{ xs: "25%", sm: "30%" }}
        overflow={"hidden"}
      >
        <Image
          alt="animation"
          className={classes.img}
          src={WelcomePresentation}
        />
      </Grid>

      <Grid
        item
        xs={12}
        display={"flex"}
        justifyContent={"center"}
        flexWrap={"wrap"}
        height={"max-content"}
        gap={"1.5em"}
      >
        <Typography variant="h2" color={"primary"} width={"100%"}>
          Solo necesitas estar en un lugar iluminado y con el DNI en
          mano
        </Typography>

        <Button
          className={classes.button}
          color={"secondary"}
          onClick={() => setStep(optionProcess === "E" ? validationStep.FRENTE_DNI : validationStep.SELFIE)}
          variant="contained"
        >
          Comenzar
        </Button>
      </Grid>
    </Layout >
  );
}

export default Welcome;
