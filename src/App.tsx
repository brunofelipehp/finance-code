import { FiArrowDownCircle, FiArrowUpCircle } from "react-icons/fi";
import TablePrice from "./components/TablePrice";
import { IoWalletOutline } from "react-icons/io5";
import Header from "./components/Header";
import { MdOutlineAddCircleOutline } from "react-icons/md";

function App() {
  return (
    <div className="flex flex-col justify-center  items-center  ">
      <Header />
      <div className="flex gap-10 mt-[-7rem] mb-10">
        <div className="w-72 h-40 rounded-xl bg-purple-600 grid text-white">
          <div className="flex justify-between m-5">
            <strong>Receita</strong>
            <div>
              <FiArrowUpCircle size={32} />
            </div>
          </div>
          <span className="ml-5  text-3xl">R$ 3.000,00</span>
        </div>
        <div className="w-72 h-40 rounded-xl bg-purple-600 grid text-white ">
          <div className="flex justify-between m-5">
            <strong>Despesa</strong>
            <div>
              <FiArrowDownCircle size={32} />
            </div>
          </div>
          <span className="ml-5  text-3xl">R$ 3.000,00</span>
        </div>
        <div className="w-72 h-40 rounded-xl bg-purple-600 grid text-white ">
          <div className="flex justify-between m-5">
            <strong>Balanço geral</strong>
            <div>
              <IoWalletOutline size={32} />
            </div>
          </div>
          <span className="ml-5 text-3xl">R$ 3.000,00</span>
        </div>
      </div>
      <button className="flex gap-1 items-center border-purple-700 border-2 rounded-lg p-3 text-purple-700 font-medium hover:text-white hover:border-purple-200 transition-all duration-500 ease-in-out hover:bg-purple-600">
        Nova transação
        <MdOutlineAddCircleOutline size={24} />
      </button>
      <TablePrice />
    </div>
  );
}

export default App;
