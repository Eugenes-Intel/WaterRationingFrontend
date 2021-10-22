import React from 'react';
import styled from 'styled-components';

const InputDropdown = styled.input`
  padding: 10px 25px;
  margin: 20px auto;
  color: var(--font-color-light);
  display: block;
  border-style: none;
  border-radius: var(--border-radius);
  background-color: var(--background-color);
  transition-duration: 0.8s;

  &::placeholder {
    color: var(--secondary-dark);
    opacity: 0.7;
  }
`;

export function GlobalDropdown(props) {
  return (
    <React.Fragment>
      <InputDropdown />
    </React.Fragment>
  );
}
