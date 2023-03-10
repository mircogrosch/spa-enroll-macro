import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({});
    const [dniInfo, setDniInfo] = useState(null);
    const [selfie, setSelfie] = useState(null);
    const [optionProcess, setOptionProcess] = useState(null);
    const [uuid, setUIID] = useState(null);
    const providerValue = {
        userInfo,
        setUserInfo,
        dniInfo,
        setDniInfo,
        selfie,
        setSelfie,
        optionProcess,
        setOptionProcess,
        uuid,
        setUIID
    };

    return (
        <GlobalContext.Provider value={providerValue}>
            {children}
        </GlobalContext.Provider>
    );
};
