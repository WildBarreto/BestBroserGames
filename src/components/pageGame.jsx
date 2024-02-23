/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { SearchBar } from "./searchBar";

import { useParams } from "react-router-dom";
import { Coments } from "./coments";
import { Description } from "./description";
import { StarRatings } from "./starRatings";
import { StatusRating } from "./statusRating";

export function PageGame() {
  const botaoSobreRef = useRef(null);
  const [gameData, setGameData] = useState(null);
  const [rating, setRating] = useState(0);
  const [showDescription, setShowDescription] = useState(true);
  const [showComents, setShowComents] = useState(false);

  const { id } = useParams();

  // Carregar o rating do Local Storage quando o componente for montado
  useEffect(() => {
    const storedRating = localStorage.getItem(`gameRating_${id}`);
    if (storedRating) {
      setRating(parseInt(storedRating));
    }
  }, [id]);

  useEffect(() => {
    fetch(`http://localhost:3000/games/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setGameData(data);
      });
  }, [id]);

  if (!gameData) {
    return <div>Carregando...</div>;
  }

  const handleRatingChange = (newRating) => {
    setRating(newRating);
    // Salvar o novo rating no Local Storage
    localStorage.setItem(`gameRating_${id}`, newRating.toString());
    console.log(newRating);
  };

  const handleShowDescription = () => {
    setShowDescription(true);
    setShowComents(false);
  };

  const handleShowComents = () => {
    setShowDescription(false);
    setShowComents(true);
  };

  return (
    <>
      <SearchBar />
      <div className="flex flex-row h-full  w-full pl-20 pb-8 mt-32 justify-between ">
        <div className="h-full  rounded-md">
          <img
            src={gameData.thumbnail}
            alt=""
            className="h-60 w-78 rounded-md"
          />
          <button className="bg-primary w-full h-10 mt-5 rounded-md text-slate-800 font-semibold">
            Avaliar
          </button>
        </div>
        <div className="  w-[50%]">
          <h1 className="ml-6 text-3xl font-semibold">{gameData.title}</h1>
          <h2 className="ml-6 mt-6 text-md font-semibold">
            {gameData.developer}
          </h2>

          <div className="flex flex-row mt-5 ml-6  w-[93%]">
            <button
              ref={botaoSobreRef}
              onClick={handleShowDescription}
              className="bg-slate-800 w-60 mr-2 rounded-md focus:text-primary"
            >
              Sobre
            </button>
            <button
              onClick={handleShowComents}
              className="bg-slate-800  w-60 rounded-md focus:text-primary"
            >
              Avaliações
            </button>
          </div>
          {showDescription && (
            <Description
              genre={gameData.genre}
              description={gameData.short_description}
            />
          )}
          {showComents && <Coments />}
        </div>

        <div className=" mr-0  bg-bl  w-[30%]">
          {
            rating === 0 ? (
              <StatusRating
                textColor="text-slate-400"
                borderColor="border-slate-400 "
                ratingGame={rating}
                status={"..."}
              />
            ) : rating === 1 ? (
              <StatusRating
                textColor="text-red-600"
                borderColor="border-red-600 "
                ratingGame={rating}
                status={"Péssimo"}
              />
            ) : rating === 2 ? (
              <StatusRating
                textColor=" text-red-600"
                borderColor="border-red-600"
                ratingGame={rating}
                status={"Ruim"}
              />
            ) : rating === 3 ? (
              <StatusRating
                textColor="text-yellow-500"
                borderColor="border-yellow-500 "
                ratingGame={rating}
                status={"Mediano"}
              />
            ) : rating === 4 ? (
              <StatusRating
                textColor="text-blue-300"
                borderColor="border-blue-300 "
                ratingGame={rating}
                status={"Bom"}
              />
            ) : (
              <StatusRating
                textColor="text-lime-400"
                borderColor="border-lime-400 "
                ratingGame={rating}
                status={"Ótimo"}
              />
            ) // para rating === 5
          }

          <h1 className="mt-10 mx-auto text-xl w-64 ">
            Como você avalia este jogo?
          </h1>
          <div className="flex justify-center m-auto   w-60">
            <StarRatings
              onRatingChange={handleRatingChange}
              ratingGame={rating}
            />
          </div>
        </div>
      </div>
    </>
  );
}
