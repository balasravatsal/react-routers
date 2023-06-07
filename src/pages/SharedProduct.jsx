import React from 'react';
import Navbar from "../components/Navbar";
import {Outlet} from "react-router-dom";

const SharedProduct = () => {
    return (
        <>
            <h2>products</h2>
            <Outlet/>
        </>
    );
};

export default SharedProduct;