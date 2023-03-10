import { useState } from "react";

import { Grid, Typography } from "@mui/material";

import DaonCapture from "../../../components/Daon";

function TakeSelfie({ setStep }) {
    const [feedbackMsg, setFeedbackMsg] = useState(
        "Ubica tu cara dentro del marco"
    );

    return (
        <Grid
            container
            alignItems={"center"}
            bgcolor={"#052A51"}
            display={"flex"}
            height={"100vh"}
            justifyContent={"space-around"}
            overflow={"hidden"}
            py={{ xs: "3em", md: "6em" }}
        >
            <Grid item flexDirection={"column"} xs={12}>
                <Typography
                    variant="h1"
                    mb={1}
                    fontSize={{ xs: "1.5em" }}
                    sx={{ color: "white" }}
                >
                    Vamos a sacarte una foto
                </Typography>

                <Typography
                    variant="h3"
                    fontSize={{ xs: "1em" }}
                    sx={{ color: "white" }}
                >
                    {feedbackMsg}
                </Typography>
            </Grid>

            <Grid
                item
                display={"flex"}
                // justifyContent={"center"}
                // mt={"-20em"}
                xs={12}
            >
                <DaonCapture
                    setFeedbackMsg={setFeedbackMsg}
                    setStep={setStep}
                />
            </Grid>
        </Grid>
    );
}

export default TakeSelfie;
