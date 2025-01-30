import React from "react";
import style from "./Hearo.module.css";

function Hearo() {
  return (
    <section id="home">
      <div className={style.containerHearo}>
        <div className={style.Hearo}>
          <div className={style.imgHearo}>
            <img src="./assets/img/imgHearo1.jpg" alt="imgHearo" />
          </div>
          <div className={style.information}>
            <div className={style.conten1}>
              <h1>Battle of Quebec</h1>
              <h3>exhibition</h3>
            </div>
            <div className={style.conten2}>
                <p>29.05.25</p>
                <p>06.06.2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hearo;
