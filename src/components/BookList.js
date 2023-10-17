import React from 'react'
import BookShow from './BookShow'
// passing books to booklist from app.js 
const BookList = ({books, onDelete, onEdit}) => {
 // book is each individual item in the books
    const renderedBooks = books.map((book)=>{
      // passing props
      // onDelete is passing from app.js to booklist to bookshow
        return <BookShow onEdit={onEdit} onDelete={onDelete} key = {book.id} book = {book}/>
    })
  return (
    <div className='book-list'>
      {/*  renderedBooks is returning BookShow component */}
      {renderedBooks}
    </div>
  )
}

export default BookList
