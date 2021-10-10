import React from "react";
import styled from "styled-components";
import { Dashboard } from "../components/containers/Dashboard";
import "../constants/colors.css";
import "../constants/fonts.css";
import "../constants/styles.css";
import "../css/app.css";
// import bootstrap from "bootstrap/dist/css/bootstrap.css";

const AppContainer = styled.div`
  margin: 0px;
  padding: 0px;
  /* box-sizing: border-box; */
  background-color: var(--background-color);
  height: 100vh;
  width: 100vw;
`;

function App(props) {
  return (
    <AppContainer>
      <Dashboard />
    </AppContainer>
  );
}

export default App;
