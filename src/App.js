import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'about'} element={<About/>}/>
                    <Route path={'products'} element={<Products/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App