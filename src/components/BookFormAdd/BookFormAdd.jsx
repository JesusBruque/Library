import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Book } from '../../models/book.class';

//Style
import "./bookFormAdd.css";

const BookFormAdd = ({ add, isAdd, setIsAdd }) => {

    const idRef = useRef('');
    const titleRef = useRef('');
    const authorRef = useRef('');
    const editorialRef = useRef('');

    const addBook = async (e) => {
        e.preventDefault()
        const newBook = new Book(
            idRef.current.value,
            titleRef.current.value,
            authorRef.current.value,
            editorialRef.current.value,
        )
        add(newBook);
        await setIsAdd(!isAdd);
    }

    return (
        <div>
           <h3 className='m-3'>Nuevo Libro</h3>
            <form onSubmit={addBook} className='m-3'>
                <div className="row mb-3">
                    <div className="col">
                        <div className="form-outline input-group">
                            <span className="input-group-text">Título</span>
                            <input ref={titleRef} id='inputTitle' type='text' className='form-control' required autoFocus />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline input-group">
                            <span className="input-group-text">Autor</span>
                            <input ref={authorRef} id='inputAuthor' type='text' className='form-control' required />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline input-group">
                            <span className="input-group-text">Editorial</span>
                            <input ref={editorialRef} id='inputEditorial' type='text' className='form-control' required />
                        </div>
                    </div>
                    <div className="col">
                        <button type="submit"  className="btn btn-success button mb-3">Guardar</button>
                    </div> 
                </div>
            </form>
        </div>
    );
};


BookFormAdd.propTypes = {
    add: PropTypes.func,
    isAdd: PropTypes.bool,
    setIsAdd: PropTypes.func
};


export default BookFormAdd;
