import React, { FunctionComponent } from "react";
import { MainTable } from "components/pages/main-table";
import styled from "styled-components";

const TableContainer = styled.div`
  display: flex;
  margin: 20px;
`;

export const MainPage: FunctionComponent = () => {
  return (
    <>
      <TableContainer>
        <MainTable />
      </TableContainer>
    </>
  );
};
