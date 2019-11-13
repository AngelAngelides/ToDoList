import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledResetListButton = styled.button`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  margin: 8px;
  padding: 8px;
  text-transform: uppercase;
`;

const ResetListButton = ({ resetListHandler }) => (
  <StyledResetListButton type="button" onClick={resetListHandler}>
    Reset List
  </StyledResetListButton>
);

ResetListButton.propTypes = {
  resetListHandler: PropTypes.array.isRequired,
};

export default ResetListButton;
