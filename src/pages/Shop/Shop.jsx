import React, { useContext, useEffect, useState } from 'react'
import { Card, Spinner } from 'flowbite-react';
import { AuthContext } from '../../contexts/AuthProvider';
import { Link } from 'react-router-dom';
import.meta.env.VITE_BACKEND_URL
export default function Shop() {
  const {loading } = useContext(AuthContext);
  const [books, setBooks] = useState([]);
// fetching data
  useEffect(() =>{
<<<<<<< HEAD
    fetch(`${import.meta.env.VITE_BACKEND_URL}/all-books`)
=======
    fetch('https://sustainable-backend.vercel.app/all-books')
>>>>>>> 8f7b0f3cf7d82ebebdba1f51118dd2d7ee5ce623
    .then(res => res.json())
    .then(data => setBooks(data))
  }, [loading]);

    // loader
    if (loading) {
      return <div className="text-center mt-28">
          <Spinner aria-label="Center-aligned spinner example" />
      </div>
  }


  return (
    <div className='my-28 px-4 lg:px-24'>
      <h2 className='text-3xl font-bold text-center mb-16 z-40'>All Products are Available Here</h2>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
          {
            books.map(book => <Card>
              <img src={book.imageURL} alt="" className='h-96' />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <p>
                  {book.bookTitle}
                </p>
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                <p>
                  {book.bookDescription}
                </p>
              </p>

              <Link to={book.bookPDFURL}><button className='px-4 py-2 bg-blue-600 text-white rounded'>Buy Now</button></Link>
            </Card>)
          }
        </div>
    </div>
  )
}
