// eslint-disable-next-line no-unused-vars
import React, {
  useTransition, Suspense, useState,
} from 'react';
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
import { QueryClientProvider } from 'react-query';

import queryClient from '../util/queryClient';
import QueryCOVID19Table from './QueryCOVID19Table';

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
  progress: {
    marginTop: 16,
    marginLeft: 16,
  },
}));

const COVID19 = () => {
  const classes = useStyles();
  const [country, setCountry] = useState('TW');
  const [startTransition, isPending] = useTransition({
    timeoutMs: 1500,
  });

  const handleCountryChange = (e) => {
    const changedCountry = e.target.value;
    startTransition(() => {
      setCountry(changedCountry);
    });
  };

  return (
    <QueryClientProvider client={queryClient}>
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
              disabled={isPending}
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
      <Suspense fallback={<CircularProgress className={classes.progress} />}>
        <QueryCOVID19Table country={country} />
      </Suspense>
    </QueryClientProvider>
  );
};

export default COVID19;
