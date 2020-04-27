import React, { FunctionComponent } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

import { UseGetEntries } from "hooks/useGetEntries";

export const MainTable: FunctionComponent = () => {
  const { data, error, loading } = UseGetEntries({});
  const classes: any = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  return (
    <>
      {loading ? (
        <div>LOADING</div>
      ) : (
        <TableContainer component={Paper}>
          <Table
            className={classes.table}
            aria-label="simple table"
            stickyHeader
            size="small"
          >
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Author</TableCell>
                <TableCell>Cited By</TableCell>
                <TableCell>Predicted Status</TableCell>
                <TableCell>Abstract</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row: any) => {
                return (
                  <TableRow key={row.url_scholarbib}>
                    <TableCell component="th" scope="row">
                      <b>{row.title}</b>
                    </TableCell>
                    <TableCell>{row.author}</TableCell>
                    <TableCell>
                      <Chip
                        variant="outlined"
                        label={row.citedby}
                        size="small"
                      />
                    </TableCell>
                    <TableCell>
                      {row.predicted_status ? (
                        <Chip color="primary" label="True" />
                      ) : (
                        <Chip color="secondary" label="False" />
                      )}
                    </TableCell>
                    <TableCell>{row.abstract}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};
