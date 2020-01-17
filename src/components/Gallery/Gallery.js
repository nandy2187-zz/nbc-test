import React from 'react';
import Tile from '../Tile/Tile';



const Gallery = ({tiles, sectionName}) => {
    return (
      <section className="gallery__wrapper">
        <h1>{sectionName}</h1>
        <div className="gallery__tiles">
          {/* instead of index we should use a unique idenfier */}
          {tiles.map((tile, index) => <Tile type={tile.component} key={index} {...tile.data}/>)}
        </div>
      </section>
    );
  }
export default Gallery;