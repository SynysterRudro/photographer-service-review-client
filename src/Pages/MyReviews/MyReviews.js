import React, { useContext, useEffect, useState } from 'react';

import { FaEdit } from "react-icons/fa";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import SingleReview from './SingleReview';


const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const { email } = user;
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?email=${email}`, {

        })
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(err => console.error(err))
    }, [])

    return (
        <div className='mb-96'>
            <div className="overflow-x-auto w-1/2 mx-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>

                            <th>Service Id</th>
                            <th>Image</th>
                            <th>Review</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map(review => <SingleReview
                                key={review._id}
                                review={review}
                            ></SingleReview>)
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyReviews;