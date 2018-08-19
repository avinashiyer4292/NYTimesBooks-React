import React from 'react';

const Book = (props) => {

    const { book }  = props.location.state;
    let description = book.description === "" ? 'No description provided' : book.description;
    return(
        <div className='book'>
            <div className="book-image-container">
                <img src={book.book_image} 
                     className='book-image'
                     alt={book.title} />
            </div>
            <div className='book-details'>
                <h2>{book.title}</h2>
                <p>{book.contributor}</p>
                <p><span>Publisher</span> : {book.publisher}</p>
                <p><span style={{'fontStyle':'italic', 'fontWeight':'bold'}}>{description}</span></p>
            </div>
            <div className='book-seller-details'>
                <h3 style={{'textAlign':'center'}}>Sellers</h3> 
                <hr />
                <div className='book-seller-details-links'>
                <ul>
                    {
                        book.buy_links.map( link => {
                           return  <li key={link.url} className='seller-link'>
                                <div style={{'width':'90%'}}>{link.name}</div>
                                <div style={{'flex':'1', 'marginLeft':'2%'}}>
                                    <button className='buy-btn' onClick={ () => window.location.href=`${link.url}`}>Buy</button>
                                </div>
                            </li>
                        })
                    }
                </ul>
                </div>
               
            </div>
        </div>
    );
}

export default Book;