import React from 'react';
import { FaEdit } from 'react-icons/fa';

const SingleReview = ({ review }) => {
    const { service_id, photoURL, description } = review
    return (
        <>
            {/* <!-- row 1 --> */}
            <tr>
                <th>

                    <button className='btn btn-ghost'><FaEdit className='text-2xl'></FaEdit></button>
                    <button className='btn btn-ghost text-2xl'>X</button>

                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={photoURL} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{service_id}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {description}
                </td>

            </tr>
        </>
    );
};

export default SingleReview;