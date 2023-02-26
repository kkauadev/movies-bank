import { useQuery } from "react-query";

export const useApi = <T>(url: string) => {
  const result = useQuery<T>("", async () => {
    const data = await (await fetch(url)).json();
    return data;
  });
  return result;
};
