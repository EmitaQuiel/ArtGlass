import React from "react";
import style from "./CardExhibition.module.css";

function CardExhibition({image, title}) {
  return(
    <div className={style.cardExhibition}>
        <img src={image} alt="imgExhibition"/>
    </div>
  )
}

export default CardExhibition;
