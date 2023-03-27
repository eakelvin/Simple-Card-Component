import React from "react";

function Image(props) {
    return (
        <div>
            <img className="photo" src={props.img} />
        </div>
    )
}

export default Image