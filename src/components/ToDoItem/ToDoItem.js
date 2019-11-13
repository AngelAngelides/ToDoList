import React, { useState } from 'react';

import PropTypes from 'prop-types';

import styled from 'styled-components';

const StyledLabel = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const StyledCheckMark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: ${props => (props.isChecked ? '#2196F3' : '#eee')};
  :after {
    content: '';
    position: absolute;
    display: ${props => (props.isChecked ? 'block' : 'none')};
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  :hover {
    background-color: ${props => !props.isChecked && '#ccc'};
  }
`;

const ToDoItem = ({ children }) => {
  const [isChecked, setIsChecked] = useState(false);

  console.log(isChecked);

  return (
    <StyledLabel>
      {children}
      <StyledCheckMark
        isChecked={isChecked}
        onClick={() => setIsChecked(isChecked ? false : true)}
      />
    </StyledLabel>
  );
};

ToDoItem.propTypes = {
  children: PropTypes.string.isRequired,
};

export default ToDoItem;
