import React, { Fragment, useEffect, useState } from 'react';
import Card from '../components/Card/Card';
import { Button, Input, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMockTodoLists } from '../redux/fetcher';
import { MOCK_DATA_URL } from '../constant';

import styles from './TodoList.module.css';

const TodoList = () => {
  const [todo, setTodo] = useState({
    id: 0,
    title: '',
    description: '',
    status: 0,
    createdAt: '',
  });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [notFinishedTodo, setNotFinishedTodo] = useState([]);
  const [finishedTodo, setFinishedTodo] = useState([]);
  const todoListsMockData = useSelector(state => state.todoList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMockTodoLists(MOCK_DATA_URL));

    setFinishedTodo(todoListsMockData.todos.filter(data => data.status === 1));
    setNotFinishedTodo(
      todoListsMockData.todos.filter(data => data.status === 0)
    );
  }, [dispatch, todoListsMockData.todos]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onClickTodoListener = () => {
    showModal();
  };

  const handleFieldChange = e => {
    setTodo(prevState => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleCreateTodo = e => {
    e.preventDefault();
    const { id, title, description, status, createdAt } = todo;
  };

  const ModalDetail = () => {
    // const { id, title, description, status, createdAt } = props;

    return (
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Button type="primary">Update</Button>
        <Button>Delete</Button>
      </Modal>
    );
  };

  return (
    <Fragment>
      <div className={styles.wrapper}>
        <ModalDetail />
        <h1>Todo List</h1>
        <form onSubmit={handleCreateTodo}>
          <Input
            placeholder="Title"
            name="text"
            value={todo.title}
            onChange={handleFieldChange}
          />
          <Input
            placeholder="Description."
            name="text"
            value={todo.description}
            onChange={handleFieldChange}
          />
          <Button type="primary" onClick={handleCreateTodo}>
            Create Todo
          </Button>
        </form>
        <div className={styles.list}>
          <h2>Selesai</h2>
          {finishedTodo.map(data => (
            <Card
              key={data.id}
              title={data.title}
              description={data.description}
              status={data.status}
              createdAt={data.createdAt}
              onListClick={onClickTodoListener}
            />
          ))}
        </div>
        <div className={styles.list}>
          <h2>Belum Selesai</h2>
          {notFinishedTodo.map(data => (
            <Card
              key={data.id}
              title={data.title}
              description={data.description}
              status={data.status}
              createdAt={data.createdAt}
              onListClick={onClickTodoListener}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default TodoList;
