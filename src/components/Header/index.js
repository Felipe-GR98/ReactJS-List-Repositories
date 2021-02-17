import React from "react";


import "./styles.css";
import LogoImagem from "./logopb.png"


const Header = () => (
    <header id="main-header">
        <img src={LogoImagem} />
        <ul className="menu-lista">
            <li>Noticias</li>
            <li>Politica</li>
            <li>Espotes</li>
            <li>Categorias</li>
        </ul>
    </header>
);

export default Header;