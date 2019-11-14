import React, { useState } from 'react';

import PropTypes from 'prop-types';

import styled from 'styled-components';

const StyledLabel = styled.label`
  display: block;
  position: relative;
  padding-left: 32px;
  margin-bottom: 16px;
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
  height: 24px;
  width: 24px;
  background-color: ${props => (props.isChecked ? '#2196F3' : '#eee')};
  :after {
    content: '';
    position: absolute;
    display: ${props => (props.isChecked ? 'block' : 'none')};
    left: 8px;
    top: 4px;
    width: 4px;
    height: 8px;
    border: solid white;
    border-width: 0 4px 4px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  :hover {
    background-color: ${props => !props.isChecked && '#ccc'};
  }
`;

const ToDoItem = ({ children, onDropEventHandler }) => {
  const [isChecked, setIsChecked] = useState(false);
  const allowDrop = event => {
    event.preventDefault();
    console.log('over');
  };

  return (
    <StyledLabel
      draggable={true}
      onDrop={onDropEventHandler}
      onDragOver={allowDrop}
    >
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
  onDropEventHandler: PropTypes.func.isRequired,
};

export default ToDoItem;
