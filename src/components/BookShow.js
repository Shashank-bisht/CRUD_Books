import React from 'react'
import BookEdit from './BookEdit'
import { useState } from 'react';
// passing book from booklist
const BookShow = ({book, onDelete, onEdit}) => {
  // each bookshow has separate peice of state name showedit
  const [showEdit, setShowEdit] = useState(false)
  const handleDeleteClick=()=>{
   onDelete(book.id);
  }
 // show edit is bydefault false
  const handleEditClick=()=>{
  setShowEdit(!showEdit);
  }
 
const handleSubmit = (id, newTitle)=>{
  setShowEdit(false);
  onEdit(id, newTitle)
}


  // if show edit is true then show Bookedit component
  let content = <h3>{book.title}</h3>
  if(showEdit){
    // passing book as a prop to use in bookEdit
    content = <BookEdit book={book} onSubmit={handleSubmit} />
  }

  return (
    <div className='book-show'>
      <img src={`https://picsum.photos/seed/${book.id}/300/200
`} alt="" />
      <div>{content}</div>
      <div className='actions'>
        {/* edit button */}
        <button className='edit' onClick={handleEditClick}>
          Edit
        </button>
        {/* delete button */}
        <button className='delete' onClick={handleDeleteClick}></button>
      </div>
    </div>
  )
}

export default BookShow
