import React from 'react';
import '../App.css';
const BookCategoryInfo = (props) => {
    //console.log(`Book category info: ${JSON.stringify(props)}`)
    return(
        <div className='book-category-info'>
            <div className='book-category-info-image-container'>
                <img src={props.info.list_image} 
                     className='book-category-info-image'
                     alt={props.info.display_name} />
            </div>
            <div className='book-category-info-details'>
                <p><span>CategoryId</span> : {props.info.list_id}</p>
                <p><span>Name</span> : {props.info.display_name}</p>
                <p><span>Updated</span> : {props.info.updated}</p>
            </div>
        </div>
    );
}

export default BookCategoryInfo;