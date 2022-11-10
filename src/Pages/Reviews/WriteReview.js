import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const WriteReview = () => {

    const { user } = useContext(AuthContext);

    // review 



    const handleForm = event => {
        event.preventDefault();
        const form = event.target;
        const review = form.review.value;

        console.log(review);

        form.reset();
    }

    return (

        <div>
            <form onSubmit={handleForm} className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-900 dark:text-gray-100">
                <div className="flex flex-col items-center w-full">
                    <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
                    <div className="flex flex-col items-center py-6 space-y-3">
                        <span className="text-center">{user?.displayName}</span>

                    </div>
                    <div className="flex flex-col w-full">

                        <input name='review' type="text" placeholder="review" className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900" required />

                        <input className="py-4 my-8 font-semibold rounded-md dark:text-gray-900 dark:bg-violet-400" type="submit" value="Leave feedback" />
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <Link to='/services' className="text-sm dark:text-gray-400">Maybe later</Link>
                </div>
            </form>
        </div>
    );
};

export default WriteReview;