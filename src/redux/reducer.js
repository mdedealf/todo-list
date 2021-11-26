import {
  ADD_TODOLIST,
  DELETE_TODOLIST,
  EDIT_TODOLIST,
  FETCH_MOCK_TODOLIST,
} from './types';

const initialState = {
  todo: [],
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOCK_TODOLIST:
      return {
        ...state,
        todo: action.payload,
      };
    case ADD_TODOLIST:
      return {
        ...state,
        todo: action.payload,
      };
    case EDIT_TODOLIST:
      return {
        ...state,
        todo: action.payload,
      };
    case DELETE_TODOLIST:
      return {
        ...state,
        todo: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
