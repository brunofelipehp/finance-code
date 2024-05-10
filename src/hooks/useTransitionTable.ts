import { useQuery } from "@tanstack/react-query";
import { api } from "../api";
import { AxiosPromise } from "axios";
import { TransitionProps } from "../interfaces/transition-data";

const fetchData = async (): AxiosPromise<TransitionProps[]> => {
  const response = await api.get<TransitionProps[]>("/transition");
  return response;
};

export const useTransitionTable = () => {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ["transition-data"],
  });

  return { ...query, data: query.data?.data };
};
