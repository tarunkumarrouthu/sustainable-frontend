import React, { useEffect, useState } from 'react'
import BookCards from '../shared/BookCards';
import.meta.env.VITE_BACKEND_URL
const BestSeller = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
<<<<<<< HEAD
        fetch(`${import.meta.env.VITE_BACKEND_URL}/all-books`).then(res => res.json()).then(data => setBooks(data.slice(0, 8)))
=======
        fetch("https://sustainable-backend.vercel.app/all-books").then(res => res.json()).then(data => setBooks(data.slice(0, 8)))
>>>>>>> 8f7b0f3cf7d82ebebdba1f51118dd2d7ee5ce623
    }, [])

    return (
        <>
            <BookCards books={books} headline={"Best Sustainable Products"} />
        </>
    )
}

export default BestSeller