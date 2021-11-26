import { fetchMockTodoList } from './actions';

export const todoLists = async url => dispatch => {
  try {
    dispatch(fetchMockTodoList(url));
  } catch (error) {
    console.log(error);
  }
};
