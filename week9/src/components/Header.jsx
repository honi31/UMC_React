import React from 'react'
import { Link } from 'react-router-dom';
import LoginControl from './LoginControl';

export default function Header() {
  return (
    <div className="bg-yellow-200">
      <div className="h-16 max-w-7xl mt-0 mb-0 mx-auto flex items-center">
        <div className="flex">
          <Link className="flex items-center" to='/'>
            <img style={{ width: "154px", height: "20px" }}
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
              alt="로고"
            />
          </Link>
          <ul className="flex ml-4">
            <li className="mr-3.5 p-2">
              <Link className="no-underline font-semibold" to="/movie">
                영화
              </Link>
            </li>
            <li className="mr-3.5 p-2">
              <Link className="no-underline font-semibold" to="/tv">
                티비
              </Link>
            </li>
            <li className="mr-3.5 p-2">
              <Link className="no-underline font-semibold" to="/person">
                등장인물
              </Link>
            </li>
          </ul>
          <LoginControl />
        </div>
      </div>
    </div>
  )
}
