"use client"
import React, { useState, MouseEventHandler, useContext } from 'react';
import { Context } from '@/context/Context';
import BookList from "@/components/BookList/BookListComp";
import SearchBar from '@/components/searchBar/searchBar';

export default function Dash() {
  const {state,dispatch} = useContext(Context)
  
  return <>
    <header>
      <h1>My Library</h1>
      <SearchBar />
    </header>
    <body>
      <BookList books={state.booklist}/>
    </body>
  </>
}
