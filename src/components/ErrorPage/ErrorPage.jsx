import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="text-center text-2xl font-bold text-red-400">Oops! You have below error!</h2>
                    <h2 className="text-center text-3xl font-bold text-red-500">{error.message}</h2>
                    <p className="mt-2 text-center text-sm text-gray-500">
                        Please try again later or contact support if the problem persists.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;