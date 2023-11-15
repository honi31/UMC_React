import { useState } from 'react';
import React from 'react';

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500/";

export default function Movie({ title, poster_path, vote_average, overview }) {
  const [hovered, setHover] = useState(false);

  const handleMouseOver = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

return (
    <div
      className={`w-64 m-4 bg-blue-700 text-white rounded-lg shadow-md overflow-hidden relative ${
        hovered ? 'ring-2 ring-white' : ''
      }`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <img src={IMG_BASE_URL + poster_path} alt="영화포스터" className="w-full" />
      <div className='p-5'>
        <h4 className="text-lg font-semibold">{title}</h4>
        <span className="text-sm">{vote_average}</span>
      </div>
      <div className={`absolute top-0 bottom-0 left-0 w-full p-5 bg-black text-white opacity-0 transition-opacity duration-300 ${
        hovered ? 'opacity-80' : 'opacity-0'
      }`}
    >
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="text-sm overflow-y-auto">
        {overview}
        </p>
      </div>
      </div>
  );
}
