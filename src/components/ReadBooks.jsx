
import { useEffect, useState } from "react";
import { getBooks } from "../utils";
import ReadBook from "./ReadBook";


const ReadBooks = () => {
   
    const [books, setBooks] = useState([])
    // get book from localStorage
    useEffect(()=>{
        const getReadBooks = getBooks()
        setBooks(getReadBooks)
    },[])
   
    console.log(books);

  return (
   <div className="space-y-6">
    {
        books.map(book => <ReadBook key={book.bookId} book={book}></ReadBook>)
    }
   </div>
  );
};

export default ReadBooks;
