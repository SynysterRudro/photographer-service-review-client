import React, { useEffect, useState } from 'react';
import WriteReview from './WriteReview';


import Review from './Review';

const Reviews = () => {



    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(err => console.error(err))
    }, [])
    return (
        <div className='my-9'>
            <h2 className="text-5xl text-orange-500 text-center font-bold mb-2">Total Reviews - {reviews.length}</h2>
            <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                <WriteReview></WriteReview>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;