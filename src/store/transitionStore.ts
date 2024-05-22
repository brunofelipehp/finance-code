import { create } from "zustand";

interface TransitionStateProps {
  transitionId: string | null;
  setTransitionId: () => void;
}

const useTransitionStore = create<TransitionStateProps>((set) => ({
  transitionId: null,
  setTransitionId: () => set((state) => ({ transitionId: state.transitionId })),
}));

export default useTransitionStore;
