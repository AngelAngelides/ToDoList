import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import ToDoItem from '../ToDoItem';

const StyledToDoItems = styled.form`
  padding: 8px;
  margin: 8px;
`;

const ToDoItems = ({ children }) => {
  return (
    <StyledToDoItems>
      {children.map(task => (
        <ToDoItem key={task}>{task}</ToDoItem>
      ))}
    </StyledToDoItems>
  );
};

ToDoItems.propTypes = {
  children: PropTypes.array.isRequired,
};

export default ToDoItems;
