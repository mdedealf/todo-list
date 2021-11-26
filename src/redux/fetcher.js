import axios from 'axios';
import { fetchMockTodoList } from './actions';

export const fetchMockTodoLists = url => dispatch => {
  try {
    axios.get(url).then(response => {
      console.log(response.data);
      dispatch(fetchMockTodoList(response.data));
      console.log('success');
    });
  } catch (error) {
    console.log(error);
  }
};
