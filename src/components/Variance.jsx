import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const VarianceArrow = styled.span`
  font-size: medium;
  color: ${(props) => (props.arrowColor ? props.arrowColor : "white")};
`;

export function Variance({ variance }) {
  return (
    <React.Fragment>
      {variance > 0 ? variance : variance * -1}
      {variance < 0 ? (
        <VarianceArrow arrowColor="red">
          <FontAwesomeIcon icon={["fas", "arrow-alt-circle-down"]} />
        </VarianceArrow>
      ) : (
        <VarianceArrow arrowColor="green">
          <FontAwesomeIcon icon={["fas", "arrow-alt-circle-up"]} />
        </VarianceArrow>
      )}
    </React.Fragment>
  );
}
