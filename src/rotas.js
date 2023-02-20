import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Login from './pages/login/login';
import Register from './pages/register/register';
import Menu from './pages/menu/menu';
import Chef from './pages/cozinha/chef';

const RoutesBk = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/register' element={<Register />} />
                <Route exact path='/menu' element={<Menu />} />
                <Route exact path='/chef' element={<Chef />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesBk;