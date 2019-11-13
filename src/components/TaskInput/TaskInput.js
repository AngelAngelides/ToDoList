import React from 'react';

import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledTaskInput = styled.input`
  margin: 8px;
  padding: 8px;
`;

const TaskInput = ({ changeInput, value }) => (
  <StyledTaskInput
    id="task"
    name="task"
    onChange={changeInput}
    type="text"
    value={value}
  />
);

TaskInput.propTypes = {
  changeInput: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default TaskInput;
