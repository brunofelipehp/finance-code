import useModalStore from "../store/modalStore";
import FormTransition from "./FormTransition";

export default function Modal() {
  const isOpen = useModalStore((state) => state.isOpen);

  return (
    <div
      className={`${
        isOpen
          ? "fixed z-50 w-full h-full bg-backModal flex justify-center items-center"
          : "hidden"
      }`}
    >
      <div className="bg-white w-1/3 h-2/4 rounded-xl">
        <div className="flex flex-col justify-center items-center p-8 ">
          <h1 className="text-[2.5rem] font-bold ">Nova Transação</h1>
          <FormTransition />
        </div>
      </div>
    </div>
  );
}
