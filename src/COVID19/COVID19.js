import useSWR from 'swr';

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
import { fetcher, config } from '../util/swrSettings';

const useStyles = makeStyles({
  tableContainer: {
    padding: 12,
  },
  table: {
    minWidth: 650,
  },
});

const COUNT = 8;

const COVID19 = () => {
  const url = 'https://storage.googleapis.com/covid19-open-data/v2/TW/main.json';
  const { data: { data } } = useSWR(url, fetcher, config);
  const { length } = data;
  const res = data.slice(length - COUNT);
  const country = res[0][5];

  const classes = useStyles();

  return (
    <Grid container justify="center">
      <Grid item xs={9}>
        <TableContainer className={classes.tableContainer} component={Paper}>
          <Typography variant="h3" component="h3" gutterBottom>
            {country}
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

export default COVID19;
