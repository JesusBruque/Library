import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Book } from '../../models/book.class';

//Style
import "./bookFormChange.css";


const BookFormChange = ({editedBook, change}) => {

    return (
        <>
            <h3 className='m-3'>Modificar Libro</h3>
            <form className='m-3' onChange={change}>
                <div className="row mb-3">
                    <div className="col">
                        <div className="form-outline input-group">
                            <span className="input-group-text">Título</span>
                            <input defaultValue={editedBook.title} name='title' id='inputTitle' type='text' className='form-control' required autoFocus />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline input-group">
                            <span className="input-group-text">Autor</span>
                            <input defaultValue={editedBook.author} name='author' id='inputAuthor' type='text' className='form-control' required />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline input-group">
                            <span className="input-group-text">Editorial</span>
                            <input defaultValue={editedBook.editorial} name='editorial' id='inputEditorial' type='text' className='form-control' required />
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

BookFormChange.propTypes = {
    editedBook: PropTypes.object,
    setEditedBook: PropTypes.func,
    change: PropTypes.func,
    setIsEditing: PropTypes.func,
};


export default BookFormChange;
