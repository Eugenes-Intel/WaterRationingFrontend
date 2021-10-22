import React from 'react';
import styled from 'styled-components';

const Container = styled.div`border-radius`;

const DensityTitleContainer = styled.div`
  width: 10%;
`;

const DensityTitle = styled.h3`
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
      <MetriceContainer>
        <Metrice>Popullation:</Metrice>
        <Metrice>Allocation:</Metrice>
        <Metrice>Daily average:</Metrice>
      </MetriceContainer>
    </Container>
  );
}
