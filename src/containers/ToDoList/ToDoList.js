import React from 'react';

import NewToDoItem from '../../components/NewToDoItem';
import ToDoItems from '../../components/ToDoItems';
import ResetListButton from '../../components/ResetListButton';

import styled from 'styled-components';

const StyledToDoList = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

class ToDoList extends React.PureComponent {
  state = {
    tasks: [],
    currentTask: '',
  };

  render() {
    const changeInput = event => {
      this.setState({ currentTask: event.target.value });
    };

    const addItemHandler = event => {
      event.preventDefault();
      const { tasks, currentTask } = this.state;
      const newTasks = [...tasks, currentTask];
      this.setState({ tasks: newTasks, currentTask: '' });
    };

    const resetListHandler = () => {
      this.setState({ tasks: [] });
    };

    const { tasks, currentTask } = this.state;
    return (
      <StyledToDoList>
        <ToDoItems>{tasks}</ToDoItems>
        <NewToDoItem
          submitHandler={addItemHandler}
          changeInput={changeInput}
          value={currentTask}
        />
        <ResetListButton resetListHandler={resetListHandler} />
      </StyledToDoList>
    );
  }
}

export default ToDoList;
