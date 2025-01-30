import React from "react";
import style from './Header.module.css';
function Header(){
    return(
        <header>
            <div className={style.containerHeader}>
                <img src="/assets/img/Logo.png" alt="Logo"/>
                <div className={style.navlist}>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#art">Art</a></li>
                        <li><a href="#exhibitions">Exhibitions</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </header>
        
    )
}

export default Header;