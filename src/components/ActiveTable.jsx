import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReactPaginate from "react-paginate";
import "../css/paginationTable.css";
import { SuburbTable } from "./tables/SuburbTable";

const Container = styled.div``;

const TableContainer = styled.div``;

const PaginationContainer = styled.div`
  margin-top: 10px;
`;

const actionButtons = [
  {
    title: "edit",
    iconElement: {
      brand: "fas",
      iconName: "edit",
    },
    color: "var(--font-color-light)",
  },
  {
    title: "delete",
    iconElement: {
      brand: "fas",
      iconName: "trash-alt",
    },
    color: "red",
  },
  {
    title: "details",
    iconElement: {
      brand: "fas",
      iconName: "info",
    },
    color: "#008000",
  },
];

export function ActiveTable(props) {
  const [suburbs, setSuburbs] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    setSuburbs(props.suburbs.slice(0, 50));
  }, [props.suburbs]);

  const suburbsPerPage = 5;
  const suburbsVisited = pageNumber * suburbsPerPage;

  const pageCount = Math.ceil(suburbs.length / suburbsPerPage);

  const suburbsToDisplay = suburbs.slice(suburbsVisited, suburbsVisited + suburbsPerPage);

  const onpageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Container>
      <TableContainer>
        <SuburbTable suburbsToDisplay={suburbsToDisplay} actionButtons={actionButtons} />
      </TableContainer>
      <PaginationContainer>
        <ReactPaginate
          previousLabel={<FontAwesomeIcon icon={["fas", "arrow-left"]} />}
          nextLabel={<FontAwesomeIcon icon={["fas", "arrow-right"]} />}
          pageCount={pageCount}
          onPageChange={onpageChange}
          containerClassName={"container"}
          activeClassName={"activeBtn"}
          disabledClassName={"disabledBtn"}
          previousClassName={"prevBtn"}
          nextClassName={"nextBtn"}
        />
      </PaginationContainer>
    </Container>
  );
}
