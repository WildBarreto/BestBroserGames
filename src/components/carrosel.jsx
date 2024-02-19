import { useRef } from "react";
import { CardGame } from "./cardGame";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export function Carrossel() {
  const carousel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    console.log(carousel.current.offsetWidth)
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <>
      <h2 className="ml-32 mt-10 text-2xl">Recomendações</h2>
      <div className="ml-32 w-24 h-1 bg-yellow-300 mb-10" />
      <buttoon
        onClick={handleLeftClick}
        className="cursor-pointer absolute  mt-32 left-20 z-10"
      >
        <FaChevronLeft className="size-7 text-slate-500" />
      </buttoon>
      <buttoon
        onClick={handleRightClick}
        className="cursor-pointer absolute  mt-32 right-20 z-10"
      >
        <FaChevronRight className="size-7  text-slate-500" />
      </buttoon>
      <div
        ref={carousel}
        className="flex overflow-x-hidden scroll-smooth w-[80%] mx-auto"
      >
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
