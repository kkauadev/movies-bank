import { UseQueryResult, useQueries, useQuery } from "@tanstack/react-query";
interface IUseManyApi {
  queryKey: [string, number];
  queryFn: () => Promise<any>;
  staleTime: number;
  cacheTime: number;
}

const fetchApiRequest = async (url: string) => {
  return await fetch(url)
    .then((res) => res.json())
    .then((data) => data);
};

export const useApi = <T>(key: [string, number], url: string) =>
  useQuery<T>(key, () => fetchApiRequest(url), { cacheTime: 864 * 100000 });

export function useManyApi<T>(
  requestArray: {
    key: [string, number];
    url: string;
  }[]
): UseQueryResult<T>[] {
  const arr: IUseManyApi[] = requestArray.map((values) => ({
    queryFn: () => fetchApiRequest(values.url),
    queryKey: values.key,
    staleTime: 864 * 100000,
    cacheTime: 864 * 100000,
  }));

  return useQueries({ queries: arr });
}
