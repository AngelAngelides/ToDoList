import React from 'react';

import styled from 'styled-components';
import PropTypes from 'prop-types';

import AddButton from '../AddButton';
import TaskInput from '../TaskInput';

const StyledNewToDoItem = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const NewToDoItem = ({ changeInput, submitHandler, value }) => (
  <StyledNewToDoItem onSubmit={submitHandler}>
    <TaskInput changeInput={changeInput} value={value} />
    <AddButton />
  </StyledNewToDoItem>
);

NewToDoItem.propTypes = {
  changeInput: PropTypes.func.isRequired,
  submitHandler: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default NewToDoItem;
