/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { SearchBar } from "./searchBar";

import { useParams } from "react-router-dom";
import { StarRatings } from "./starRatings";

export function PageGame() {
  const botaoSobreRef = useRef(null);
  const [gameData, setGameData] = useState(null);
  const [rating, setRating] = useState(0);

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
              className="bg-slate-800 w-60 mr-2 rounded-md focus:text-primary"
            >
              Sobre
            </button>
            <button className="bg-slate-800  w-60 rounded-md focus:text-primary">
              Avaliações
            </button>
          </div>

          <div className="flex mt-6">
            <h2 className="ml-6 text-md font-semibold">Genero:</h2>
            <p className="ml-3 text-primary">{gameData.genre}</p>
          </div>
          <h2 className="ml-6 mt-6 text-md font-semibold">Descrição:</h2>
          <p className="ml-6 w-[35rem] text-justify">
            {gameData.short_description}
          </p>
        </div>
        
        <div className=" mr-0   w-[30%]">
          <div className="flex flex-col rounded-full size-44 ml bg-slate-700 m-auto  font-semibold border-solid border-8 border-lime-400">
            <h1 className=" text-4xl mx-auto mt-auto">100%</h1>
            <h2 className="text-lime-400 mx-auto mb-auto">Ótimo</h2>
          </div>
          <h1 className="mt-10 mx-auto text-xl w-64 ">
            Como você avalia este jogo?
          </h1>
          <div className="flex justify-center m-auto   w-60">
            <StarRatings onRatingChange={handleRatingChange} ratingGame={rating}/>
          </div>
        </div>
      </div>
    </>
  );
}

/*PageGame.propTypes = {
  id: PropTypes.string.isRequired,
};*/
