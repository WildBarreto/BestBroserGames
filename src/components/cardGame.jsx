import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
//import Jogo1 from "../assets/reddead.png";

export function CardGame() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/games")
      .then((response) => response.json())
      .then(setData);
  }, []);

  if (!data || !data.length) return null;

  return (
    <div className="flex flex-row ">
      {data.map((item) => {
        const { id, title, thumbnail, genre } = item;
        return (
          <div
            key={id}
            className=" items-start  size-60 rounded-md mx-2 mb-6 bg-secundary  cursor-pointer  "
          >
            <div className="h-[70%] ">
              <img
                src={thumbnail}
                alt=""
                className=" h-full object-cover  rounded-t-md  "
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-slate-50  ml-2 mt-2 text-md font-semibold">
                {title}
              </h1>
              <div className="flex flex-wrap justify-between">
                <h2 className="text-slate-50 ml-2 mt-2 text-sm">{genre}</h2>
                <div className="flex">
                  <span className="text-slate-50 mt-2 mr-1 text-1xl font-semibold">
                    5
                  </span>
                  <FaStar className="text-yellow-300 mt-3 mr-3 size-3.5" />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
