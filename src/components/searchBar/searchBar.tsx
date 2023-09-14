import { Context } from '@/context/Context';
import React, { MouseEvent, useContext, useState } from 'react';

const SearchBar = () => {
    const [query, setQuery] = useState("")
    const {state,dispatch} = useContext(Context)

    const updateSearch = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(evt.target.value)
        console.log(evt.target.value)
    }
  
    async function doSearch(evt: MouseEvent<HTMLButtonElement>) {
        evt.preventDefault();
        let url = 'http://localhost:80/results/' + query.toString()
        console.log('doSearch: ' + url);
  
        console.log('%%%')        
        const resp = await fetch(url);
        console.log(resp);
        console.log('^^^^')
        const books = await resp.json();
        console.log(books);
        console.log(typeof books);
        console.log('%%%')
        console.log(books['books']);
        dispatch({
            type:"UPDATE_BOOK_LIST",
            booklist: books['books'] as BookListType
        })

        /*
        fetch(url)
            .then(response => response.json())
            .then(json => dispatch({
                type:"UPDATE_BOOK_LIST",
                booklist: json.data
            })
        );*/
    }
  
    
    return <div className='searchForm'>
        <form>
            <input 
                type="text" 
                placeholder="Enter keywords and search for matching books."
                onChange={updateSearch}>
            </input>
            <button onClick={doSearch}>Search</button>
        </form>
  </div>
}

export default SearchBar