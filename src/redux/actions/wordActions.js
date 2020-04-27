import {GET_SELECTED_WORD_ID, SET_SELECTED_WORD_ID} from './types';

export const setSelectedWord = id => dispatch => {
    console.log('set selected word', id);
    dispatch({
        type: SET_SELECTED_WORD_ID,
        payload: id,
    });
};
