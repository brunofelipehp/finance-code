import { useQuery } from "@tanstack/react-query";
import { api } from "../api";
import { AxiosPromise } from "axios";
import { TransitionProps } from "../interfaces/transition-data";
import { TransitionStateProps } from "../store/transitionStore";

const fetchData = async (
  transitionId: TransitionStateProps
): AxiosPromise<TransitionProps> => {
  const response = await api.get<TransitionProps>(
    `/transition/${transitionId}`
  );
  return response;
};

export const useGetTransitionById = (transitionId: TransitionStateProps) => {
  const query = useQuery({
    queryFn: () => fetchData(transitionId),
    queryKey: ["transition-data"],
    enabled: !!transitionId,
  });

  return { ...query, data: query.data?.data };
};
