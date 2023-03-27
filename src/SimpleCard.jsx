import React from "react";
import Description from "./Description";
import Title from "./Title";
import Image from "./Image";

function SimpleCard() {
    return (
        <div className="App">
            <Image
                img = "./photo.jpg" 
             />

             <div className="card-body">
                <Title
                    title = "New Week, New Plan"
                />
                <Description
                    desc = "Another Monday Morning. The wickedness of the world cannot allow me to smile, but still maintaining freshness. Temptations here and there but i still remain focused. my eye red but my eye clear, can't let anything get between me & my daily bread!"
                />
             </div>
            
        </div>
    )
}

export default SimpleCard