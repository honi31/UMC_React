import React, { useState } from 'react';
import Ad from './Ad';

const AdPage = () => {
  const [showAd, setShowAd] = useState(true); 

  return (
    <div className="p-4">
      <div className="flex items-center space-x-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none"
          onClick={() => setShowAd(!showAd)}
        >
          {showAd ? '광고 숨기기' : '광고 보기'}
        </button>
      </div>
      <Ad showAd={showAd} />
    </div>
  );
};

export default AdPage;
