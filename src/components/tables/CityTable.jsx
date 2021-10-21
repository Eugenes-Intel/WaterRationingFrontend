import React from 'react';
import { convertDensity, roundFloat } from '../../modules/Utils';
import { Variance } from '../Variance';
import { ActionButton } from '../../global/ActionButton';
import {
  StyledTable,
  StyledTableHead,
  StyledHeaderRow,
  StyledHeaderData,
  StyledTableBody,
  StyledBodyRow,
  StyledBodyData,
} from './StyledTable';

export function CityTable({ suburbsToDisplay, actionButtons }) {
  return (
    <StyledTable>
      <StyledTableHead>
        <StyledHeaderRow>
          <StyledHeaderData>Suburb</StyledHeaderData>
          <StyledHeaderData>Population</StyledHeaderData>
          <StyledHeaderData>Density</StyledHeaderData>
          <StyledHeaderData>Allocation</StyledHeaderData>
          <StyledHeaderData>Usage</StyledHeaderData>
          <StyledHeaderData>Variance</StyledHeaderData>
          <StyledHeaderData></StyledHeaderData>
        </StyledHeaderRow>
      </StyledTableHead>
      <StyledTableBody>
        {suburbsToDisplay.map((suburb, index) => {
          const variance = roundFloat(suburb.dailyAverageUsage - suburb.allocation);
          return (
            <StyledBodyRow key={suburb.id}>
              <StyledBodyData>{suburb.name}</StyledBodyData>
              <StyledBodyData>{suburb.population}</StyledBodyData>
              <StyledBodyData>{convertDensity(suburb.density)}</StyledBodyData>
              <StyledBodyData>{roundFloat(suburb.allocation)}</StyledBodyData>
              <StyledBodyData>{roundFloat(suburb.dailyAverageUsage)}</StyledBodyData>
              <StyledBodyData>
                <Variance variance={variance} />
              </StyledBodyData>
              <StyledBodyData>
                {actionButtons.map((actionButton, index) => {
                  return <ActionButton key={index} actionButton={actionButton} />;
                })}
              </StyledBodyData>
            </StyledBodyRow>
          );
        })}
      </StyledTableBody>
    </StyledTable>
  );
}
