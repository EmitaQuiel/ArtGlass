import React from "react";
import style from "./Art.module.css";
import CardArt from "./CardArt";

function Art(){
    return(
        <section id="art">
            <div className={style.containerArt}>
                <h1>Art for the people</h1>
                <div className={style.cards}>
                <CardArt image="./assets/img/art1.jpg" title="The Travelling Companions" subtitle="Augustus Egg" text="Two elegantly dressed women sit silently in a train carriage, one gazing out the window and the other resting her eyes. Augustus Egg's painting captures a moment of quiet contrast, symbolizing the journey of life and the hidden stories within each person."/>

                <CardArt image="./assets/img/art2.jpg" title="Diamante Snake" subtitle="Morelia Spilotes" text="The Morelia spilotes, or diamond python, is known for its striking black and golden diamond-patterned scales. Agile and powerful, this non-venomous snake climbs trees and plays an important role in the ecosystem by preying on small animals."/>
                </div>
            </div>
        </section>
    )
}

export default Art;