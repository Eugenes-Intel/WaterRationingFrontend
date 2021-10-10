import React from "react";
import styled from "styled-components";

const ButtonSidebar = styled.button`
  border-radius: 30px;
  background-color: var(--secondary-light);
  padding: 5px 12px;
  margin: 10px;
  outline: none;
  border-style: none;
  line-height: 22px;

  &:hover {
    cursor: pointer;
  }
`;

export default function SidebarButton(props) {
  return <ButtonSidebar>{props.title}</ButtonSidebar>;
}
