import useSWR from 'swr';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { fetcher, config } from '../util/swrSettings';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const COUNT = 10;

const COVID19 = () => {
  const url = 'https://storage.googleapis.com/covid19-open-data/v2/TW/main.json';
  const { data: { data } } = useSWR(url, fetcher, config);
  const { length } = data;
  const res = data.slice(length - COUNT);

  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Country</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Total Confirmed</TableCell>
            <TableCell>Total Deceased</TableCell>
            <TableCell>Total Recovered</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {res.map((item) => (
            <TableRow key="key">
              <TableCell component="th" scope="row">
                {item[5]}
              </TableCell>
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
  );
};

export default COVID19;
