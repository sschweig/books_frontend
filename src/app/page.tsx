"use client"
import React, { useState, MouseEvent } from 'react';

export default function Dash() {
  // State setup
  const [library, setLibrary] = useState<BookType[]>([]) // Query results list
  const [query, setQuery] = useState("") // Query storage

  /**Queries and returns the results from the Google Books API.
   * 
   * Simple url builder replaces the spaces with `+` characters. 
   * Url is logged then then executed, after which the response is
   * converted to JSON and stored in the `library` state.
   * 
   * @param evt 
   */
  function doSearch(evt: MouseEvent<HTMLButtonElement>): void {
    evt.preventDefault();
    if (query.length == 0) {

    }else{
      const url = 'http://localhost:80/results/' + query.toString().split(' ').join('+')
      console.log('doSearch: ' + url);

      fetch(url)
          .then(response => {return response.json()})
          .then(json => setLibrary(json));
    }
  }

  const BookList = () => {
    /**List of BookCards.
     * 
     * Uses builin map function to spin out a BookCard tile for 
     * each value in `library`.
     */
    return <div className="h-screen bg-green-200 grid grid-cols-2 md:grid-cols-3 gap-4">  
        {library.map(book => (<BookCard key={book.uid} {...book}/>))}
    </div>
  }

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

  return <>
    <body className='w-full'>
      <div className="bg-gray-400">
        <form>   
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input 
                  type="text" 
                  id="default-search" 
                  onChange={(evt)=> setQuery(evt.target.value)}
                  value={query} 
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                  placeholder="Search Library"  
                  required />
                <button 
                  type="submit" 
                  onClick={doSearch}
                  className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Search
                </button>
            </div>
        </form>
      </div>
      <BookList/>
    </body>
  </>
}

