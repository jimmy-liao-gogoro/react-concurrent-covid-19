// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import { makeStyles } from '@material-ui/core/styles';

import {
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
} from '@material-ui/core';

import fetchCOVID19 from './fetchCOVID19';

const useStyles = makeStyles({
  tableContainer: {
    marginTop: 16,
    padding: 16,
  },
  table: {
    minWidth: 650,
  },
  progress: {
    marginLeft: 16,
  },
});

const COUNT = 7;

const QueryCOVID19 = ({ country }) => {
  const { data, isFetching } = useQuery(['covid-19', country], () => fetchCOVID19(country));

  const { length } = data;
  const slice = data.slice(length - COUNT - 1);
  slice.pop();
  const res = slice.reverse();
  const countryName = res[0][5];

  const classes = useStyles();

  return (
    <Grid container justify="center">
      <Grid item xs={9}>
        <TableContainer className={classes.tableContainer} component={Paper}>
          <Typography variant="h3" component="h3" gutterBottom>
            {countryName}
            {isFetching ? (
              <CircularProgress className={classes.progress} />
            ) : null}
          </Typography>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Total Confirmed</TableCell>
                <TableCell>Total Deceased</TableCell>
                <TableCell>Total Recovered</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {res.map((item) => (
                <TableRow key={item[1]}>
                  <TableCell component="th" scope="row">
                    {item[1]}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {item[19]}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {item[20]}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {item[21]}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

QueryCOVID19.propTypes = {
  country: PropTypes.string,
};

QueryCOVID19.defaultProps = {
  country: '',
};

export default QueryCOVID19;
