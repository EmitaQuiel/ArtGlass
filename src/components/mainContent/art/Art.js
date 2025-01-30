import React from "react";
import style from "./Art.module.css";
import CardArt from "./CardArt";

function Art(){
    return(
        <section id="art">
            <div className={style.containerArt}>
                <h1>Art</h1>
                <div className={style.cards}>
                <CardArt image="./assets/img/art1.jpg" title="The Travelling Companions" subtitle="Augustus Egg" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>

                <CardArt image="./assets/img/art2.jpg" title="Diamante Snake" subtitle="Morelia Spilotes" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
                </div>
            </div>
        </section>
    )
}

export default Art;