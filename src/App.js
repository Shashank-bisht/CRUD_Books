import axios from "axios"
import './App.css';
import BookCreate from './components/BookCreate'
import {useEffect, useState } from 'react';
import BookList from './components/BookList';

function App() {
// initially books is empty because user will add it
  const [books, setBooks] = useState([]);

// fetch books when user enters in our website
  const fetchBooks = async()=>{
    const response = await axios.get('http://localhost:3001/books');
    // console.log(response) 
    // response is an object
    setBooks(response.data);
  }
// this will return in infinite loop
  // fetchBooks()

  // the useEffect hook, the empty dependency array ([]) means that the effect will run only once
useEffect(()=>{
  fetchBooks();
},[])

// to edit books
// const editBookById = (id, newTitle)=>{
//  const updateBooks = books.map((book )=>{
//   if(book.id === id){
//     return {...book, title: newTitle}
//   }
//   // jiski id match nahi karti usko mat choo
//   return book;
//  })
//  setBooks(updateBooks);
// }

// editing books using axios
// to edit books
const editBookById = async (id, newTitle)=>{
  const response = await axios.put(`http://localhost:3001/books/${id}`,{
    title: newTitle
  })

 const updateBooks = books.map((book )=>{
  if(book.id === id){
    return {...book, ...response.data}
  }
  // jiski id match nahi karti usko mat choo
  return book;
 })
 setBooks(updateBooks);
}


  // for deleting books
  // const deleteBookById = (id)=>{
  // const updateBooks = books.filter((book)=>{
  //   return book.id !== id;
  //   // when conditions are true then it will add  and all books except that is false 
  // })
  // setBooks(updateBooks);
  // }


  const deleteBookById = async (id)=>{
    await axios.delete(`http://localhost:3001/books/${id}`)
  const updateBooks = books.filter((book)=>{
    return book.id !== id;
    // when conditions are true then it will add  and all books except that is false 
  })
  setBooks(updateBooks);
  }
  
  // this title is comming from BookCreate file
  const createBook = async (title)=>{
    // updating book list using destructuring for more such updation or deletion code access notes.txt file

  //  const updateBooks  = [
  //   ...books, {id: Math.round(Math.random()*999), title: title}
  //  ]
  //  setBooks(updateBooks)


  // enhanced code
  //json server will create random id 
  const response = await axios.post('http://localhost:3001/books',{
    title: title,
   })
  //  console.log(response)
   const updateBooks  = [
    ...books, response.data
   ]
   setBooks(updateBooks)
  }

  return (
  <div className='app'>
    <h1>Reading List</h1>
   {/* books is a prop which is passed in BookList file */}
<BookList onEdit={editBookById} books={books} onDelete={deleteBookById}/>
 {/* onCreate is a prop which is passed in BookCreate file */}
<BookCreate onCreate={createBook} />

  </div>
  );
}

export default App;
