import classes from "./index.module.scss";
import { Box, Grid, Typography } from "@mui/material";
import { Error404icon } from "../../../public/assets";
import Image from "next/image";
export default function () {
    return (
        <Grid display={"flex"} justifyContent={"center"} alignItems={"center"} height={"100vh"} >
            <Grid item display={"flex"} mt={-5}>
                <Image
                    src={Error404icon}
                    className={classes.img}
                />
                <Box display={"flex"} justifyContent={"center"} alignItems={"center"} width={"100vw"} flexDirection={"column"} >
                    <Typography variant="h1" color={"primary"} fontSize={40} mb={5}>
                        !Error!
                    </Typography>
                    <Typography variant="h2" color={"primary"} fontSize={30}>
                        Link inválido solicite uno nuevo
                    </Typography>
                </Box>

            </Grid>

        </Grid>

    )
}