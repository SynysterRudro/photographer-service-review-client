import React from 'react';

const Preview = () => {
    return (
        <div>
            <h2 className="text-5xl text-orange-500 text-center font-bold">Preview</h2>
            <div className="p-5 mx-auto sm:p-10 md:p-16  dark:text-gray-100">
                <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                    <img src="https://source.unsplash.com/random/480x360" alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
                    <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900">
                        <div className="space-y-2">
                            <p className="inline-block text-2xl font-semibold sm:text-3xl">Capture your precious moments</p>
                            <p className="text-sm dark:text-gray-400">
                                Rudro
                            </p>
                        </div>
                        <div className="dark:text-gray-100">
                            <p>Life is small and one person can't explore the whole worlds/moments. So, capture your moments and share them with others.
                                <br />
                                Client satisfaction is our main motto.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Preview;