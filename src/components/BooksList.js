import React,  {Component} from 'react';
import { connect } from 'react-redux';
class BooksList extends Component{

    render(){
        return(
            <p>Books</p>
        );
    }
}
const mapStateToProps = state => {
    return {
        list: state.booksList
    }
}

export default connect(mapStateToProps)(BooksList);