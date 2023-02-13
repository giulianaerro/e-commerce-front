import useSWR from "swr";
import useSWRInmutable from "swr/immutable";
import { fetchApi } from "./fetch-api";

export function useMe() {
  const { data, error } = useSWR("/me", fetchApi);
  return data;
}
// export function useProduct(id: string) {
//   const { data, error } = useSWRInmutable("/products/" + id, fetchApi);
//   return data;
// }
