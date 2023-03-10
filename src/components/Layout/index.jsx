import Image from "next/image";

import { Grid } from "@mui/material";

import { LogoMacroLayout, IconLayout } from "../../../public/assets/index";

import classes from "./index.module.scss";

function Layout({ children }) {
    return (
        <Grid
            container
            display={"flex"}
            flexWrap={"wrap"}
            height={"100vh"}
            justifyContent={"center"}
            margin={"auto"}
            py={{ xs: 2, md: 1.5 }}
            width={{ xs: "98%" }}
        >
            <Grid
                item
                alignItems={"center"}
                display={"flex"}
                height={"min-content"}
                justifyContent={"center"}
                width={"100%"}
            >
                <Image
                    alt="logo_macro"
                    className={classes.imgLogo}
                    src={LogoMacroLayout}
                />
                <Image
                    alt="icon_macro"
                    className={classes.imgIcon}
                    src={IconLayout}
                />
            </Grid>
            {children}
        </Grid>
    );
}

export default Layout;
