import React from "react";
import {Routes, Route, Navigate} from 'react-router-dom';
import { TimePage } from "./pages/TimePage";
import { CityPage } from "./pages/CityPage";

export const useRoutes = () => {

    return (
        <Routes>
            <Route path="/time" element={<TimePage />} />
            <Route path="/" element={<CityPage />} />
            {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
    );
};