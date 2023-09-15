"use client"
import React, { useState, MouseEventHandler, useContext } from 'react';
import SearchBar from '@/components/searchBar/searchBar';
import BookCard from "@/components/BookCard/BookCardComp";
import BookList from '@/components/BookList/BookListComp';

export default function Dash() {
  const [library, setLibrary] = useState([])
  
  const updateLibrary = (data) => {
    console.log(data)
    console.log('vals')
    console.log(Object.values(data))
    console.log('ents')
    console.log(Object.entries(data))
    console.log('keys')
    console.log(Object.keys(data))
    console.log(typeof data)

    for (let el in Object.values(data)){
      console.log('EL: ' + el)
    }

    setLibrary(data)
    console.log('Library set: ' + library.length)
    //console.log('library: ' + library.toString())
    console.log('entries: ' + library.entries())
    console.log('values: ' + library.values())
}
  
  return <>
    <header>
      <h1>My Library</h1>
      <SearchBar cb={updateLibrary}/>
    </header>
    <body>
      {library.map(user => (
            <li key={user.uid}>{user.title}</li>
          ))}
    </body>
  </>
}

/**
 * {library.length > 0 ? (
      <BookList {...library}/>
    ) : (
      <p>Hello Moto</p>
    )}   
 * 
 * {library.map(function(object){
        return <BookCard 
          key={object.uid}
          {...object}
          />
      })}
 */