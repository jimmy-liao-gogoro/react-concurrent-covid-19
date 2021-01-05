import fetch from 'unfetch';

export const fetcher = (url) => fetch(url).then((r) => r.json());

export const config = { suspense: true, refreshInterval: 1 };

export default undefined;
