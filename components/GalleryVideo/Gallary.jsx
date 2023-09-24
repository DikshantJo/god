// components/ComingSoon.js
import React from 'react';

const ComingSoon = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="max-w-md text-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
          Coming Soon
        </h1>
        <p className="text-gray-600 mb-8">
          We are working hard to bring something amazing to you. Stay tuned!
        </p>
        <div className="bg-blue-500 text-white rounded-full py-2 px-4 hover:bg-blue-600 transition duration-300 ease-in-out">
          Sign Up for Updates
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
