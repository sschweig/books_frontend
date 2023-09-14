import React from "react";
import BookCard from "@/components/BookCard/BookCardComp";

const BookList = (booksTmp: any) => {
    const books:Array<BookType> = booksTmp as BookListType;
    
    return <div className="bookList">        
        {books.map(book => (
            <BookCard 
            key={book.uid}
            {...book}
            />
        ))}

    </div>
}
export default BookList