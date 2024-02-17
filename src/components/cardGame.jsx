import { FaStar } from "react-icons/fa6";
import Jogo1 from "../assets/reddead.png";

export function CardGame() {
  return (
    <div className="flex flex-col items-start flex-none w-44 h-[19rem] rounded-md mx-2 mb-6 bg-secundary  cursor-pointer  ">
      <img src={Jogo1} alt="" className="w-52 h-60 rounded-t-md" />
      <div className="flex flex-wrap">
        <h1 className="text-slate-50 ml-2 mt-2 text-sm font-semibold">
          Red Dead Redemption 
        </h1>
        <h2 className="text-slate-50 ml-2 mt-2 text-sm">Shooter</h2>
        <span className="text-slate-50 mt-2 ml-20 text-1xl font-semibold">6</span>
        <FaStar className="text-yellow-300 mt-3 ml-1 size-3.5" />
      </div>
    </div>
  );
}
