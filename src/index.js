// eslint-disable-next-line camelcase
import { unstable_createRoot } from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root');
unstable_createRoot(root).render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
