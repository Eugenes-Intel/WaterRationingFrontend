import React, { useEffect, useState, createContext } from "react";
import styled from "styled-components";
import { ActiveTable } from "../ActiveTable";
import { AddButton } from "../../global/AddButton";
import { get, post } from "../../modules/Server";
import { ModalContainer } from "./ModalContainer";

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: var(--background-color);
  padding: 20px;
  box-shadow: 0 0 2px var(--background-color);
  border-radius: 5px;

  /* box-sizing: border-box; */
`;

const CityTitleContainer = styled.div`
  font-size: x-large;
`;

const AddButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const reqData = {
  id: 0,
  name: "Front End 2",
  cityId: 17,
  density: "low",
  population: 12800,
  allocation: 18710.68,
  dailyAverageUsage: 21050.99,
};

const resData = {
  id: 0,
  name: "",
  cityId: 0,
  city: null,
  density: 0,
  population: 0.1,
  allocation: 0.1,
  dailyAverageUsage: 0.1,
  usageHistory: null,
};

export function TableContainer() {
  const [suburbs, setSuburbs] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    // async function fetchData() {
    //   const res = await get(JSON.stringify(reqData))
    //     .then((res) => res)
    //     .catch((err) => console.log(err));
    //   setSuburbs(res.data);
    // }

    // async function postData() {
    //   const res = await post(reqData)
    //     .then((res) => res)
    //     .catch((err) => console.log(err));
    // }
    // // postData();
    // fetchData();
  }, []);

  // useEffect(() => {
  //   console.log("add toggled");
  //   return () => {
  //     console.log("cleaning toggle add");
  //   };
  // }, [showAddModal]);

  const toggleAdd = () => {
    setShowAddModal((prev) => !prev);
  };
  return (
    <Container>
      <CityTitleContainer>Harare</CityTitleContainer>
      <AddButtonContainer>
        <AddButton title="Suburb" onClick={() => setShowAddModal((prev) => !prev)} />
      </AddButtonContainer>
      <ModalContainer
        showAddModal={showAddModal}
        setShowAddModal={() => setShowAddModal((prev) => !prev)}
      />
      <ActiveTable suburbs={suburbs} />
    </Container>
  );
}
