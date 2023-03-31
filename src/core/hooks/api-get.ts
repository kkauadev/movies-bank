import { UseQueryResult, useQueries, useQuery } from "@tanstack/react-query";
interface IUseManyApi {
  queryKey: [string, number];
  queryFn: () => Promise<any>;
  staleTime: number;
}

const fetchApiRequest = async (url: string) => {
  return await fetch(url)
    .then((res) => res.json())
    .then((data) => data);
};

export const useApi = <T>(key: [string, number], url: string) =>
  useQuery<T>(key, () => fetchApiRequest(url));

export function useManyApi<T>(
  requestArray: {
    key: [string, number];
    url: string;
  }[]
): UseQueryResult<T>[] {
  const arr: IUseManyApi[] = [];
  requestArray.forEach((values) => {
    arr.push({
      queryFn: () => fetchApiRequest(values.url),
      queryKey: values.key,
      staleTime: Infinity,
    });
  });

  return useQueries({
    queries: arr,
  });
}
