import React from 'react';
import VideoTile from '../VideoTile/VideoTile';

const getComponent = (type,airDate, episodeNumber, image, secondaryTitle, title) => {
    switch(type) {
        case 'VideoTile':
            return <VideoTile airDate={airDate} episodeNumber={episodeNumber} image={image} secondaryTitle={secondaryTitle} title={title}/>
        case 'UnknowTile':
            return <span>Sorry for the inconvenient, We're working on it</span>
        default:
            break;
      }
}

const Tile = ({type, airDate, episodeNumber, image, secondaryTitle, title}) => {
    const componentElement = getComponent(type,airDate, episodeNumber, image, secondaryTitle, title);
    return componentElement
}
 
export default Tile;