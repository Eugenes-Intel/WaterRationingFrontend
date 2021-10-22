import React, { useState, useEffect } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import styled from 'styled-components';
import { AddButton } from '../../global/AddButton';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const TopSection = styled.div`
  height: 15%;
  display: flex;
  justify-content: space-between;
  /* width: 100%; */
  /* background-color: blanchedalmond; */
`;

const Title = styled.h1`
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
  width: 70%;
  height: 100%;
  align-items: flex-end;
  justify-content: center;
`;

const MainChart = styled.div`
  /* box-shadow: 0 0 1px; */
  height: 90%;
  width: 70%;
  background-color: var(--background-color);
  border-radius: var(--main-border-radius);
  /* margin: auto; */
  padding: 15px;
`;

const BarChart = styled.div`
  height: 100%;
  width: 100%;
`;

const SmallChartContainer = styled.div`
  display: flex;
  width: 30%;
  height: 100%;
  align-items: flex-end;
  justify-content: flex-start;
`;

const SmallChart = styled.div`
  height: 60%;
  width: 70%;
  background-color: var(--background-color);
  border-radius: 20px;
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

export function LandingPage(props) {
  return (
    <Container>
      <TopSection>
        <Title>water rationig overview</Title>
        <AddButton title='Allocate' />
      </TopSection>
      <MidSection>
        <MainChartContainer>
          <MainChart>
            <BarChart>
              <Bar
                data={{
                  labels: ['a', 'b', 'c', 'd', 'e'],
                  datasets: [
                    {
                      label: 'My First Dataset',
                      data: [65, 59, 80, 81, 56],
                      backgroundColor: [
                        'rgba(255, 99, 132, 0.4)',
                        'rgba(255, 159, 64, 0.4)',
                        'rgba(75, 192, 192, 0.4)',
                        'rgba(54, 162, 235, 0.4)',
                        'rgba(153, 102, 255, 0.4)',
                      ],
                      pointStyle: 'circle',
                    },
                  ],
                }}
                options={{ maintainAspectRatio: false }}
              />
            </BarChart>
          </MainChart>
        </MainChartContainer>
        <SmallChartContainer>
          <SmallChart />
        </SmallChartContainer>
      </MidSection>
      <BottomSection>
        <Metrice>Popullation:</Metrice>
        <Metrice>Allocation:</Metrice>
        <Metrice>Daily average:</Metrice>
        <Metrice>Cities:</Metrice>
      </BottomSection>
    </Container>
  );
}
