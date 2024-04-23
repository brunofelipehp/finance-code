const TablePrice = () => {
  return (
    <div>
      <table className="table-auto rounded-lg   w-[50rem] border-separate border-spacing-2 border">
        <thead className=" ">
          <tr className="flex justify-between p-2  rounded-3xl">
            <th>Descrição</th>
            <th>Valor</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody className="">
          <tr className="flex justify-between  p-3  rounded-lg m-3 bg-slate-200">
            <td>Salario</td>
            <td>R$ 3.000,00</td>
            <td>05/04/2024</td>
          </tr>
          <tr className="flex  justify-between p-2 rounded-lg m-3 bg-slate-200">
            <td>Salario</td>
            <td>R$ 3.000,00</td>
            <td>05/04/2024</td>
          </tr>
          <tr className="flex  justify-between  p-2  rounded-lg m-3 bg-slate-200">
            <td>Salario</td>
            <td>R$ 3.000,00</td>
            <td>05/04/2024</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TablePrice;
