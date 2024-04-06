import React, { useEffect, useState } from 'react'
import BookCards from '../shared/BookCards';
import.meta.env.VITE_BACKEND_URL
const OtherBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
<<<<<<< HEAD
        fetch(`${import.meta.env.VITE_BACKEND_URL}/all-books`).then(res => res.json()).then(data => setBooks(data.slice(5, 12)))
=======
        fetch("https://sustainable-backend.vercel.app/all-books").then(res => res.json()).then(data => setBooks(data.slice(5, 12)))
>>>>>>> 8f7b0f3cf7d82ebebdba1f51118dd2d7ee5ce623
    }, [])

    return (
        <div className='mt-24'>
            {/* <BookCards books={books} headline={"Other Products"} /> */}
        </div>
    )
}

export default OtherBooks