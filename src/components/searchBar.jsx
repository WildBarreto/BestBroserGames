import Lupa from "../assets/ic_outline-search.svg";
import Logo from "../assets/vscode-icons_file-type-gamemaker.svg";

export function SearchBar() {
  return (
    <>
      <div className="mx-auto  flex flex-row h-20 w-full items-center bg-slate-900 fixed z-50 top-0">
        <img src={Logo} alt="Logo" className="ml-6" />
        <form
          action=""
          className="w-[70%] mx-auto flex  items-center bg-slate-900"
        >
          <input
            type="text"
            name=""
            placeholder="Encontre um jogo"
            id=""
            className="w-[60%] ml-auto text-1xl bg-slate-50 font-semibold  px-2 py-1 outline-none tracking-tight rounded-l-md "
          />
          <button className="bg-slate-50 mr-auto h-8 rounded-r-md ">
            <img
              src={Lupa}
              alt=""
              className="size-8 mx-0 hover:bg-lime-300 rounded-lg"
            />
          </button>
        </form>
        <button className="bg-primary rounded-md mr-10 w-20 h-8 text- font-semibold hover:bg-lime-500">
          Login
        </button>
      </div>
      <div className="w-full h-2 bg-primary  fixed z-50 top-20" />
    </>
  );
}
