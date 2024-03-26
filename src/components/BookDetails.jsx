

import { useLoaderData, useParams } from "react-router-dom";
import { saveBooks } from "../utils";


const BookDetails = () => {
    const books = useLoaderData();
    const {id} = useParams();
    const intId = parseInt(id);
    const book = books.find(book => book.bookId === intId)
    const {image,tags,author,bookName,category,rating, review,totalPages,publisher,yearOfPublishing } = book

   

    const handleRead = (book) =>{
        saveBooks(book)
    }

    const handleWishlist = () =>{

    }



    return (
        <div className='container mx-auto mt-[50px] md:mt-[100px] px-4'>
        <div className='md:flex justify-between'>
            <div className='md:w-[45%] flex justify-center items-center p-[40px] bg-[#F3F3F3] rounded-[16px]'>
                <div className='w-[70%]'>
                    <img className='w-full h-full' src={image} alt="" />
                </div>
            </div>
            <div className='md:w-[50%]'>
                <div className='pb-6 border-b-[1px] border-[#13131326] mt-6'>
                    <h2 className='text-[#131313] text-2xl md:text-[2.5rem] font-bold playfair-display'>{bookName}</h2>
                    <p className='text-[#131313CC] text-[1.25rem] font-medium md:mt-5 work-sans'>By: {author}</p>
                </div>

                <div className='py-4 border-b-[1px] border-[#13131326] work-sans'>
                    <h4 className='text-[#131313CC] text-[1.25rem] font-medium'>{category}</h4>
                </div>
                <div className='mt-6'>
                    <p className='text-[#131313B2]'><span className='text-[#131313] font-bold work-sans'>Review:</span> {review}</p>
                </div>

                <div className='flex gap-4 items-center py-7 border-b-[1px] border-[#13131326] work-sans'>
                <h4 className='text-[#131313] font-bold'>Tag </h4>
                
                       <div className='space-x-3 flex-wrap'>
                            {
                                tags.map((tag, idx) =><button key={idx} className="text-[#23BE0A] py-[6px] px-3 m-2 bg-[#23BE0A0D] rounded-[30px]">{tag}</button>)
                            }
                       </div>
                </div>

                <div className='flex gap-[60px] mt-6 work-sans'>
                    <div className='text-[#131313B2] space-y-3'>
                        <h4>Number of Pages:</h4>
                        <h4>Publisher:</h4>
                        <h4>Year of Publishing:</h4>
                        <h4>Rating:</h4>
                    </div>
                    <div className='text-[#131313] font-semibold space-y-3'>
                        <h4>{totalPages}</h4>
                        <h4>{publisher}</h4>
                        <h4>{yearOfPublishing}</h4>
                        <h4>{rating}</h4>
                    </div>
                </div>

                <div className='mt-8 space-x-4 work-sans'>
                    <button onClick={()=>handleRead(book)} className='border-[1px] border-[#1313134D] px-7 py-4 rounded-[8px] text-[#131313] text-[1.125rem] font-semibold'>Read</button>
                    <button onClick={()=>handleWishlist(book)}  className='border-[#1313134D] px-7 py-4 rounded-[8px] text-[#FFF] text-[1.125rem] font-semibold bg-[#50B1C9]'>Wishlist</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default BookDetails;