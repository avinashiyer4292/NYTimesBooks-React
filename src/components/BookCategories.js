import React,  {Component} from 'react';
import { connect } from 'react-redux';
import * as constants from '../constants/constants';
import * as actions from '../store/actions';
import BookCategoryInfo from './BookCategoryInfo';
import BooksList from './BooksList';
import fetchJsonp from 'fetch-jsonp';
import '../App.css';


class BooksCategories extends Component{

    componentDidMount(){
        this.props.fetchBooksBegin;
        fetchJsonp(`${constants.BOOKS_API_URL}`, {
            jsonpCallbackFunction: `${constants.CALLBACK_FUNCTION}`
          })
          .then(handleErrors)
          .then(response =>  response.json())
          .then(json =>  {
            this.props.fetchBooksSuccess(json['results']);
            return json.results
          }).catch(err =>  {
            console.log('parsing failed', err);
            this.props.fetchBooksFailure(err.message);
          })
    }

    render(){
        const { list , isLoading , category, isError } = this.props;
        
        if(isError!==null)
            return( <p style={{'textAlign':'center'}}>Error fetching books: {isError}</p>)
        if(list===null)
            return ( <p style={{'textAlign':'center'}}>Loading...</p> );
        
            return(   
                <div className='container'>
                    <div className='side-nav-bar'>
                        <span className='categories'>Categories</span>
                        <hr />
                        <ul>
                            {
                               list['lists'].map( (list, index) => {
                                    return <li key={index} 
                                                onClick={()=>this.props.setCurrentBookCategory(index)}
                                                className='book-list-item'>{list.list_name}</li>
                                })
                            }
                        </ul>
                </div>
                <div className='main-bar'>
                    <BookCategoryInfo info={category} />
                    <span className='categories'>Books</span>
                    <BooksList books={category.books}/>
                </div>
            </div>
            );
    
         
    }
}
const mapStateToProps = state => {
    return {
        list: state.booksList,
        isLoading: state.loading,
        isError: state.error,
        category: state.category
    };
}
const mapDispatchActionToProps = dispatch => {
    return {
        fetchBooksBegin: () => dispatch({type: actions.FETCH_BOOKS_BEGIN}),
        fetchBooksSuccess : books => dispatch({
            type: actions.FETCH_BOOKS_SUCCESS,
            payload: { books }
          }),
          
        fetchBooksFailure : error => dispatch({
            type: actions.FETCH_BOOKS_FAILURE,
            payload: { error }
          }),
        
          setCurrentBookCategory: categoryIndex => dispatch({
              type: actions.SET_CURRENT_BOOK_CATEGORY,
              payload: { categoryIndex }
          }) 

    };
}

  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

export default connect(mapStateToProps, mapDispatchActionToProps)(BooksCategories);