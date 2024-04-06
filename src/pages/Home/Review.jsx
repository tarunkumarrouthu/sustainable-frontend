import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

// react icons
import { FaStar } from 'react-icons/fa6'
import { Avatar } from 'flowbite-react';
import profile from "../../assets/profile.jpg"
import ReviewCard from '../shared/ReviewCard';

const Review = () => {
    return (
        <div className='my-12 px-4 lg:px-24'>
            <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>

            {/* reviews card */}
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                className="mySwiper"
            >
                <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
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
                            <p className='mb-5'>This sustainable shopping guide app has truly revolutionized the way I shop. It's incredibly convenient to have all the information I need about eco-friendly products right at my fingertips. I appreciate the app's extensive database, which includes a wide range of items from clothing to groceries, allowing me to make sustainable choices in every aspect of my life. The reviews and recommendations from other users add a layer of trust and credibility, helping me discover new brands and products that align with my values. Overall, this app has made it so much easier for me to live more sustainably without sacrificing style or convenience.</p>
                            <Avatar
                                alt="avatar of Jese"
                                img={profile}
                                rounded
                                className='w-10 mb-4'
                            />
                            <h5 className='text-lg font-medium'>Mark</h5>
                            <p className='text-sm'> CEO, Arm</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
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
                            <p className='mb-5'>As someone striving to live a more sustainable lifestyle, I can't recommend this app enough! It's become my go-to resource for finding eco-friendly products across various categories. The interface is user-friendly, making it easy to navigate through clothing, food, beauty, and more. I love how the app provides detailed information about each product's sustainability credentials, including materials used, ethical sourcing practices, and environmental impact. Plus, the reviews and ratings from fellow users have helped me make informed purchasing decisions. Whether you're a seasoned eco-warrior or just starting your sustainability journey, this app is a must-have!
</p>
                            <Avatar
                                alt="avatar of Jese"
                                img={profile}
                                rounded
                                className='w-10 mb-4'
                            />
                            <h5 className='text-lg font-medium'>Feeri</h5>
                            <p className='text-sm'> CEO,Tcs</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
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
                            <p className='mb-5'>This app embodies the power of technology to drive positive change. By providing a comprehensive guide to sustainable shopping, it empowers consumers to make informed and ethical choices about the products they purchase. I appreciate the app's commitment to transparency, with detailed information about each product's environmental and social impact. It's refreshing to see a platform that prioritizes sustainability without compromising on usability or functionality. Whether you're passionate about ethical fashion, organic food, or eco-friendly beauty products, this app is an invaluable tool for navigating the world of sustainable shopping. Highly recommended for anyone looking to make a difference with their purchasing decisions!</p>
                            <Avatar
                                alt="avatar of Jese"
                                img={profile}
                                rounded
                                className='w-10 mb-4'
                            />
                            <h5 className='text-lg font-medium'>Jim</h5>
                            <p className='text-sm'> CEO,Lcube</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
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
                            <p className='mb-5'>This app is a game-changer for anyone looking to transform their shopping habits for the better. It's packed with features and resources to help users make more sustainable choices in their everyday lives. I appreciate the app's commitment to education, providing valuable insights into the environmental and social implications of consumerism. The ability to filter products based on specific sustainability criteria makes it easy to find products that align with my values. Overall, this app has empowered me to make a positive impact through my purchasing decisions and has opened my eyes to the importance of sustainable shopping.</p>
                            <Avatar
                                alt="avatar of Jese"
                                img={profile}
                                rounded
                                className='w-10 mb-4'
                            />
                            <h5 className='text-lg font-medium'>Kvin</h5>
                            <p className='text-sm'> CEO,Jolo</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
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
                            <p className='mb-5'> This app has become my trusted companion on my journey towards ethical and sustainable shopping. Its intuitive design and extensive database make it effortless to find eco-friendly alternatives in every aspect of my life. I appreciate the app's commitment to transparency, providing detailed information about each product's sustainability credentials. The ability to filter products based on specific criteria, such as organic or fair trade, ensures that I can make choices that align with my values. Whether you're a seasoned eco-warrior or just starting to explore sustainable living, this app is an invaluable resource.
</p>
                            <Avatar
                                alt="avatar of Jese"
                                img={profile}
                                rounded
                                className='w-10 mb-4'
                            />
                            <h5 className='text-lg font-medium'>Buttler</h5>
                            <p className='text-sm'> CEO,Abhi</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className='h-20'></div>
        </div>
    )
}

export default Review