import React from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { IMG_BASE_URL } from '../components/Movie';

export default function MovieDetail() {
  const { title } = useParams();
  const { state } = useLocation();
  console.log(title);
  console.log(state);

  return (
    <div className="bg-blue-200 h-screen overflow-hidden">
      <div className="flex items-center m-4">
        <img src={IMG_BASE_URL + state.poster_path} alt="영화 포스터 이미지" className="w-60 h-auto" /> 
        <div className="p-4">
          <div className="text-3xl">{title}</div>
          <p className="text-lg mb-2 border-2 border-blue-600 p-2">{state.overview}</p>
          <p className="text-lg">별점: {state.vote_average}</p>
        </div>
      </div>
    </div>
  )
}
