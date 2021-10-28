import React, { useEffect, useState } from 'react';
import { Doughnut, Line, Pie } from 'react-chartjs-2';
import styled from 'styled-components';
import { DensityCard } from '../../global/DensityCard';
import { get } from '../../modules/apis/api';
import { axiosSuburbsConfig } from '../../modules/configs/axiosConfigs';
import { convertDensity } from '../../modules/Utils';

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
  padding: 10px 15px;
`;

const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
  padding: 5px 10px;
`;

const BottomSection = styled.div`
  height: 30%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const densities = ['Low', 'Medium', 'High'];

const backgroundColors = [
  'rgba(204, 201, 52, 0.4)',
  'rgba(192, 75, 114, 0.4)',
  'rgba(54, 162, 235, 0.4)',
];

export function VariancePage(props) {
  const [lowDensities, setLowDensities] = useState([]);
  const [mediumDensities, setMediumDensities] = useState([]);
  const [highDensities, setHighDensities] = useState([]);
  const [allDensities, setAllDensities] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      const scopeCofig = { axiosConfig: axiosSuburbsConfig };
      const response = await get(scopeCofig)
        .then((res) => res)
        .catch((err) => alert(err));
      response &&
        (() => {
          setLowDensities(
            response.data.filter((suburb) => convertDensity(suburb.density) === 'Low')
          );
          setMediumDensities(
            response.data.filter((suburb) => convertDensity(suburb.density) === 'Medium')
          );
          setHighDensities(
            response.data.filter((suburb) => convertDensity(suburb.density) === 'High')
          );
          setAllDensities(response.data);
        })();
    };
    fetchCities();
  }, []);

  const labels = allDensities.map((density) => density.population).sort((a, b) => a < b);
  const densitiesList = [lowDensities, mediumDensities, highDensities];
  const totalUsage = 20000;

  return (
    <Container>
      <TopSection>
        <Title>harare densities</Title>
      </TopSection>
      <MidSection>
        <MainChartContainer>
          <MainChart>
            <Content>
              <Line
                data={{
                  labels: labels,
                  datasets: [
                    {
                      label: densities[0],
                      data: lowDensities.map((density) => density.allocation),
                      backgroundColor: backgroundColors[0],
                    },
                    {
                      label: densities[1],
                      data: mediumDensities.map((density) => density.allocation),
                      backgroundColor: backgroundColors[1],
                    },
                    {
                      label: densities[2],
                      data: highDensities.map((density) => density.allocation),
                      backgroundColor: backgroundColors[2],
                    },
                  ],
                }}
              />
            </Content>
          </MainChart>
        </MainChartContainer>
        <PieChartsContainer>
          {densitiesList.map((density, index) => (
            <PieChart key={index}>
              <Doughnut
                data={{
                  labels: labels,
                  datasets: [
                    {
                      label: 'high', //convertDensity(density.at(0).density),
                      data: density.map((d) => d.allocation),
                      //(density.reduce((current, previous) => current + previous) / totalUsage) *
                      //100, //
                      backgroundColor: backgroundColors[index],
                    },
                  ],
                }}
              />
            </PieChart>
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
