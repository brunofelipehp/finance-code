import { api } from "../api";
import { TransitionProps } from "../interfaces/transition-data";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const postData = async (data: TransitionProps) => {
  await api.post("/transition", data);
};

export const useTransitionMutate = () => {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: postData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["transition-data"] });
    },
  });

  return mutate;
};
