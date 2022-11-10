import React, { useContext } from 'react';

import { FaUserAlt } from "react-icons/fa";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';



const Review = ({ review }) => {

    const { user } = useContext(AuthContext);
    return (
        <div>
            <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                    <div>
                        {
                            user?.uid ?
                                <img src={review?.photoURL} alt="userImage" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                                :
                                <>
                                    <FaUserAlt className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"></FaUserAlt>
                                </>
                        }
                    </div>
                    <div>
                        <h4 className="font-bold">{review?.displayName}</h4>
                        <span className="text-xs dark:text-gray-400">2 days ago</span>
                    </div>
                </div>
            </div>
            <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
            </div>
        </div>
    );
};

export default Review;