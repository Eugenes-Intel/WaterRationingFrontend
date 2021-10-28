import React from 'react';
import styled from 'styled-components';

const InputDropdown = styled.select`
  padding: 10px 25px;
  margin: 20px auto;
  color: var(--font-color-light);
  display: block;
  border-style: none;
  border-radius: var(--border-radius);
  background-color: var(--background-color);
  transition-duration: 0.8s;
  min-width: 65%;
`;

const PlaceholderOption = styled.option`
  color: var(--secondary-dark);
  opacity: 0.7;
  /* font-style: italic; */
`;

const Option = styled.option`
  font-size: 20px;
`;

export function GlobalDropdown(props) {
  return (
    <React.Fragment>
      <InputDropdown onChange={props.onChange}>
        <PlaceholderOption value='' disabled selected hidden>
          Select {props.placeholder}
        </PlaceholderOption>
        {props.entities.map((entity) => (
          <Option value={entity.id}>{entity.name}</Option>
        ))}
      </InputDropdown>
    </React.Fragment>
  );
}
