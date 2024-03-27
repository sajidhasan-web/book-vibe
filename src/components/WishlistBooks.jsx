import { useEffect, useState } from "react";
import { getWishlistBooks } from "../utils";


const WishlistBooks = () => {

    const [books, setBooks] = useState([])
    // get book from localStorage
    useEffect(()=>{
        const getReadBooks = getWishlistBooks()
        setBooks(getReadBooks)
    },[])

    console.log(books);

    return (
        <div>
            <h2>Wishlist books</h2>
        </div>
    );
};

export default WishlistBooks;