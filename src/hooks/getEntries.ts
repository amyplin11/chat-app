import { useState, useEffect } from "react";

// const APP_ID = '692b184f'
// const APP_KEY = 'ce6a1128acecf7fc87a9081c9d5e8b5b'

const api = "http://localhost:8080";
const path = "/entries";

interface State {
  loading: boolean;
  error: any;
  data: any;
}

export const UseGetEntries = ({ searchString }: any) => {
  const [state, setState] = useState<State>({
    data: null,
    error: null,
    loading: true,
  });

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${api}${path}`, {
        method: "GET",
        headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          "Accept-Encoding": "gzip",
        },
      });
      res
        .json()
        .then((res) => setState({ data: res, error: null, loading: false }))
        .catch((error) => setState({ ...state, error, loading: false }));
    }

    fetchData();
  }, [searchString]);

  const { data, error, loading } = state;
  return [data, error, loading];
};
