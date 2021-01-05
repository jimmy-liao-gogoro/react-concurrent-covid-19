import useSWR from "swr";

import { fetcher, config} from "../util/swrSettings";

const COVID19 = () => {
  const url = "https://storage.googleapis.com/covid19-open-data/v2/TW/main.json";
  const { data } = useSWR(url, fetcher, config);

  return <div>{data.data[0][0]}</div>;
}

export default COVID19;
