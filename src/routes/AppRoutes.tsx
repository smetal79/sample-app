import React from 'react';
import { Route, Routes } from 'react-router-dom';

import routePaths from './routeConfig';

export default function AppRoutes() {
    return (
        <Routes>
            {
                Object.values(routePaths)
                    .map(({ path, Component }, i) =>
                        <Route key={`${i}-{path}`} path={path} element={<Component />} />)
            }
        </Routes>
    )
}