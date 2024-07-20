import {
    UPDATE_SEARCH_TERM
} from './actionTypes';


export const updateSearchTerm = (searchTerm) => ({
    type: UPDATE_SEARCH_TERM,
    payload: { searchTerm },
});
