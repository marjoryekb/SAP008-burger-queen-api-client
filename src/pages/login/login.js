import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';

import Burger from '../../imagens/rei.png';
import Img from '../../components/header/header';
import Input from '../../components/input/input';
import Footer from '../../components/footer/footer';



const Login= () => {
    return (
        <>
                <Img
                alt="iconBurger" className="iconRei" src={Burger}
                />
                <form className="formRegister">
                    <Input type="email"
                     className="email"
                     placeholder="E-mail"/>
                     <Input type="password"
                     className="password"
                     placeholder="Password"/>
                     <Link to="/menu">
                     <button className="btnLogin">Login</button>
                    </Link>
                    <Link to="/register">
                        <p className="registerLogin">Cadastre-se</p>
                    </Link>
                    </form>
               <Footer/>
        </>
        )
    }
export default Login;
