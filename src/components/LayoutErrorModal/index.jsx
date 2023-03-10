import React from "react";
import {
    ExclamationError,
    FrontDNI,
} from "../../../public/assets";
import { Button, Grid, Typography } from "@mui/material";
import classes from "./index.module.scss";
import Image from "next/image";
export default function LayoutErrorModal({ handleClick, errMsg, textDescription, iconError }) {
    return (
        <div className={classes.container}>
            <div className={classes.modal}>
                <div>
                    {
                        iconError && (<Image src={iconError} alt="DNI" />)
                    }

                    <Image
                        src={ExclamationError}
                        alt="Cruz"
                        className={classes.cruz}
                    />
                </div>
                <Grid container display={"flex"} flexDirection={"column"}>
                    <Grid item >
                        <Typography variant="h1" color={"primary"}>
                            {errMsg}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h2" color={"primary"}>
                            {textDescription}
                        </Typography>

                    </Grid>
                </Grid>
                <Button
                    color="secondary"
                    onClick={handleClick}
                    variant="contained"
                    fullWidth
                >
                    Reintentar
                </Button>
            </div>
        </div>
    );
}
