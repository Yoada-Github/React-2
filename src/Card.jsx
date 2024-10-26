import React from "react";

function Card({ title, description, image }) {
    return (
        <div className="card">
            <img src={image || defaultImage} alt={title} className="card-image" />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}

// Default props if some are missing
// Card.defaultProps = {
//     title: "Untitled Card",
//     description: "No description available.",
//     isEnrolled: false,
//     image: defaultImage
// };

export default Card;
