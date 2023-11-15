import React from 'react';
import logo from '../img/logo.svg';

const Ad = ({ showAd }) => {
  if (!showAd) {
    return null;
  }

  return (
    <div className="max-w-md mx-auto bg-white p-4 my-4 rounded-md shadow-md">
      <img src={logo} alt="광고" className="w-full h-auto" />
    </div>
  );
};

export default Ad;
