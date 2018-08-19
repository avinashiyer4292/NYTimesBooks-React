import * as actions from './actions';
const initialState = {
    booksList: null,
    loading: false,
    error: null,
    category: null
};

const reducer = (state=initialState, action) => {
    switch(action.type){
        case actions.FETCH_BOOKS_BEGIN: return {
            ...state,
            loading: true,
            error:null
        };

        case actions.FETCH_BOOKS_SUCCESS: return{
            ...state,
            booksList: action.payload.books,
            loading: false,
            category: action.payload.books.lists[0]
        };

        case actions.FETCH_BOOKS_FAILURE: return{
            ...state,
            booksList: null,
            loading:false,
            error: action.payload.error
        };

        case actions.SET_CURRENT_BOOK_CATEGORY: return{
            ...state,
            category: state.booksList.lists[action.payload.categoryIndex]
        };

        default: return state;
    }

}

export default reducer;