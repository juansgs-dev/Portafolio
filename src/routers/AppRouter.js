import React from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import { Navbar } from '../components/Navbar';
import { Home } from '../components/Home'

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
                <Route path="/" element={<Home />} />
        </BrowserRouter>
    )
}