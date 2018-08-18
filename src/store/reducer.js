import * as actions from './actions';
const initialState = {
    booksList: null,
    loading: false,
    error: null
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
        };

        case actions.FETCH_BOOKS_FAILURE: return{
            ...state,
            booksList: null,
            loading:false,
            error: action.payload.error
        };

        default: return state;
    }

}

export default reducer;