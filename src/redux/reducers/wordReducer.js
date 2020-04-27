import {GET_SELECTED_WORD_ID, SET_SELECTED_WORD_ID} from '../actions/types';
const initialState = {
    selectedWordID: '',
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_SELECTED_WORD_ID:
            return {
                ...state,
                selectedWordID: action.payload,
            };
        default:
            return state;
    }
}
