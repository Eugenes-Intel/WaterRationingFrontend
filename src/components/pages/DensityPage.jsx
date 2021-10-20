import React from 'react';
import styled from 'styled-components';
import { DensityCard } from '../../global/DensityCard';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const TopSection = styled.div`
  height: 10%;
  display: flex;
  justify-content: space-between;
  /* width: 100%; */
  /* background-color: blanchedalmond; */
`;

const Title = styled.h2`
  color: var(--font-color);
  text-transform: capitalize;
`;

const MidSection = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const MainChartContainer = styled.div`
  display: flex;
  width: 60%;
  height: 100%;
  align-items: flex-end;
  justify-content: center;
`;

const MainChart = styled.div`
  /* box-shadow: 0 0 1px; */
  height: 90%;
  width: 80%;
  background-color: var(--background-color);
  border-radius: var(--main-border-radius);
  /* margin: auto; */
`;

const PieChartsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 40%;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 40px 0px;
`;

const PieChart = styled.div`
  height: 150px;
  width: 150px;
  margin: 0px 15px;
  background-color: var(--background-color);
  border-radius: 100%;
  /* margin: auto; */
`;

const BottomSection = styled.div`
  height: 30%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Metrice = styled.h4`
  color: var(--font-color-light);
`;

const densities = ['Low', 'Medium', 'High'];

export function DensityPage(props) {
  return (
    <Container>
      <TopSection>
        <Title>harare densities</Title>
      </TopSection>
      <MidSection>
        <MainChartContainer>
          <MainChart />
        </MainChartContainer>
        <PieChartsContainer>
          {densities.map((density, index) => (
            <PieChart key={index} />
          ))}
        </PieChartsContainer>
      </MidSection>
      <BottomSection>
        {densities.map((density, index) => (
          <DensityCard key={index} densityTitle={density} />
        ))}
      </BottomSection>
    </Container>
  );
}
