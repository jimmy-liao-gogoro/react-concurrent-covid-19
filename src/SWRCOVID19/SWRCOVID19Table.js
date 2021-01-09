import useSWR from 'swr';
import PropTypes from 'prop-types';

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
} from '@material-ui/core';

const useStyles = makeStyles({
  tableContainer: {
    marginTop: 16,
    padding: 16,
  },
  table: {
    minWidth: 650,
  },
});

const COUNT = 7;

const SWRCOVID19Table = ({ country }) => {
  const url = `https://storage.googleapis.com/covid19-open-data/v2/${country}/main.json`;
  const { data: { data } } = useSWR(url);
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

SWRCOVID19Table.propTypes = {
  country: PropTypes.string,
};

SWRCOVID19Table.defaultProps = {
  country: '',
};

export default SWRCOVID19Table;
