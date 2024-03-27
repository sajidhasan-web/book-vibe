import toast from "react-hot-toast";



// read books
export const getBooks =() =>{
    let books = []
    const storedBooks = localStorage.getItem('books')
    if(storedBooks){
        books = JSON.parse(storedBooks)
    }
    return books
}


export const saveBooks = (book) =>{
    let books = getBooks()
    const isExist = books.find(b => b.bookId == book.bookId)
    if(isExist){
        return toast.error('You have already read this book!')
    }
    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))
    toast.success('Book Added to Read List Successfully!')
}


// wishlist books

export const getWishlistBooks = () =>{
    let wishlist = []
    const storedBooks = localStorage.getItem('wishlist')
    if(storedBooks){
        wishlist.JSON.parse(storedBooks)
    }
    return wishlist
}

export const saveWishlistBooks = (book) =>{
    let books = getBooks()
    const isExist = books.find(b => b.bookId == book.bookId)
    if(isExist){
        return toast.error('You have already read this book!')
    }
    books.push(book)
    localStorage.setItem('wishlist', JSON.stringify(books))
    toast.success('Added Successfully to Wishlist!')
}