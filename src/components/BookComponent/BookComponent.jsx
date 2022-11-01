import React from 'react';
import PropTypes from 'prop-types';

//Style
import "./bookComponent.css";

//Models
import {Book} from "../../models/book.class.js";

const BookComponent = ({ book, books, setBooks, isEditing, setIsEditing}) => {

  const handleEditClick = () => {
    let click = book.id
    console.log(click)
  }

  return (
    <tr onClick={() => handleEditClick()}>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.editorial}</td>
    </tr>
  )
}

BookComponent.propTypes = {
  book: PropTypes.instanceOf(Book)
}

export default BookComponent;

