import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { AddSuburb } from "../adds/AddSuburb";
import { useSpring, animated } from "react-spring";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  /* background-color: rgba(255, 255, 255, 0.7); */
  background-color: rgba(0, 0, 0, 0.6);
`;

const ModalWrapper = styled.div`
  border-radius: var(--border-radius);
  height: 400px;
  width: 900px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: var(--background-color);
  /* background-color: var(--primary); */
  z-index: 10;
`;

const TitleBarContainer = styled.div`
  height: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px;
`;

const Title = styled.h2`
  color: var(--secondary-dark);
  text-transform: capitalize;
  opacity: 0.7;
`;

const CloseButton = styled.button`
  height: 30px;
  width: 30px;
  line-height: 30px;
  border-radius: 50%;
  background-color: var(--font-color);
  color: var(--primary);
  border: none;
  outline: none;
  cursor: pointer;
`;

const CloseIconSpan = styled.span`
  color: var(--primary);
  font-size: medium;
`;

const ContentContainer = styled.div`
  box-sizing: border-box;
  /* height: 100%; */
  /* border: 2px solid var(--primary); */
  /* border-style: outset; */
  /* margin: 10px; */
`;

export function AddsContainer(props) {
  const springAnimation = useSpring({
    config: {
      duration: 300,
    },
    opacity: props.showAddModal ? 1 : 0,
    transform: props.showAddModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  return (
    <React.Fragment>
      {props.showAddModal && (
        <Container>
          <animated.div style={springAnimation}>
            <ModalWrapper>
              <TitleBarContainer>
                <Title>New Suburb</Title>
                <CloseButton onClick={props.setShowAddModal}>
                  <CloseIconSpan>
                    <FontAwesomeIcon icon={["fas", "times"]} />
                  </CloseIconSpan>
                </CloseButton>
              </TitleBarContainer>
              <ContentContainer>
                <AddSuburb />
              </ContentContainer>
            </ModalWrapper>
          </animated.div>
        </Container>
      )}
    </React.Fragment>
  );
}
