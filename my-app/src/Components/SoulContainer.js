import React from "react";
import SoulCards from "./SoulCards";

function SoulContainer({souls, onDeleteSoul}){
    return (
        <div className="cards">
                {souls.map((soul) => {
                    return<SoulCards key={soul.id} soul={soul} onDeleteSoul={onDeleteSoul} />
                })}
        </div>
    );
}

export default SoulContainer;