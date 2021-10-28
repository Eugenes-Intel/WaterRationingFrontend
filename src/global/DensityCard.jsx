import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border-radius: var(--border-radius);
  display: flex;
  box-shadow: 0px 1px 5px var(--black);
  padding: 5px 20px;
  background-color: var(--background-color);
`;

const DensityTitleContainer = styled.div`
  width: 10%;
  margin-right: 10px;
  display: flex;
`;

const DensityTitle = styled.h5`
  color: var(--font-color);
  writing-mode: vertical-lr;
  text-orientation: upright;
  margin: auto;
`;

const SeperatorLine = styled.hr`
  width: 80%;
  color: var(--font-color);
`;

const MetriceContainer = styled.div`
  width: 90%;
`;

const Metrice = styled.h4`
  color: var(--font-color-light);
`;

export function DensityCard(props) {
  return (
    <Container>
      <DensityTitleContainer>
        <DensityTitle>{props.densityTitle}</DensityTitle>
      </DensityTitleContainer>
      <SeperatorLine />
      <MetriceContainer>
        <Metrice>Popullation:</Metrice>
        <Metrice>Allocation:</Metrice>
        <Metrice>Daily average:</Metrice>
      </MetriceContainer>
    </Container>
  );
}
