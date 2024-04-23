import { FiArrowDownCircle, FiArrowUpCircle } from "react-icons/fi";
import TablePrice from "./components/TablePrice";
import { IoWalletOutline } from "react-icons/io5";

function App() {
  return (
    <div className="flex flex-col justify-center mt-20 items-center gap-28">
      <div className="flex gap-10 ">
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
      <TablePrice />
    </div>
  );
}

export default App;
