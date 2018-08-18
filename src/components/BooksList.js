import React,  {Component} from 'react';
import { connect } from 'react-redux';
import * as constants from '../constants/constants';
import  * as actions from '../store/actions';
import fetchJsonp from 'fetch-jsonp';
import '../App.css';


class BooksList extends Component{

    componentDidMount(){
        console.log(`Fetching books...`);
        this.props.fetchBooksBegin;
        fetchJsonp(`${constants.BOOKS_API_URL}`, {
            jsonpCallbackFunction: `${constants.CALLBACK_FUNCTION}`
          })
          .then(response =>  response.json())
          .then(json =>  {
            console.log('parsed json', json['results']);
            this.props.fetchBooksSuccess(json['results']);
            return json.results
          }).catch(err =>  {
            console.log('parsing failed', err);
            this.props.fetchBooksFailure(err);
          })
    }

    displayItems = (list) => {
       
    }

    render(){
        const { list , isLoading } = this.props;
        console.log(`Books list: ${JSON.stringify(list)}, ${isLoading}`);
        
        //let spinner = isLoading === true ? <p>Loading...</p>: null;
        
        if(list===null)
            return ( <p>Loading...</p> );
        
            return(
               
                <div className='container'>
                    <div className='side-nav-bar'>
                        <ul>
                            {
                                list['lists'].map( (list, index) => {
                                            return <li key={index}>{list.list_name}</li>
                                            })
                            }
                        </ul>
                </div>
                <div className='main-bar'>
                        
                </div>
            </div>
            );
    
         
    }
}
const mapStateToProps = state => {
    return {
        list: state.booksList,
        isLoading: state.loading,
        isError: state.error
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

    };
}

  

  
  
//   function handleErrors(response) {
//     if (!response.ok) {
//       throw Error(response.statusText);
//     }
//     return response;
//   }

export default connect(mapStateToProps, mapDispatchActionToProps)(BooksList);