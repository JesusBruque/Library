import React, { useState } from 'react';
import PropTypes from 'prop-types';

//Style
import "./bookComponent.css";

const BookComponent = ({ book, isEditing, setIsEditing, setEditedBook }) => {

	const handleEditClick = async (e) => {
		setIsEditing(!isEditing)
		const editBook = book
		await setEditedBook(editBook)
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
	book: PropTypes.object,
	isEditing: PropTypes.bool,
	setIsEditing: PropTypes.func,
	setEditedBook: PropTypes.func,
}

export default BookComponent;

