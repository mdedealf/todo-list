import {
  ADD_TODOLIST,
  DELETE_TODOLIST,
  EDIT_TODOLIST,
  FETCH_MOCK_TODOLIST,
} from './types';

export const fetchMockTodoList = data => {
  return {
    type: FETCH_MOCK_TODOLIST,
    payload: data,
  };
};

export const addTodoList = data => {
  return {
    type: ADD_TODOLIST,
    payload: data,
  };
};

export const editTodoList = data => {
  return {
    type: EDIT_TODOLIST,
    payload: data,
  };
};

export const deleteTodoList = data => {
  return {
    type: DELETE_TODOLIST,
    payload: data,
  };
};
