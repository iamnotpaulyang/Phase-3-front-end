import React from "react";
import SoulCards from "./SoulCards";

function SoulContainer({souls}){
    return (
        <div className="cards">
                {souls.map((soul) => {
                    return<SoulCards key={soul.id} soul={soul} />
                })}
        </div>
    );
}

export default SoulContainer;