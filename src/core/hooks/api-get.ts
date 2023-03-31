import { UseQueryResult, useQueries, useQuery } from "react-query";

interface IUseManyApi {
  key: string;
  url: string;
}

const fetchApiRequest = async (url: string) => {
  return await fetch(url)
    .then((res) => res.json())
    .then((data) => data);
};

export const useApi = <T>(key: string, url: string) =>
  useQuery<T>(key, () => fetchApiRequest(url));

export function useManyApi<T>(requestArray: IUseManyApi[]) {
  const responseQueryData: UseQueryResult<T>[] = useQueries(
    requestArray.map((values) => {
      return {
        queryKey: values.key,
        queryFn: () => fetchApiRequest(values.url),
      };
    })
  );
  return responseQueryData;
}
