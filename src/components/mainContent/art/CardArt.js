import React from "react";
import style from "./CardArt.module.css";


function CardArt({image, title, subtitle, text}){
    return(
        <div className={style.CardArt}>
            <img src={image} alt="imgArt"/>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>{text}</p>
        </div>
    )
}

export default CardArt;