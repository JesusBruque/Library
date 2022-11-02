import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Book } from '../../models/book.class';

//Style
import "./bookFormChange.css";


const BookFormChange = () => {

    const handleFormChange = (book) => {
       
    }

    return (
        <>
            <h3 className='m-3'>Modificar Libro</h3>
            <form onChange={handleFormChange} className='m-3'>
                <div className="row mb-3">
                    <div className="col">
                        <div className="form-outline input-group">
                            <span className="input-group-text">Título</span>
                            <input id='inputTitle' type='text' className='form-control' required autoFocus />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline input-group">
                            <span className="input-group-text">Autor</span>
                            <input id='inputAuthor' type='text' className='form-control' required />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline input-group">
                            <span className="input-group-text">Editorial</span>
                            <input id='inputEditorial' type='text' className='form-control' required />
                        </div>
                    </div>
                    <div className="col">
                        <button type="submit" className="btn btn-success button mb-3">Guardar</button>
                    </div>
                </div>
            </form>
        </>
    );
};


BookFormChange.propTypes = {

};


export default BookFormChange;
