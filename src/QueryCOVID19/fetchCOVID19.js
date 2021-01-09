import fetch from 'unfetch';

export default async (country) => {
  const url = `https://storage.googleapis.com/covid19-open-data/v2/${country}/main.json`;
  const { data } = await fetch(url).then((r) => r.json());
  return data;
};
