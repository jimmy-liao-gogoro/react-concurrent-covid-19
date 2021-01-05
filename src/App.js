import { Suspense } from 'react';

import COVID19 from './COVID19';

const App = () => (
  <Suspense fallback="loading">
    <COVID19 />
  </Suspense>
);

export default App;
