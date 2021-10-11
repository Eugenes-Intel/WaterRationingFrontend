import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { AddButton } from "./AddButton";

const CrudOperationsButton = styled.button`
  background-color: ${(props) => (props.bgColor ? props.bgColor : "var(--deco-pink)")};
  border-radius: 5px;
  font-size: medium;
  font-weight: lighter;
  line-height: 25px;
  padding: 5px 0px;
  margin: 10px 10px;
  box-shadow: 0 0 4px;
  border-style: none;
  outline: none;
  width: 100px;
  transition-duration: 0.8s;

  &:hover {
    cursor: pointer;
    /* transform: scaleZ(0.3); */
  }
`;

const AddIconSpan = styled.span`
  font-size: small;
  padding-left: -2px;
  padding-right: 5px;
`;

export function CrudButton(props) {
  return (
    <CrudOperationsButton bgColor={props.bgColor} onClick={props.onClick}>
      <AddIconSpan>
        <FontAwesomeIcon icon={[props.iconBrand, props.iconName]} />
      </AddIconSpan>
      {props.title}
    </CrudOperationsButton>
  );
}
