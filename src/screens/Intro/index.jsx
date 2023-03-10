import React, { useEffect, useContext } from "react";
import { Grid } from "@mui/material";
import { LoadingIntro } from "../../../public/assets/index";
import classes from "./index.module.scss";
import { useRouter } from "next/router";
import Image from "next/image";
import { GlobalContext } from "../../Context";
function Intro() {
  const router = useRouter();
  const { setUIID, optionProcess } = useContext(GlobalContext)

  useEffect(() => {
    const optionProcessSession = sessionStorage.getItem("optionProcess");
    console.log("Esto es option process", optionProcessSession);
    setUIID(router.query.uuid);
    setTimeout(() => {
      if (optionProcessSession) {
        if (optionProcessSession === "E") {
          router.push("/process-registration");
        } else {
          router.push("/process-validation");
        }
      }
    }, 6000);
  }, [optionProcess]);

  return (
    <Grid
      container
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}
    >
      <Grid
        item
        display={"flex"}
        xs={12}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Image src={LoadingIntro} alt="logo_macro" className={classes.img} />
      </Grid>
    </Grid>
  );
}

export default Intro;
