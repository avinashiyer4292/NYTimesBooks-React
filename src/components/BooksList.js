import React from 'react';
import '../App.css';
const BooksList = (props) => {

    console.log(`Books: ${JSON.stringify(props.books)}`)
    return(
            <div className='book-list'>
                <ul>
                    {props.books.map( (book,index) => {
                        return <li key={index} 
                            className='book-info-in-list'>
                                <div className='book-info-in-list-image-container'>
                                    <img src={book.book_image} 
                                        className='book-category-info-image'
                                        alt={book.title} />
                                </div>
                                <div className='book-info-in-list-details'>
                                <p><span>Title</span> : {book.title} <span> by {book.author}</span></p>
                                <p><a href={book.amazon_product_url}>Buy from Amazon</a></p>
                                </div>
                            
                        </li>
                    })}
                </ul>
            </div>
    );
}
export default BooksList;