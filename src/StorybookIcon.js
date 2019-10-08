import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: red;
  color: white;
  height: 48px;
`;

function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

export default Button;
