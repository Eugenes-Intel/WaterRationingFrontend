import React, { useState, useEffect } from 'react';
import { Bar, Doughnut, Line, Pie } from 'react-chartjs-2';
import styled from 'styled-components';
import { AddButton } from '../../global/AddButton';
import { GlobalDropdown } from '../../global/GlobalDropdown';
import { get, getWith } from '../../modules/apis/api';
import { axiosCitiesConfig, axiosSuburbsConfig } from '../../modules/configs/axiosConfigs';
import { roundFloat } from '../../modules/Utils';

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

const TopSectionButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  /* columns: 25% auto 25%; */
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
  width: 100;
`;

const Title = styled.h1`
  width: 100%;
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
  padding: 10px 15px;
`;

const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
  padding: 5px 10px;
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

const backgroundColors = [
  'rgba(255, 99, 132, 0.4)',
  'rgba(255, 159, 64, 0.4)',
  'rgba(75, 192, 192, 0.4)',
  'rgba(204, 201, 52, 0.4)',
  'rgba(192, 75, 114, 0.4)',
  'rgba(54, 162, 235, 0.4)',
  'rgba(153, 102, 255, 0.4)',
];

const pieColors = [
  'rgba(255, 245, 99, 0.4)',
  'rgba(172, 255, 64, 0.4)',
  'rgba(75, 192, 192, 0.4)',
  'rgba(52, 204, 196, 0.4)',
  'rgba(75, 165, 192, 0.4)',
  'rgba(54, 162, 235, 0.4)',
  'rgba(102, 255, 230, 0.4)',
];

const cityTemplate = {
  id: '',
  name: '',
  suburbs: [],
};

export function LandingPage(props) {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(cityTemplate);
  const [dailyAverageUsage, setDailyAverageUsage] = useState(0);

  useEffect(() => {
    (async () => {
      const scopeConfig = { axiosConfig: axiosCitiesConfig };
      const response = await getWith(scopeConfig)
        .then((res) => res)
        .catch((err) => alert(err));
      response && setCities(response.data);
    })();
  }, []);

  const dailyAverageUsageHandler = () => {
    const totalSuburbAverageUsageHistory = selectedCity.suburbs.reduce((acc, suburb) => {
      const suburbTotalUsageHistory = suburb.usageHistory.reduce((accUsage, history) => {
        return accUsage + history.usage;
      }, 0);
      const suburbAverageUsageHistory =
        suburbTotalUsageHistory !== 0 ? suburbTotalUsageHistory / suburb.usageHistory.length : 0;
      return acc + suburbAverageUsageHistory;
    }, 0);
    const averageUsage =
      totalSuburbAverageUsageHistory !== 0
        ? totalSuburbAverageUsageHistory / selectedCity.suburbs.length
        : 0;
    return roundFloat(averageUsage);
  };

  const selectedCityHandler = (e) => {
    setSelectedCity(JSON.parse(e.target.value));
    setDailyAverageUsage(() => dailyAverageUsageHandler());
    console.log('dailyAverageUsageHandler', dailyAverageUsageHandler());
  };

  return (
    <Container>
      <TopSection>
        <Title>water rationing overview</Title>
        <TopSectionButtonsContainer>
          <ButtonContainer>
            <GlobalDropdown
              placeholder={'select city'}
              entities={cities}
              onChange={(e) => selectedCityHandler(e)}
            />
          </ButtonContainer>
          <ButtonContainer>
            <AddButton title='Allocate' />
          </ButtonContainer>
        </TopSectionButtonsContainer>
      </TopSection>
      <MidSection>
        <MainChartContainer>
          <MainChart>
            <Content>
              <Bar
                data={{
                  labels: selectedCity.suburbs.map((suburb) => suburb.name),
                  datasets: [
                    {
                      label: 'suburbs',
                      data: selectedCity.suburbs.map((suburb) => suburb.allocation),
                      backgroundColor: backgroundColors,
                      pointStyle: 'circle',
                    },
                  ],
                }}
                options={{ maintainAspectRatio: false }}
              />
            </Content>
          </MainChart>
        </MainChartContainer>
        <SmallChartContainer>
          <SmallChart>
            <Content>
              <Doughnut
                data={{
                  labels: selectedCity.suburbs.map((suburb) => suburb.name),
                  datasets: [
                    {
                      label: 'suburbs',
                      data: selectedCity.suburbs.map((suburb) => suburb.allocation),
                      backgroundColor: pieColors,
                      pointStyle: 'circle',
                    },
                  ],
                }}
                options={{ maintainAspectRatio: false }}
              />
            </Content>
          </SmallChart>
        </SmallChartContainer>
      </MidSection>
      <BottomSection>
        <Metrice>
          Popullation:{' '}
          {selectedCity.suburbs.reduce((acc, suburb) => {
            return acc + suburb.population;
          }, 0)}{' '}
        </Metrice>
        <Metrice>
          Allocation:{' '}
          {selectedCity.suburbs.reduce((acc, suburb) => {
            return acc + suburb.allocation;
          }, 0)}{' '}
        </Metrice>
        <Metrice>Daily average: {dailyAverageUsage}</Metrice>
        <Metrice>Suburbs: {selectedCity.suburbs.length}</Metrice>
      </BottomSection>
    </Container>
  );
}
