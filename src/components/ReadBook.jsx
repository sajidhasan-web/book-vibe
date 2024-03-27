import { GoPeople } from "react-icons/go";
import { MdOutlineFindInPage } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const ReadBook = ({book}) => {
 
    const {bookName, author, image, category, tags, 
        rating, bookId, publisher, totalPages, yearOfPublishing
        } = book
    
  return (
    <div className="md:flex gap-4 border p-4 rounded-2xl">
      <div className="bg-[#1313130D] py-7 px-12 max-h-[400px] max-w-[200px] rounded-2xl">
      <img className="h-full w-full"
          src={image}
          alt="Album"
        />
      </div>
        
     
      <div className="w-full">
        <h2 className="text-2xl font-bold playfair-display">{bookName}</h2>
        <p>By: <span className="font-semibold">{author}</span></p>

            <div className="flex flex-wrap gap-4 mt-5">
                {
                    tags.map((tag, idx) => <p key={idx} className="bg-[#F3F3F3] px-3 py-1 rounded-r-full hover:underline text-sm rounded-l-full text-[#23BE0A] font-medium work-sans">#{tag}</p>)
                }
                <div><p className="flex items-center gap-2"><IoLocationOutline className="text-xl"></IoLocationOutline> Year of Publishing: <span className="font-semibold">{yearOfPublishing}</span></p></div>
            </div>
            <div className="md:flex gap-10 mt-4 w-full border-b pb-5">
                <p className="flex items-center"><GoPeople className="text-xl"></GoPeople> <span className=" ml-2 text-[#13131399]"> Publisher: {publisher}</span></p>
                <p className="flex items-center"><MdOutlineFindInPage className="text-xl"></MdOutlineFindInPage> <span className=" ml-2 text-[#13131399]"> Pages: {totalPages}</span></p>
            </div>
            <div className="mt-4 flex gap-2 flex-wrap">
                <button className="px-5 py-2 rounded-l-full rounded-r-full bg-[#328EFF26] text-[#328EFF] hover:opacity-60">Category: {category}</button>
                <button className="px-5 py-2 rounded-l-full rounded-r-full bg-[#FFAC3326] text-[#FFAC33] hover:opacity-60">Rating: {rating}</button>
                <Link  to={`/book/${bookId}`}><button className="px-5 py-2  rounded-l-full rounded-r-full bg-[#23BE0A] hover:bg-opacity-80 text-white">View Details</button></Link>
            </div>
      </div>
    </div>
  );
};

export default ReadBook;
