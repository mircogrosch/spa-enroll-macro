import { useEffect } from "react";
import Image from "next/image";
import { Grid, Typography, Button } from "@mui/material";

import Layout from "../../components/Layout";

import { EndIcon, EmeIconButton } from "../../../public/assets";

import classes from "./index.module.scss";
import { useContext } from "react";
import { GlobalContext } from "../../Context";
function End() {
    const { optionProcess } = useContext(GlobalContext);
    return (
        <Layout>
            <section className={classes.section}>
                <Grid item xs={12} display={"flex"} justifyContent={"center"}>
                    <Typography variant="h1" color={"primary"} width={"60%"}>
                        ¡Tu cara fue {optionProcess === "E" ? "registrada" : "validada"} correctamente!
                    </Typography>
                </Grid>

                <Grid item xs={10} sm={6} md={4} lg={3.5} xl={3}>
                    <Image
                        src={EndIcon}
                        alt="end_icon"
                        className={classes.img}
                    />
                </Grid>

                <Grid
                    item
                    xs={12}
                    display={"flex"}
                    justifyContent={"center"}
                    height={"min-content"}
                >
                    <Typography variant="h1" color={"primary"} width={"100%"}>
                        ¡Muchas gracias!
                        <br />
                        Ya podes volver al chat
                    </Typography>
                </Grid>

                <Grid
                    item
                    xs={12}
                    height={"max-content"}
                    display={"flex"}
                    justifyContent={"center"}
                >
                    <Button
                        className={classes.button}
                        variant="contained"
                        color={"primary"}
                        onClick={() => window.close()}
                    >
                        <Image
                            className={classes.buttonImage}
                            src={EmeIconButton}
                            width={"20px"}
                            height={"20px"}
                        />
                        Volver al chat
                    </Button>
                </Grid>
            </section>
        </Layout>
    );
}

export default End;
