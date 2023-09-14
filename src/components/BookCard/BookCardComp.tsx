import React from "react";

const BookCard = (book: BookType) => {
    return <div className="bookCard" style={{
        backgroundImage: `url(${book.imagePreview})`
      }}>
        <h1>{book.title}</h1>
        <h3>{book.authors}</h3>
        <p>{book?.description}</p>
    </div>
}

export default BookCard