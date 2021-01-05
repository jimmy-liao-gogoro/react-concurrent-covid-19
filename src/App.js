import { CircularProgress } from '@material-ui/core';
import { Suspense } from 'react';

import COVID19 from './COVID19';

const App = () => (
  <Suspense fallback={<CircularProgress />}>
    <COVID19 />
  </Suspense>
);

export default App;
