import useModalStore from "../store/modalStore";

export default function Modal() {
  const isOpen = useModalStore((state) => state.isOpen);
  const toggleModal = useModalStore((state) => state.toggleModal);

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
          <form action="" className="grid gap-5 mt-8">
            <label htmlFor="">
              <input
                type="text"
                placeholder="Descrição"
                className="bg-white w-[30rem] h-10 rounded-sm ml-3 outline-purple-700 p-2 border border-zinc-500"
              />
            </label>

            <label htmlFor="">
              <input
                type="number"
                placeholder="Preço"
                className="bg-white w-[30rem] h-10 rounded-sm ml-3 outline-purple-700 p-2  border border-zinc-500"
              />
            </label>

            <label htmlFor="">
              <input
                type="date"
                placeholder="Descrição"
                className="bg-white w-[30rem] h-10 rounded-sm ml-3 outline-purple-700 p-2  border border-zinc-500"
              />
            </label>
            <div className="flex gap-3 justify-end">
              <button
                className="border-2 border-red-400 text-red-400 p-3 w-28 h-10 flex justify-center hover:bg-red-500 hover:text-white transition-all ease-in-out duration-300 items-center rounded-lg"
                onClick={toggleModal}
              >
                Cancelar
              </button>
              <button className="border-2  text-white bg-green-700 hover:bg-green-500 transition-all ease-in-out duration-300  p-3 w-28 h-10 flex justify-center items-center rounded-lg">
                Salvar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
