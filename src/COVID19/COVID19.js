import {
  AppBar,
  CircularProgress,
  makeStyles,
  Toolbar,
  Typography,
  FormControl,
  Select,
  MenuItem,
} from '@material-ui/core';

import { Suspense, useState } from 'react';

import COVID19Table from './COVID19Table';

const useStyles = makeStyles((theme) => ({
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
}));

const COVID19 = () => {
  const classes = useStyles();
  const [country, setCountry] = useState('TW');

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            React Concurrent COVID-19
          </Typography>
          <FormControl className={classes.formControl}>
            <Select
              labelId="label-country"
              id="select-country"
              value={country}
              onChange={handleCountryChange}
            >
              <MenuItem value="TW">Taiwan</MenuItem>
              <MenuItem value="US">United States of America</MenuItem>
              <MenuItem value="CN">China</MenuItem>
              <MenuItem value="JP">Japan</MenuItem>
              <MenuItem value="KR">South Korea</MenuItem>
            </Select>
          </FormControl>
        </Toolbar>
      </AppBar>
      <Suspense fallback={<CircularProgress />}>
        <COVID19Table country={country} />
      </Suspense>
    </>
  );
};

export default COVID19;
