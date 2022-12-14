import React, { useEffect, useState } from 'react';
import WriteReview from './WriteReview';


import Review from './Review';

// review sections 
const Reviews = ({ _id }) => {

    console.log(_id);


    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`https://photographer-service-review-server-nb3pfkb2i-synysterrudro.vercel.app/reviews?service_id=${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(err => console.error(err))
    }, [_id, reviews])
    return (
        <div className='my-9'>
            <h2 className="text-5xl text-orange-500 text-center font-bold mb-2">Total Reviews - {reviews.length}</h2>
            <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                <WriteReview
                    _id={_id}
                ></WriteReview>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                        _id={_id}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;