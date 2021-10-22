import React from 'react';
import styled from 'styled-components';
import { TableContainer } from '../containers/TableContainer';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ButtonsContainer = styled.div``;

const ResourceButton = styled.button`
  border-radius: var(--border-radius);
  background-color: var(--font-color);
  padding: 5px 12px;
  margin: 10px 0px 0px;
  outline: none;
  border-style: none;
  line-height: 22px;
  min-width: 80px;

  &:hover {
    cursor: pointer;
    background-color: var(--font-color);
  }
`;

export function ResourcesPage(props) {
  return (
    <Container>
      <ButtonsContainer>
        <ResourceButton>Cities</ResourceButton>
        <ResourceButton>Suburbs</ResourceButton>
        <ResourceButton>Usages</ResourceButton>
      </ButtonsContainer>
      <TableContainer />
    </Container>
  );
}
