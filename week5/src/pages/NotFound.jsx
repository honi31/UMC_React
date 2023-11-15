import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="max-w-7xl mt-0 mb-0 mx-auto py-8 px-auto">
      <div className="mt-16 text-5xl font-bold mb-8">
        해당 페이지를 찾지 못했습니다.
      </div>
      <div
        onClick={() => navigate('/')}
        className="text-3xl text-red cursor-pointer">메인페이지로 이동.</div>
    </div>
  )
}
