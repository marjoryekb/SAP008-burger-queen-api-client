import React from "react";
import { Link } from "react-router-dom";
import "./menu.css";
import Rei from '../../imagens/rei.png';
import Img from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Product from "../../components/product/product";
import Bebida from '../../imagens/sucosemfundo.png'
const Menu = () => {
    return (
        <div>
            <Img  alt="iconBurger" className="iconRei"  src={Rei}/> 
            <h1>Menu</h1>
            <Product alt="iconBurger" className="iconRei" src={Bebida}/>
            <p>suco de laranja</p>
            <Link to="/chef">
            <button>Cozinha</button>
            </Link>
            <Footer/>
        </div>
    ) 
}
export default Menu;