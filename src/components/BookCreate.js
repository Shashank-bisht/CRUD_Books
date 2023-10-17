import React from 'react'
import { useState } from 'react'
// receiving onCreate prop
const BookCreate = ({onCreate}) => {
  const [title, setTitle] = useState('')


  // this is called when user will change the title
const handleChange = (event) => {
  // for setting title what user has typed
setTitle(event.target.value);
};

const handleSubmit = (event) => {
  // to prevent form default behaviour
  event.preventDefault();

  // putting title in onCreate which we have got from handleChange function
  onCreate(title);
  // when the user press enter or submit then clear the input field using setTitles
  setTitle('')
};

  return (
    // form for creating books
    <div className='book-create'>
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Title</label>
        <input type="text" className='input' value={title} onChange={handleChange}/>
        <button className='button'>Create</button>
      </form>
    </div>
  )
}

export default BookCreate
