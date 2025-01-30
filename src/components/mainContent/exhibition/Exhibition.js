import React from "react";
import style from "./Exhibition.module.css";
import CardExhibition from "./CardExhibition";
function Exhibition() {
  return (
    <section id="exhibition">
      <div className={style.containerExhibition}>
        <h1>Exhibition</h1>
        <div className={style.cardsExhibition}>
        <CardExhibition image="./assets/img/exhibition1.jpg" title="Hola"/>
        <CardExhibition image="./assets/img/exhibition2.jpg" title="Hola"/>
        <CardExhibition image="./assets/img/exhibition3.jpg" title="Hola"/>
        </div>
      </div>
    </section>
  );
}

export default Exhibition;
