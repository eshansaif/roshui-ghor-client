import React from 'react';

const PopularRecipes = () => {
    return (
        <div>
            <div className="flex items-center mx-4 md:mx-16 mb-6 mt-10">
                <hr className="border-t border-gray-300 flex-grow mr-3" />
                <h2 className="text-gray-800 text-lg font-bold">See Popular Recipes</h2>
                <hr className="border-t border-gray-300 flex-grow ml-3" />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 mb-6 mx-4 md:mx-16'>
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                    <div className="aspect-w-16 aspect-h-9">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/Lw7EixBGu60"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                    <div className="p-4">
                        <h3 className="font-medium text-gray-800">Chicken Francaise Recipe over 200 Million Views</h3>
                        <p className="text-gray-600 text-sm mt-1">Recipe30
                        </p>
                    </div>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                    <div className="aspect-w-16 aspect-h-9">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/R_NvMqbH6rs"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                    <div className="p-4">
                        <h3 className="font-medium text-gray-800">How to Make Perfect Chicken Manchurian Every Time
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">Taste Show</p>
                    </div>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                    <div className="aspect-w-16 aspect-h-9">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/dRW3VMfNlaY"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                    <div className="p-4">
                        <h3 className="font-medium text-gray-800">Honey garlic chicken ! Dinner ready in 15 minutes</h3>
                        <p className="text-gray-600 text-sm mt-1">Delicious and easy recipes</p>
                    </div>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                    <div className="aspect-w-16 aspect-h-9">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/v0j_tFRaB2c"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                    <div className="p-4">
                        <h3 className="font-medium text-gray-800"> Make Delicious Honey Garlic Chicken in Just 15 Minutes!</h3>
                        <p className="text-gray-600 text-sm mt-1">Angel Food</p>
                    </div>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                    <div className="aspect-w-16 aspect-h-9">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/J9xgdp1LRvY"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                    <div className="p-4">
                        <h3 className="font-medium text-gray-800">I've never eaten chicken breast like this! Easy and quick recipe!</h3>
                        <p className="text-gray-600 text-sm mt-1">
                            Kusina ni Lola</p>
                    </div>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                    <div className="aspect-w-16 aspect-h-9">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/a03U45jFxOI"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                    <div className="p-4">
                        <h3 className="font-medium text-gray-800">How To Make Butter Chicken At Home | Restaurant Style Recipe | The Bombay Chef – Varun Inamdar
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">Get Curried
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PopularRecipes;