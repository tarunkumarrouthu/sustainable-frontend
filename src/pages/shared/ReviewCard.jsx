import React from 'react'
// react icons
import { FaStar } from 'react-icons/fa6'
import { Avatar } from 'flowbite-react';
import profile from "../../assets/profile.jpg"

const ReviewCard = () => {
    return (
        <div className='space-y-6'>
            <div className='text-amber-500 flex gap-2'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>

            {/* texts */}
            <div className='mt-7'>
                <p className='mb-5'>As someone striving to live a more sustainable lifestyle, I can't recommend this app enough! It's become my go-to resource for finding eco-friendly products across various categories. The interface is user-friendly, making it easy to navigate through clothing, food, beauty, and more. I love how the app provides detailed information about each product's sustainability credentials, including materials used, ethical sourcing practices, and environmental impact. Plus, the reviews and ratings from fellow users have helped me make informed purchasing decisions. Whether you're a seasoned eco-warrior or just starting your sustainability journey, this app is a must-have!</p>
                <Avatar
                    alt="avatar of Jese"
                    img={profile}
                    rounded
                    className='w-10 mb-4'
                />
                <h5 className='text-lg font-medium'>Joseph</h5>
                <p className='text-sm'> CEO,Cubi</p>
            </div>
        </div>
    )
}

export default ReviewCard