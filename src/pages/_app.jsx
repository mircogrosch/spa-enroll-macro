import Script from "next/script";
import { GlobalProvider } from "../Context";
import { ThemeProvider } from "@mui/material";
import theme from "../theme";
import "../index.css";

export default function MyApp({ Component, pageProps }) {
    return (
        <GlobalProvider>
            <ThemeProvider theme={theme}>
                <Script src="/Daon.FaceCapture.min.js" />
                <Component {...pageProps} />
            </ThemeProvider>
        </GlobalProvider>
    );
}
