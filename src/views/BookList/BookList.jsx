import React, { useState, useEffect } from 'react';
import BookComponent from '../../components/BookComponent/BookComponent';

//Style
import "./bookList.css";

//Models
import { Book } from "../../models/book.class.js";
import BookForm from '../../components/BookForm/BookForm';

const BookList = () => {

    const defaultBook1 = new Book(1, "La Casa de los espíritus", "Isabel Allende", "Bibliotex");
    const defaultBook2 = new Book(2, "Don Quijote de la Mancha", "Miguel de Cervantes", "Millenium")
    const defaultBook3 = new Book(3, "Los Miserables", "Victor Hugo", "Vertice")

    const [books, setBooks] = useState([defaultBook1, defaultBook2, defaultBook3]);

    useEffect(() => {
    }, [books]);

    return (
        <div className="card">

            <nav className="navbar card-header p-2">
                <div className='col-3 header'>Biblioteca</div>
                <form className="col-3 d-flex search mb-1" role="search">
                <span className="input-group-text" id="inputSearch">Search</span>
                    <input className="form-control" id="inputSearch" type="search" aria-label="Search" />
                </form>
            </nav>
            <div className='newButton'>
                <button type='button' className='btn btn-success'>New</button>
            </div>
            
            <div className="card-body">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Título</th>
                            <th scope="col">Autor</th>
                            <th scope="col">Editorial</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book, index) => {
                            return (
                                <BookComponent key={index} book={book} />
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <BookForm />
        </div>
    );
}

export default BookList;
