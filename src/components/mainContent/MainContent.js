import React from "react";
import Hearo from "./hearo/Hearo";
import Art from "./art/Art";
import Exhibition from "./exhibition/Exhibition";
function MainContent(){
    return(
        <main>
            <Hearo />
            <Art />
            <Exhibition />
        </main>
    )
}

export default MainContent;