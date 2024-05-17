import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../api";

const deleteData = async (id: string) => {
  await api.delete(`/transition/${id}`);
};

export const useTransitionDeleteMutate = () => {
  const queryClient = useQueryClient();

  const mutate = useMutation({
    mutationFn: deleteData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["transition-data"] });
    },
  });

  return mutate;
};
