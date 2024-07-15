import React from "react";

const Card = (props) => {
    const {id,description,title} = props;
    return <div className="column">
        <div className="card">
            <div className="container">
                <p className="card-title">{title}</p>
                <p>{description}</p>
                {/* <p>{id}</p> */}
            </div>
        </div>
    </div>
}

export default Card;