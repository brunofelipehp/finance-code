import { useQuery } from "@tanstack/react-query";
import { api } from "../api";
import { AxiosPromise } from "axios";
import { TransitionProps } from "../interfaces/transition-data";

const fetchData = async (
  transitionId: string | null
): AxiosPromise<TransitionProps> => {
  const response = await api.get<TransitionProps>(
    `/transition/${transitionId}`
  );
  return response;
};

export const useGetTransitionById = (transitionId: string | null) => {
  const query = useQuery({
    queryFn: () => fetchData(transitionId),
    queryKey: ["transition-data"],
    enabled: transitionId != null,
  });

  return { ...query, data: query.data?.data };
};
