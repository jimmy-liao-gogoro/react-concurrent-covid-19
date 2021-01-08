import fetch from 'unfetch';

const fetcher = (url) => fetch(url).then((r) => r.json());

export const config = { fetcher, suspense: true };

export default undefined;
