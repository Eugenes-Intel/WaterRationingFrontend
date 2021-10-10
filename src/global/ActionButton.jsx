import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const ButtonAction = styled.button`
  border-radius: 50%;
  /* padding-left: 10px;
  padding-right: 10px; */
  height: 28px;
  width: 28px;
  margin: auto 5px;
  font-size: medium;
  box-shadow: 0 0 1px;
  border-style: none;
  outline: none;
  color: ${(props) => (props.color ? props.color : "#008000")};
  background-color: var(--black);

  &:hover {
    cursor: pointer;
  }
`;

const IconSpan = styled.span`
  font-size: 10px;
  /* color: var(--primary); */
`;

export function ActionButton(props) {
  return (
    <ButtonAction color={props.actionButton.color}>
      <IconSpan>
        <FontAwesomeIcon
          icon={[props.actionButton.iconElement.Brand, props.actionButton.iconElement.iconName]}
        />
      </IconSpan>
      {props.Title}
    </ButtonAction>
  );
}
