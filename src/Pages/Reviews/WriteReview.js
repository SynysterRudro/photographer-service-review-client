import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


// writing the review 
const WriteReview = ({ _id }) => {

    // console.log(_id);
    const { user } = useContext(AuthContext);
    console.log(user);

    // review 




    const handleForm = event => {
        event.preventDefault();
        const form = event.target;
        const message = form.message.value;


        const review = {
            service_id: _id,
            displayName: user?.displayName,
            photoURL: user?.photoURL,
            description: message,
            email: user?.email
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.acknowledged) {
                    alert('Review added');
                }
            })


        // console.log(review);

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

                        <input name='message' type="text" placeholder="review" className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900" required />

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