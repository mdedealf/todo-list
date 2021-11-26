import React from 'react';
import Wrapper from './components/Wrapper/Wrapper';
import 'antd/dist/antd.css';

import TodoList from './Container/TodoList';

const App = () => {
  return (
    <Wrapper>
      <TodoList />
    </Wrapper>
  );
};

export default App;
