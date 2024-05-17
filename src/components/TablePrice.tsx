import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useTransitionTable } from "../hooks/useTransitionTable";
import { useTransitionDeleteMutate } from "../hooks/useTransitionDeleteMutate";
import useModalStore from "../store/modalStore";
import useTransitionStore from "../store/transitionStore";

const TablePrice = () => {
  const { data } = useTransitionTable();

  const { mutate } = useTransitionDeleteMutate();

  function deleteTransition(id: string) {
    mutate(id);
  }

  const toggleModal = useModalStore((state) => state.toggleModal);

  const setTransitionId = useTransitionStore((state) => state.setTransitionId);

  const handleFormById = (id: string) => {
    setTransitionId(id);
    toggleModal();
  };

  return (
    <section className="flex justify-center">
      <table className="table-auto rounded-lg p-3 w-[60rem]  border-separate border-spacing-y-3">
        <thead className=" mb-3">
          <tr className="bg-purple-500 text-left text-white">
            <th className="p-3 rounded-sm">Descrição</th>
            <th className="p-3">Valor</th>
            <th className="p-3">Data</th>
            <th className="p-3 rounded-sm">Ações</th>
          </tr>
        </thead>
        <tbody className="">
          {data?.map((transition) => (
            <tr className=" bg-slate-200 " key={transition.id}>
              <td className="p-2  rounded-sm bg-slate-200">
                {transition.description}
              </td>
              <td className="">{transition.price}</td>
              <td className="p-2  rounded-sm">{transition.date}</td>
              <td>
                <div className="flex gap-2 justify-center items-center">
                  <div>
                    <button onClick={() => handleFormById(transition.id)}>
                      <FiEdit size={24} color="green" />
                    </button>
                  </div>
                  <div>
                    <button onClick={() => deleteTransition(transition.id)}>
                      <RiDeleteBin6Line size={24} color="red" />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default TablePrice;
