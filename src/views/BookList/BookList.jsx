import React, { useState, useEffect } from 'react';
import BookComponent from '../../components/BookComponent/BookComponent';

//Style
import "./bookList.css";

//Models
import { Books } from "../../models/db.js"

//Components
import BookFormAdd from '../../components/BookFormAdd/BookFormAdd.jsx';

const BookList = () => {

    const [books, setBooks] = useState(Books);
    const [copyBooks, setcopyBooks] = useState([]);
    const [button, setButton] = useState(false);
   
    console.log(books)

    const buttonChange = () => {
        setButton(!button);
    }

    const addNewBook = (book) => {
        const tempBook = [...books];
        tempBook.push(book);
        setBooks(tempBook);
    }

    const searchBook = (e) => {
        let inputHandler = e.target.value.toLowerCase()
        setcopyBooks(books)
    }

    console.log(copyBooks)

    useEffect(() => {
    }, [books]);

    return (
        <div className="card">
            <nav className="navbar card-header p-2">
                <div className='col-3 header'>Biblioteca</div>
                <form className="col-3 d-flex search mb-1" role="search">
                    <span className="input-group-text" id="inputSearch">Search</span>
                    <input onChange={searchBook} className="form-control" id="inputSearch" type="search" aria-label="Search" />
                </form>
            </nav>
            <div className='newButton'>
                <button type='button' onClick={buttonChange} className='btn btn-success'>New</button>
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
            {button === true ? <BookFormAdd add={addNewBook}/> : null }
            
        </div>
    );
}

export default BookList;
