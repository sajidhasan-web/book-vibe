import { useEffect, useState } from "react";
import { getWishlistBooks } from "../utils";

import ReadBook from "./ReadBook";





const WishlistBooks = () => {


    let [wishlistBooks, setWishlistBooks] = useState([])

    useEffect(()=>{
        let books = getWishlistBooks()
        setWishlistBooks(books)
    },[])
    
    
    

    return (
        <div className="space-y-6">
            {
              wishlistBooks.map(book => <ReadBook key={book.bookId} book={book}></ReadBook>)
            }
       </div>
    );
};

export default WishlistBooks;