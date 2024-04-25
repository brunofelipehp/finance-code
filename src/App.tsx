import TablePrice from "./components/TablePrice";
import Header from "./components/Header";
import ButtonTransition from "./components/ButtonTransition";
import Cards from "./components/Cards";
import Modal from "./components/Modal";

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <Modal />
      <Cards />
      <ButtonTransition />

      <TablePrice />
    </div>
  );
}

export default App;
