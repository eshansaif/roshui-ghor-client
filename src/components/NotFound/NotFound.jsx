import React from 'react';

const NotFound = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-800 mb-8">404</h1>
                <div className='flex justify-center items-center'>
                    <img className="w-72 mb-8" src="https://cdn.dribbble.com/users/605899/screenshots/4144886/media/ce35614480247e178703e99048a7e724.gif" alt="Animated 404" />
                </div>
                <p className="text-gray-600 text-xl mb-8">Oops! The page you're looking for doesn't exist.</p>

                <a href="/" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Go back home</a>
            </div>
        </div>
    );
};

export default NotFound;
