import React from "react";

import styled from "styled-components";

const StyledAddButton = styled.button`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  margin: 8px;
  padding: 8px;
  text-transform: uppercase;
`;

const AddButton = () => (
  <StyledAddButton type="submit">Add to List</StyledAddButton>
);
export default AddButton;
