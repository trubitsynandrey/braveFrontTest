import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font: inherit;
  background: #7ab1ff;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 0.5rem;

  &:hover,
  &:active {
    background: #51eaff;
  }
`;

const Buttonshow = (props) => {
  return (
    <>
      <StyledButton
        type={props.type || "button"}
        onClick={props.onClick}
      >
        {props.children}
      </StyledButton>
    </>
  );
};

export default Buttonshow;
