import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({data}) => {
   const {bookName, author, image, category, tags, 
    rating, bookId
    } = data
  return (
          <Link
           to={`/book/${bookId}`}
            className="max-w-full group duration-300 transition hover:scale-105 hover:shadow-xl  p-3  border rounded-2xl"
          >
            <div className="bg-[#F3F3F3] rounded-2xl p-3">
                <img
                role="presentation"
                className="object-contain w-full rounded h-44  p-3"
                src={image}
                />
            </div>

            {/* tags */}
            <div className="flex flex-wrap gap-4 mt-5">
                {
                    tags.map((tag, idx) => <p key={idx} className="bg-[#F3F3F3] px-4 py-1 rounded-r-full rounded-l-full text-[#23BE0A] font-medium work-sans">{tag}</p>)
                }
            </div>
            <div className="space-y-2 mt-2">
              <h3 className="text-2xl font-bold playfair-display">
               {bookName}
              </h3>
              <p className="py-4 border-dashed border-b work-sans">By: {author}</p>
             <div className="flex justify-between font-medium work-sans">
                <p>{category}</p>
                <p className="flex gap-2 items-center"><FaRegStar /> <span>{rating}</span></p>
             </div>
            </div>
          </Link>
  );
};

export default Book;
