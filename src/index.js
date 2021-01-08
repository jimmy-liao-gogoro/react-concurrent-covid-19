// eslint-disable-next-line camelcase
import { unstable_createRoot } from 'react-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { SWRConfig } from 'swr';

import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { config } from './util/swrSettings';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const root = document.getElementById('root');
unstable_createRoot(root).render(
  <SWRConfig value={config}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </SWRConfig>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
