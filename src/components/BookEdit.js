import React from 'react'
import { useState } from 'react'

// i have used book here so that i can show the default name of the book title
const BookEdit = ({book, onSubmit}) => {
  // to handle input when user edit the book
  const [title, setTitle] = useState(book.title)
// it will handle when user input the title value
  const handleChange= (event)=>{
   
    setTitle(event.target.value)
  }

  // when the user enter or enter submit button
  const handleSubmit= (event)=>{
  event.preventDefault();
  // to close showedit this is coming from bookshow
  onSubmit(book.id, title);
  }
  return (
    <form onSubmit={handleSubmit} className='book-edit'>
      <label >Title</label>
      <input className='input' value={title} onChange={handleChange} />
      <button className='button is-primary'>Save</button>
    </form>
  )
}

export default BookEdit
