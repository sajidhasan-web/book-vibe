import Book from "./Book";





const Books = ({data}) => {
   
 
    return (
        <div className="mt-8 md:mt-12">
            <div className="text-center">
                <h2 className="playfair-display text-center text-2xl md:text-4xl font-bold">Books</h2>
            </div>
            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8 md:mt-12">
                {
                    data.map(singleData => <Book key={singleData.bookId} data={singleData}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;