import './App.css';
import React, { useState } from 'react';
import Bookslist from '../Bookslist/Bookslist';
import SearchBar from '../SearchBar/SearchBar';
import BookDetails from '../Bookslist/BookDetails/BookDetails';

function App() {
  const [search, setSearch] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);
  return ( 
    <>
    <div className="App">
      <SearchBar setSearch ={setSearch} />
      <Bookslist search={search} onSelectBook={setSelectedBook} />

      {selectedBook && <BookDetails bookId={selectedBook} />}

    </div>

</>
  );
}

export default App;
