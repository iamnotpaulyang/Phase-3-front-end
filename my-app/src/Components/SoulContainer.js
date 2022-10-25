import React from "react";
import SoulCards from "./SoulCards";

function SoulContainer({souls, onDeleteSoul, setSouls}){

    function handleUpdateLocation(updateLocation){
        const updatedLoc = souls.map((soul) => {
            if(soul.id === updateLocation.id){
                return (updateLocation)
            } else 
            return soul 
        })
        setSouls(updatedLoc)
    }

    return (
        <div className="cards">
                {souls.map((soul) => {
                    return<SoulCards key={soul.id} soul={soul} onDeleteSoul={onDeleteSoul} onUpdateLocation={handleUpdateLocation} />
                })}
        </div>
    );
}
 
export default SoulContainer;