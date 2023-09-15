const BookCard = (book: BookType) => {
    /**Tile containing some information about the book.
     * 
     * Tile was intended to display a popup with greater detail,
     * but I haven't got here yet.
     */
    return <>
      <button className="h-80 rounded-lg bg-no-repeat content flex flex-wrap overflow-hidden py-2 pb-4">
        <div className="bg-gray-900 bg-opacity-50 hover:opacity-70 rounded-lg bg-no-repeat content flex flex-wrap overflow-hidden py-2 pb-4" >
          <img src={book.imagePreview} className="pl-3 h-1/2 w-1/4"/>
          <div className="item-body px-2 w-2/3 h-1/2 break-all min-h-fit">
            <h1 className="text-xl font-bold min-h-fit text-wrap">{book.title}</h1>
            <h3 className="text-lg italic min-h-fit text-wrap">{book.authors}</h3>
          </div>
          <div><p className='overflow-hidden pl-2 pr-2 pt-2 pb-2'>{book.description}</p></div>
        </div>
      </button>
    </>
  }

  export default BookCard