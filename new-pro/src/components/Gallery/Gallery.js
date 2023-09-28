import React from "react";
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from '../../assets/content/work_schedule.png';

function Gallery(props) {

    const currentCategory = {
        name: "commercial",
        description:
        "Photos of websites",
    };

    return (
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.description}</p>
            <div className="flex-row">
                <img src={photo} alt="work-scheduler" className="img-thumbnail mx-1"></img>
            </div>
        </section>
    );
}

export default Gallery;