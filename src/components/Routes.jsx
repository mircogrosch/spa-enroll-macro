import React from "react";
import { Route, Routes } from "react-router-dom";
import { Intro, Welcome, DNI, ProcessRegistration } from "../screens/index";

export default function CustomRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Intro />} />
            <Route
                path="/process-registration"
                element={<ProcessRegistration />}
            />
        </Routes>
    );
}
