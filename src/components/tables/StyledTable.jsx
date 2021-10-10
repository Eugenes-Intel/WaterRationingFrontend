import styled from "styled-components";

export const StyledTable = styled.table`
  height: 100%;
  width: 100%;
  background-color: var(--background-color);
  border-radius: 10px;
  border-collapse: collapse;
  font-size: 0.9em;
  font-family: var(--roboto);
`;

export const StyledTableHead = styled.thead`
  color: var(--nav-color);
`;

export const StyledHeaderRow = styled.tr`
  height: 30px;
`;

export const StyledHeaderData = styled.th`
  color: var(--font-color);
  padding: 12px 15px;
`;

export const StyledTableBody = styled.tbody`
  line-height: 20px;
`;

export const StyledBodyRow = styled.tr`
  line-height: 30px;
  border-bottom: thin solid var(--primary);

  &:nth-of-type(odd) {
    /* background-color: var(--background-color); */
    background-color: var(--primary);
  }
`;

export const StyledBodyData = styled.td`
  padding: 12px 15px;
  color: var(--font-color-light);
`;
