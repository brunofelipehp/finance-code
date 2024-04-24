import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

const TablePrice = () => {
  return (
    <>
      <table className="table-auto rounded-lg p-3 w-[50rem]  border-separate border-spacing-y-3">
        <thead className=" mb-3">
          <tr className="bg-purple-500 text-left text-white">
            <th className="p-3 rounded-sm">Descrição</th>
            <th className="p-3">Valor</th>
            <th className="p-3">Data</th>
            <th className="p-3 rounded-sm">Ações</th>
          </tr>
        </thead>
        <tbody className="">
          <tr className=" bg-slate-200 ">
            <td className="p-2  rounded-sm bg-slate-200">Salario</td>
            <td className="">R$ 3.000,00</td>
            <td className="p-2  rounded-sm">05/04/2024</td>
            <td>
              <div className="flex gap-2 justify-center items-center">
                <div>
                  <FiEdit size={24} color="green" />
                </div>
                <div>
                  <RiDeleteBin6Line size={24} color="red" />
                </div>
              </div>
            </td>
          </tr>
          <tr className="bg-slate-200">
            <td className="p-2  rounded-sm">Salario</td>
            <td className="p-2  rounded-sm">R$ 3.000,00</td>
            <td className="p-2  rounded-sm">05/04/2024</td>
            <td>
              <div className="flex gap-2 justify-center items-center">
                <div>
                  <FiEdit size={24} color="green" />
                </div>
                <div>
                  <RiDeleteBin6Line size={24} color="red" />
                </div>
              </div>
            </td>
          </tr>
          <tr className="bg-slate-200">
            <td className="p-2  rounded-sm">Salario</td>
            <td className="p-2  rounded-sm">R$ 3.000,00</td>
            <td className="p-2  rounded-sm">05/04/2024</td>
            <td>
              <div className="flex gap-2 justify-center items-center">
                <div>
                  <FiEdit size={24} color="green" />
                </div>
                <div>
                  <RiDeleteBin6Line size={24} color="red" />
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TablePrice;
