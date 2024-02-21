import { useRef } from "react";
import { CardGame } from "./cardGame";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export function Carrossel() {
  const carousel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    console.log(carousel.current.offsetWidth);
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
      <button
        onClick={handleLeftClick}
        className="cursor-pointer absolute  mt-32 left-20 z-10"
      >
        <FaChevronLeft className="size-7 text-slate-500" />
      </button>
      <button
        onClick={handleRightClick}
        className="cursor-pointer absolute  mt-32 right-20 z-10"
      >
        <FaChevronRight className="size-7  text-slate-500" />
      </button>
      <div
        ref={carousel}
        className="flex overflow-x-hidden overflow-y-hidden scroll-smooth w-[80%] mx-auto "
        style={{ scrollSnapType: "x mandatory" }}
      >
        <Link to="game">
          <CardGame />
        </Link>
      </div>
    </>
  );
}
