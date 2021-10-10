import React from "react";
import styled from "styled-components";
import SidebarButton from "../global/SidebarButton";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 20px;
`;

const InteractionButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  /* background-color: var(--primary); */
  height: 60%;
  padding: 0px 20px;
`;

const LogoutButtonContainer = styled.div`
  height: 20%;
  display: flex;
  /* background-color: var(--primary); */
  align-items: flex-end;
`;

const LogoutButton = styled.button`
  border-radius: 5px;
  color: var(--secondary-dark);
  background-color: var(--primary);
  padding: 5px 12px;
  outline: none;
  border-style: none;
  margin: 10px;
  line-height: 15px;

  &:hover {
    cursor: pointer;
    color: var(--primary);
    background-color: var(--secondary-dark);
  }
`;

export function Sidebar(props) {
  const interactions = ["Dashboard", "Suburbs", "Densities", "Variance"];
  return (
    <Container>
      <InteractionButtonsContainer>
        {interactions.map((interaction, index) => {
          return <SidebarButton key={index} title={interaction} />;
        })}
      </InteractionButtonsContainer>
      <LogoutButtonContainer>
        <LogoutButton>Logout</LogoutButton>
      </LogoutButtonContainer>
    </Container>
  );
}
