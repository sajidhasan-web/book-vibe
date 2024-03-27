import { useEffect, useState } from "react";
import { getBooks, getWishlistBooks } from "../utils";


const SortBy = () => {

// const [readBooks, setReadBooks] = useState([])
// const [wishlistBooks, setWishlistBooks] = useState([])
const [sortBy, setSortBy] = useState('')

// useEffect(()=>{
//     const read = getBooks()
//     setReadBooks(read)
//     const wishlist = getWishlistBooks()
//     setWishlistBooks(wishlist)
// },[])

// console.log(readBooks);
// console.log(wishlistBooks);


const handleSort=(e)=>{
 const sort = e.target.value
 setSortBy(sort)
}



    return (
        <div className="flex justify-center mt-7">
            <select onChange={handleSort} className="select select-bordered sm:select-sm md:select-md lg:select-lg w-full max-w-xs bg-[#23BE0A] text-white font-semibold">
            <option disabled selected>
                Sort By
            </option>
            <option>Rating</option>
            <option>Number of pages</option>
            <option>Published</option>
            </select>
      </div>
    );
};

export default SortBy;