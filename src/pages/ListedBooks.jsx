import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import SortBy from "../components/SortBy";



const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0)
  
  return (
    <div className="mt-8">
      <div className="bg-[#1313130D] py-7 w-full flex justify-center items-center work-sans rounded-2xl">
        <h3 className="text-3xl font-bold">Books</h3>
      </div>
        {/* sort options */}
         <SortBy></SortBy>
      
        <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap mt-5">
            <Link to=''
             onClick={()=>setTabIndex(0)}
               
                className={`flex items-center flex-shrink-0 px-5 py-3 ${tabIndex == 0 ? " border border-b-0 rounded-tr-lg rounded-tl-lg" : "border-b"} space-x-2 border-b dark:border-gray-600 dark:text-gray-600`}
            >
                <span>Read Books</span>
            </Link>
            <Link to='wishlist'
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
