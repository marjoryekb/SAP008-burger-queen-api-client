import React from "react";
import { Link } from "react-router-dom";
import "./chef.css";
import Cozinha from '../../imagens/chef.png';
import Img from '../../components/header/header';
import Footer from '../../components/footer/footer';

const Chef = () => {
    return (
        <div>
           <Img alt="iconCozinha" className="iconRei" src={Cozinha} />
            <h1>Cozinha</h1>
            <Link to="/login">
            <button>login</button>
            </Link>
            <Footer/>
        </div>
    ) 
}
export default Chef;