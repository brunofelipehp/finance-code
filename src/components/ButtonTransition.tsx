import { MdOutlineAddCircleOutline } from "react-icons/md";
import useModalStore from "../store/modalStore";

export default function ButtonTransition() {
  const toggleModal = useModalStore((state) => state.toggleModal);

  return (
    <button
      className="self-center w-44 flex gap-1 items-center border-purple-700 border-2 rounded-lg p-3 text-purple-700 font-medium hover:text-white hover:border-purple-200 transition-all duration-500 ease-in-out hover:bg-purple-600"
      onClick={toggleModal}
    >
      Nova transação
      <MdOutlineAddCircleOutline size={24} />
    </button>
  );
}
