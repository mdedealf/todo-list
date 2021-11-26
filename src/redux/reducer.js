import {
  ADD_TODOLIST,
  DELETE_TODOLIST,
  EDIT_TODOLIST,
  FETCH_MOCK_TODOLIST,
} from './types';

const initialState = {
  todos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOCK_TODOLIST:
      return {
        ...state,
        todos: action.payload,
      };
    case ADD_TODOLIST:
      return {
        ...state,
        todos: action.payload,
      };
    case EDIT_TODOLIST:
      return {
        ...state,
        todos: action.payload,
      };
    case DELETE_TODOLIST:
      return {
        ...state,
        todos: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
