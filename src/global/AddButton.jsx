import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

const AddPersonnelButton = styled.button`
  border-radius: 5px;
  font-size: medium;
  line-height: 25px;
  padding: 5px 20px;
  margin: 10px 10px;
  box-shadow: 0 0 4px;
  border-style: none;
  outline: none;
  background-color: var(--deco-pink);
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

export function AddButton(props) {
  return (
    <AddPersonnelButton onClick={props.onClick}>
      <AddIconSpan>
        <FontAwesomeIcon icon={['fas', 'plus']} />
      </AddIconSpan>
      {props.title}
    </AddPersonnelButton>
  );
}
