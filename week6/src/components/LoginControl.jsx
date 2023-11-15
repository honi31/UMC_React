import React, { useState } from 'react';

const LoginControl = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="flex-auto items-center text-bold">
      <div className="flex items-center">

        {isLoggedIn ? (
          <button
            onClick={handleLogoutClick}
            className="px-4 py-2 rounded-md bg-blue-500 text-white focus:outline-none"
          >
            로그아웃
          </button>
        ) : (
          <button
            onClick={handleLoginClick}
            className="px-4 py-2 rounded-md bg-blue-500 text-white focus:outline-none"
          >
            로그인
          </button>
        )}
        {isLoggedIn ? '환영합니다!' : '로그인을 해주세요.'}
      </div>
    </div>
  );
};


export default LoginControl;
