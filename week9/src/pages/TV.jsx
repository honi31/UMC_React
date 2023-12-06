import React from 'react';
import { tvs } from '../tvDummy';
import { useState } from 'react';

export const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500/";

export default function TV() {
  const [hoveredItems, setHoveredItems] = useState(new Array(tvs.results.length).fill(false));

  const handleMouseOver = (index) => {
    const newHoveredItems = [...hoveredItems];
    newHoveredItems[index] = true;
    setHoveredItems(newHoveredItems);
  };

  const handleMouseOut = (index) => {
    const newHoveredItems = [...hoveredItems];
    newHoveredItems[index] = false;
    setHoveredItems(newHoveredItems);
  };

  return (
      <div className="bg-blue-500 flex flex-wrap justify-center text-white">
        {tvs.results.map((item, index) => (
          <div key={index}
            className={`w-64 m-4 bg-blue-700 text-white rounded-lg shadow-md overflow-hidden relative ${
              hoveredItems[index] ? 'ring-2 ring-white' : ''
            }`}
            onMouseOver={() => handleMouseOver(index)}
            onMouseOut={() => handleMouseOut(index)}
          >
            <img src={IMG_BASE_URL + item.poster_path} alt={item.name} />
            <div className='p-5'>
              <h4 className='text-lg font-semibold'>{item.name}</h4>
              <span className='text-sm'>{item.vote_average}</span>
            </div>
            <div className={`absolute top-0 bottom-0 left-0 w-full p-5 bg-black text-white opacity-0 transition-opacity duration-300 ${
              hoveredItems[index] ? 'opacity-80' : 'opacity-0'
            }`}
            >
              {item.overview}
            </div>
          </div>
        ))}
          
      </div>
  )
}
