//import Lupa from "../assets/ic_outline-search.svg";
import Logo from "../assets/vscode-icons_file-type-gamemaker.svg";

import { IoMdSearch } from "react-icons/io";

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
            className="w-[60%] ml-auto text-lg h-10 bg-slate-800 font-semibold  px-2 py-1 outline-none tracking-tight rounded-l-md "
          />
          <button className=" bg-slate-800 mr-auto h-10 rounded-r-md ">
            <IoMdSearch className=" size-9 mx-0 hover:bg-lime-300 hover:rounded-lg hover:text-slate-600" />
          </button>
        </form>
        <button className="bg-primary rounded-md mr-10 w-20 h-9 text-slate-800 font-semibold hover:bg-lime-500 ">
          Login
        </button>
      </div>
      <div className="w-full h-2 bg-primary  fixed z-50 top-20" />
    </>
  );
}
