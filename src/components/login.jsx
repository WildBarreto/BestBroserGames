export function Login() {
  return (
    <form action="" className="w-full">
      <label htmlFor="" className="flex flex-col w-full font-semibold">
        Nome completo:
        <input
          type="text"
          className="w-full mt-2 text-lg h-10 bg-slate-700 font-semibold  px-2 py-1  rounded-md "
        />
      </label>
      <label htmlFor="" className="flex my-2 flex-col w-full font-semibold">
        Email:
        <input
          type="email"
          className="w-full mt-2 text-lg h-10 bg-slate-700 font-semibold  px-2 py-1  rounded-md "
        />
      </label>

      <button className="w-full h-9 mt-3 bg-primary rounded-md  text-slate-800 font-semibold hover:bg-lime-500 ">
        Entrar
      </button>
    </form>
  );
}
