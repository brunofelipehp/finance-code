import { z } from "zod";
import useModalStore from "../store/modalStore";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function FormTransition() {
  const toggleModal = useModalStore((state) => state.toggleModal);

  const transitionSchema = z.object({
    description: z.string(),
    price: z.coerce.number(),
    date: z.string().date(),
  });

  type TransitionSchema = z.infer<typeof transitionSchema>;

  const { register, handleSubmit } = useForm<TransitionSchema>({
    resolver: zodResolver(transitionSchema),
  });

  const handleForm = (data: TransitionSchema) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleForm)} className="grid gap-5 mt-8">
      <label>
        <input
          type="text"
          placeholder="Descrição"
          className="bg-white w-[30rem] h-10 rounded-sm ml-3 outline-purple-700 p-2 border border-zinc-500"
          {...register("description")}
        />
      </label>

      <label htmlFor="">
        <input
          type="number"
          placeholder="Preço"
          className="bg-white w-[30rem] h-10 rounded-sm ml-3 outline-purple-700 p-2  border border-zinc-500"
          {...register("price")}
        />
      </label>

      <label htmlFor="">
        <input
          type="date"
          className="bg-white w-[30rem] h-10 rounded-sm ml-3 outline-purple-700 p-2  border border-zinc-500"
          {...register("date")}
        />
      </label>

      <div className="flex gap-3 justify-end">
        <button
          className="border-2 border-red-400 text-red-400 p-3 w-28 h-10 flex justify-center hover:bg-red-500 hover:text-white transition-all ease-in-out duration-300 items-center rounded-lg"
          onClick={toggleModal}
        >
          Cancelar
        </button>

        <button
          type="submit"
          className="border-2  text-white bg-green-700 hover:bg-green-500 transition-all ease-in-out duration-300  p-3 w-28 h-10 flex justify-center items-center rounded-lg"
        >
          Salvar
        </button>
      </div>
    </form>
  );
}
