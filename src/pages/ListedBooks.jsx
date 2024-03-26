import { useState } from "react";
import { Link, Outlet } from "react-router-dom";



const ListedBooks = () => {

    const [tabIndex, setTabIndex] = useState(0)
  
  return (
    <div className="mt-8">
      <div className="bg-[#1313130D] py-7 w-full flex justify-center items-center work-sans rounded-2xl">
        <h3 className="text-3xl font-bold">Books</h3>
      </div>
      <div className="flex justify-center mt-7">
        <select className="select select-bordered  sm:select-sm  md:select-md lg:select-lg w-full max-w-xs bg-[#23BE0A] text-white font-semibold">
          <option disabled selected>
            Sort By
          </option>
          <option>Large Apple</option>
          <option>Large Orange</option>
          <option>Large Tomato</option>
        </select>
      </div>
      
        <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap mt-5">
            <Link to=''
             onClick={()=>setTabIndex(0)}
               
                className={`flex items-center flex-shrink-0 px-5 py-3 ${tabIndex == 0 ? " border border-b-0 rounded-tr-lg rounded-tl-lg" : "border-b"} space-x-2 border-b dark:border-gray-600 dark:text-gray-600`}
            >
                <span>Read Books</span>
            </Link>
            <Link to='wishlist-books'
                onClick={()=>setTabIndex(1)}
               
                className={`flex items-center flex-shrink-0 px-5 py-3 ${tabIndex == 1 ? " border border-b-0 rounded-tr-lg rounded-tl-lg" : "border-b"} space-x-2 border-b dark:border-gray-600 dark:text-gray-600`}
            >
                <span>Wishlist Books</span>
            </Link>
        </div>

        <div className="mt-10">
            <Outlet></Outlet>
        </div>
    </div>
  );
};

export default ListedBooks;
