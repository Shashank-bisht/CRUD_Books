
import './App.css';
import BookCreate from './components/BookCreate'
import { useState } from 'react';
import BookList from './components/BookList';

function App() {
// initially books is empty because user will add it
  const [books, setBooks] = useState([]);

  // this title is comming from BookCreate file
  
  const createBook = (title)=>{
    // updating book list using destructuring for more such updation or deletion code access notes.txt file
   const updateBooks  = [
    ...books, {id: Math.round(Math.random()*999), title: title}
   ]
   setBooks(updateBooks)
  }

  return (
  <div className='app'>
   {/* books is a prop which is passed in BookList file */}
<BookList books={books}/>
 {/* onCreate is a prop which is passed in BookCreate file */}
<BookCreate onCreate={createBook} />

  </div>
  );
}

export default App;
