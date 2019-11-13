import React from 'react';
import PropTypes from 'prop-types';

const ToDoItems = ({ children }) => {
  return (
    <div>
      {children.map(task => (
        <div key={task}>{task}</div>
      ))}
    </div>
  );
};

ToDoItems.propTypes = {
  children: PropTypes.array.isRequired,
};

export default ToDoItems;
