import React, { useEffect, useState } from 'react'
import BookCards from '../shared/BookCards';

const BestSeller = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("https://sustainable-backend.vercel.app//all-books").then(res => res.json()).then(data => setBooks(data.slice(0, 8)))
    }, [])

    return (
        <>
            <BookCards books={books} headline={"Best Sustainable Products"} />
        </>
    )
}

export default BestSeller