import { CardGame } from "./cardGame";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export function Carrossel() {
  return (
    <>
      <buttoon className="cursor-pointer absolute top-1/2 mt-32 left-20 z-10">
        <FaChevronLeft className="size-7 text-slate-500" />
      </buttoon>
      <buttoon className="cursor-pointer absolute top-1/2 mt-32 right-20 z-10">
        <FaChevronRight className="size-7  text-slate-500" />
      </buttoon>
      <div className="flex overflow-x-auto scroll-smooth w-[80%] mx-auto">
        <CardGame />
        <CardGame />
        <CardGame />
        <CardGame />
        <CardGame />
        <CardGame />
        <CardGame />
        <CardGame />
        <CardGame />
        <CardGame />
        <CardGame />
        <CardGame />
        <CardGame />
        <CardGame />
      </div>
    </>
  );
}
