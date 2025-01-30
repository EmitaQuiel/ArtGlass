import React from "react";
import style from "./Exhibition.module.css";
import CardExhibition from "./CardExhibition";
function Exhibition() {
  return (
    <section id="exhibition">
      <div className={style.containerExhibition}>
        <div className={style.title}>
          <h1>Exhibition</h1>
        </div>

        <div className={style.cardsExhibition}>
          <CardExhibition image="./assets/img/exhibition1.jpg" />
          <CardExhibition image="./assets/img/exhibition6.jpg" />
          <CardExhibition image="./assets/img/exhibition2.jpg"  />
          <CardExhibition image="./assets/img/exhibition4.jpg"  />
          <CardExhibition image="./assets/img/exhibition3.jpg" />
          <CardExhibition image="./assets/img/exhibition5.jpg" />
        </div>
      </div>
    </section>
  );
}

export default Exhibition;
