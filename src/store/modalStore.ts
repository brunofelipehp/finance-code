import create from "zustand";

interface ModalStateProps {
  isOpen: boolean;
  toggleModal: () => void;
}

const useModalStore = create<ModalStateProps>((set) => ({
  isOpen: false,
  toggleModal: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useModalStore;
