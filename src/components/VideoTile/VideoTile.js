import React from 'react';

const getBadge = (date, episodeNumber) => {
    const releaseDate = new Date(date);
    const today = new Date();
    //This should/could be in an util file.
    const differenceBetweenDates = Math.floor((Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()) - Date.UTC(releaseDate.getFullYear(), releaseDate.getMonth(), releaseDate.getDate()) ) /(1000 * 60 * 60 * 24));
    const isNew = (Math.floor(differenceBetweenDates) < 7)

    if(episodeNumber === "1") {
        return "PREMIERE";
    } else if(isNew) {
        return "NEW";
    }

    return false;
}

const VideoTile = ({airDate, episodeNumber, image, secondaryTitle, title}) => {
    let badge = getBadge(airDate,episodeNumber);
    return (
        <section className="tile">
            <div className="tile__image">
                {badge && <span className="tile__badge">{ badge }</span>}
                <img loading="lazy" alt={title} src={process.env.PUBLIC_URL + image} />
            </div>
            <div className="tile__content">
                <span className="tile__title">{title}</span>
                <span className="tile__detail">{secondaryTitle}</span>
            </div>
        </section>
    )
}
 
export default VideoTile;