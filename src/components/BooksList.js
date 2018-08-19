import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
const BooksList = (props) => {
    return(
            <div className='book-list'>
                <ul>
                    {props.books.map( (book,index) => {
                        return <Link key={index} 
                                     style={{ textDecoration: 'none' }} 
                                     to={{   pathname: '/book',
                                             state: {book: book}
                                        }} >
                                    <li className='book-info-in-list'>
                                        <div className='book-info-in-list-image-container'>
                                            <img src={book.book_image} 
                                                className='book-info-in-list-image'
                                                alt={book.title} />
                                        </div>
                                    <div className='book-info-in-list-details'>
                                    <p>{book.title} <span> by {book.author}</span></p>
                                    </div>     
                                    </li>
                                </Link>
                    })}
                </ul>
            </div>
    );
}
export default BooksList;