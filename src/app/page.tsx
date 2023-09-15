"use client"
import React, { useState, MouseEvent } from 'react';

export default function Dash() {
  const [library, setLibrary] = useState<any[]>([])
  const [query, setQuery] = useState("")

  function doSearch(evt: MouseEvent<HTMLButtonElement>) {
    evt.preventDefault();
    const url = 'http://localhost:80/results/' + query.toString()
    console.log('doSearch: ' + url);

    fetch(url)
        .then(response => {return response.json()})
        .then(json => setLibrary(json));
  }

  const BookList = () => {
    return <div className="bg-indigo-200 h-screen grid grid-cols-2 md:grid-cols-3 gap-4">  
        {library.map(book => (<BookCard key={book.uid} {...book}/>))}
    </div>
  }

  const BookCard = (book: BookType) => {
    return <>
      <div className="h-auto min-h-fit max-w-full rounded-lg bg-no-repeat content flex flex-wrap overflow-hidden py-2" >
        <img src={book.imagePreview} className="h-1/2 2-1/4"/>
        <div className="item-body px-2 w-2/3 h-1/2 break-all">
          <h1 className="text-xl font-bold">{book.title}</h1>
          <h3 className="text-lg italic">{book.authors}</h3>
        </div>
        <div className="item-body px-2 h-1/2">
          <p className="text-lg">{book?.description}</p>
        </div>
      </div>
    </>
  }

  return <>
    <body className="bg-indigo-200">
      <div className="bg-gray-400">
        <form>   
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
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
/**
 * 
 * 
 */
