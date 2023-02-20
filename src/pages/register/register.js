import React from "react";
import { Link } from "react-router-dom";
import "./register.css";
import Select from "../../components/select/select";
import Input from "../../components/input/input";
import Footer from '../../components/footer/footer';
import Burger from '../../imagens/rei.png';
import Img from '../../components/header/header';

const Register = () => {
    return (
        <div>
            <Img alt="iconBurger" className="iconRei" src={Burger}/>
        <form className="formRegister">
        <Input  type="text"
                    className="nameAndLastname"
                    placeholder="Nome e Sobrenome"/>
                    <Input type="email"
                     className="email"
                     placeholder="E-mail"/>
                     <Input type="password"
                     className="password"
                     placeholder="Password"/>
           <Select  className="selectRegister"/>
            <Link to="/menu">
            <button className="btnCriar">Criar conta</button>
            </Link>
        </form>
        <Footer/>
        </div>
    ) 
}
export default Register;