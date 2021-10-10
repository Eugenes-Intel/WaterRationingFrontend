import React from "react";
import styled from "styled-components";
import { TableContainer } from "./TableContainer";
import { Sidebar } from "../Sidebar";

const Container = styled.div`
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const NavbarContainer = styled.div`
  /* background-color: var(--nav-color); */
  height: 60px;
`;

const DashboardSectionContainer = styled.div`
  /* background-color: var(--deco-pink); */
  height: 100%;
  /* width: 100%; */
  display: flex;
`;

const SiderbarContainer = styled.div`
  /* background-color: var(--ornament); */
  height: 100%;
  width: 18%;
`;

const ContentContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 20px;
  background-color: var(--primary);

  /* background-color: var(--primary); */
  /* flex-basis: 0.9; */
`;

export function Dashboard() {
  return (
    <Container>
      <NavbarContainer></NavbarContainer>
      <DashboardSectionContainer>
        <SiderbarContainer>
          <Sidebar />
        </SiderbarContainer>
        <ContentContainer>
          <TableContainer />
        </ContentContainer>
      </DashboardSectionContainer>
    </Container>
  );
}
