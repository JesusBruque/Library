import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Book } from '../../models/book.class';


const BookForm = ({ add }) => {

    const idRef = useRef('');
    const titleRef = useRef('');
    const authorRef = useRef('');
    const editorialRef = useRef('');

    const addBook = (e) => {
        e.preventDefault()
        const newBook = new Book(
            idRef.current.value,
            titleRef.current.value,
            authorRef.current.value,
            editorialRef.current.value,
        )
        add(newBook);
    }

    return (
        <>
            <h3 className='m-3'>Nuevo Libro</h3>
            <form onSubmit={addBook} className='m-3 container form-inline'>
                    <div className="col-xs-12 col-md-3 input-group mb-3">
                        <span className="input-group-text" id="inputTitle">Título</span>
                        <input ref={titleRef} id='inputTitle' type='text' className='form-control' required autoFocus />
                    </div>
                    <div className="col-xs-12 col-md-3 input-group mb-3">
                        <span className="input-group-text" id="inputAuthor">Autor</span>
                        <input ref={authorRef} id='inputAuthor' type='text' className='form-control' required autoFocus />
                    </div>
                    <div className="col-xs-12 col-md-3 input-group mb-3">
                        <span className="input-group-text" id="inputEditorial">Editorial</span>
                        <input ref={editorialRef} id='inputEditorial' type='text' className='form-control' required autoFocus />
                    </div>
            </form>
        </>
    );
};


BookForm.propTypes = {
    add: PropTypes.func.isRequired
};


export default BookForm;
