import { useContext, useEffect } from "react";

import Head from "next/head";

import { Intro } from "../screens";

import validateUUID from "../services/validateUUID";

import { GlobalContext } from "../Context";

export async function getServerSideProps({ query }) {
    const uuid = query.uuid;
    const response = await validateUUID(uuid);
    console.log("Response", response);
    if (response.error) {
        return {
            redirect: {
                permanent: false,
                destination: "/404",
            },
        };
    }
    return { props: { optionProcess: response.datos.spalinktipo } };
}

export default function Home({ optionProcess }) {
    const { setOptionProcess } = useContext(GlobalContext);

    useEffect(() => {
        sessionStorage.setItem("optionProcess", optionProcess);
        setOptionProcess(optionProcess);
    }, [])
    return (
        <div>
            <Head>
                <title>eMe</title>
            </Head>
            <Intro />
        </div>
    );
}
