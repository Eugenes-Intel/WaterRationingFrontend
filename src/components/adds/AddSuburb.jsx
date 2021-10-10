import React from "react";
import styled from "styled-components";
import { CrudButton } from "../../global/CrudButton";

const Container = styled.div`
  /* background-color: var(--primary); */
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* height: 100%; */
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  /* border-bottom-left-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius); */
`;

const InputSectionContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 20px 40px;
`;

const InputCategoryContainer = styled.div`
  /* box-shadow: 0 0 1px var(--white); */
  border-radius: var(--border-radius);
  padding: 10px 20px;
  margin: 20px auto;
  background-color: var(--primary);
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TextInput = styled.input`
  padding: 10px 25px;
  margin: 20px auto;
  color: var(--font-color-light);
  display: block;
  border-style: none;
  border-radius: var(--border-radius);
  background-color: var(--background-color);
  transition-duration: 0.8s;

  &::placeholder {
    color: var(--secondary-dark);
    opacity: 0.7;
  }
`;

const CrudButtonsContainer = styled.div`
  margin-top: 10px;
  width: 100%;
`;

export function AddSuburb(props) {
  return (
    <Container>
      <InputSectionContainer>
        <InputCategoryContainer>
          <TextInput placeholder="City" />
        </InputCategoryContainer>
        <InputCategoryContainer>
          <TextInput placeholder="Suburb" />
        </InputCategoryContainer>
        <CrudButtonsContainer>
          <CrudButton title="Save" bgColor="var(--deco-pink)" iconBrand="fas" iconName="save" />
          <CrudButton
            title="Cancel"
            bgColor="var(--secondary-light)"
            iconBrand="fas"
            iconName="window-close"
          />
        </CrudButtonsContainer>
      </InputSectionContainer>
      <InputSectionContainer>
        <InputCategoryContainer>
          <TextInput placeholder="Density" />
        </InputCategoryContainer>
        <InputCategoryContainer>
          <TextInput placeholder="Popullation" />
          <TextInput placeholder="Allocation" />
        </InputCategoryContainer>
      </InputSectionContainer>
    </Container>
  );
}
