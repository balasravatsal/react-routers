import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";
import SingleProduct from "./pages/SingleProduct";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./pages/ProtectedRoute";
import SharedProduct from "./pages/SharedProduct";

const App = () => {
    const [user, setUser] = useState(null)

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<SharedLayout/>}>
                        <Route index element={<Home/>}/>
                        <Route path={'/about'} element={<About/>}/>

                        <Route path={'products'} element={<SharedProduct/>}>
                            <Route index element={<Products/>}/>
                            <Route path=':productId' element={<SingleProduct/>} />
                        </Route>

                        <Route path={'/login'} element={<Login setUser={setUser}/>}/>
                        <Route
                            path={'/dashboard'}
                            element={
                                <ProtectedRoute user={user}>
                                    <Dashboard user={user}/>
                                </ProtectedRoute>
                            }
                        />
                        <Route path={'*'} element={<Error/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App