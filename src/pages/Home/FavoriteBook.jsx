import React from 'react'
import favBook from '../../assets/SKIN_CARE_FINAL_480x480.webp'
import { Link } from 'react-router-dom'

const FavoriteBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
        <div className='md:w-1/2'>
            <img src={favBook} alt="" className='rounded md:w-10/12' />
        </div>
        <div className='space-y-6 md:w-1/2'>
            <h2 className='text-5xl my-5 font-bold md:w-3/4 leading-snug'>Find Your Favorite <span className='text-blue-600'>Product Here!</span></h2>
            <p className='mb-10 text-lg md:w-5/6'>When selecting eco-friendly products across categories such as clothing, food and groceries, stationary, and beauty, it's essential to prioritize sustainability and ethical considerations. In clothing, opt for garments made from sustainable materials like organic cotton or recycled fibers, while favoring brands committed to fair labor practices and transparent supply chains. When it comes to food and groceries, choose organic produce sourced locally and in-season to minimize environmental impact and support sustainable farming practices. Similarly, for stationary items, look for those crafted from recycled or sustainably sourced materials, and opt for refillable or reusable options to reduce waste. In the realm of beauty, seek out products made with natural ingredients, free from harmful chemicals, and packaged in recyclable or biodegradable materials, while also supporting cruelty-free and vegan brands. By making conscious choices in these categories, consumers can contribute to a more eco-friendly lifestyle and promote positive change for the planet.</p>
            {/* <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
              <div>
                <h3 className='text-3xl font-bold '>800+</h3>
                <p className='text-base'>Product Listing</p>
              </div>
              <div>
                <h3 className='text-3xl font-bold '>550+</h3>
                <p className='text-base'>Regsiter User</p>
              </div>
              <div>
                <h3 className='text-3xl font-bold '>1200+</h3>
                <p className='text-base'>Pdf Downloaded</p>
              </div>
            </div> */}
            <Link to="/shop" className='block mt-8'><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300 '>Explore Now</button></Link>
        </div>
    </div>
  )
}

export default FavoriteBook