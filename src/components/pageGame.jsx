import { FaStar } from "react-icons/fa6";
import game1 from "../assets/reddead.png";

export function PageGame() {
  return (
    <div className="flex flex-row h-full  w-full pl-20 pb-8 mt-32 justify-between ">
      <div className="h-full  ">
        <img src={game1} alt="" className=" " />
        <button className="bg-primary w-full h-10 mt-5 rounded-md text-slate-800 font-semibold">
          Avaliar
        </button>
      </div>
      <div className="  w-[50%]">
        <h1 className="ml-6 text-3xl font-semibold">Red Dead Redeption 2</h1>
        <h2 className="ml-6 mt-6 text-md font-semibold">Rockstar Games</h2>

        <div className="flex flex-row mt-5 ml-6  w-[93%]">
          <button className="bg-slate-800 w-96 mr-2 rounded-md focus:text-primary">
            Sobre
          </button>
          <button className="bg-slate-800  w-96 rounded-md focus:text-primary">
            Avaliações
          </button>
        </div>

        <div className="flex mt-6">
          <h2 className="ml-6 text-md font-semibold">Genero:</h2>
          <p className="ml-3 text-primary">
            Aventura, Role-Playing(RPG), Shooter
          </p>
        </div>
        <h2 className="ml-6 mt-6 text-md font-semibold">Descrição:</h2>
        <p className="ml-6 text-justify">
          Red Dead Redemption 2 is the epic tale of outlaw Arthur Morgan and the
          infamous Van der Linde gang, on the run across America at the dawn of
          the modern age. Red Dead Redemption 2 is the epic tale of outlaw Arthur Morgan and the
          infamous Van der Linde gang, on the run across America at the dawn of
          the modern age.
          Red Dead Redemption 2 is the epic tale of outlaw Arthur Morgan and the
          infamous Van der Linde gang, on the run across America at the dawn of
          the modern age.
          Red Dead Redemption 2 is the epic tale of outlaw Arthur Morgan and the
          infamous Van der Linde gang, on the run across America at the dawn of
          the modern age.
        </p>
      </div>
      <div className=" mr-0   w-[30%]">
        <div className="flex flex-col rounded-full size-44 ml bg-slate-700 m-auto  font-semibold border-solid border-8 border-lime-400">
          <h1 className=" text-4xl mx-auto mt-auto">100%</h1>
          <h2 className="text-lime-400 mx-auto mb-auto">Ótimo</h2>
        </div>
        <h1 className="mt-10 ml-16 text-xl">Como você avalia este jogo?</h1>

        <div className="flex m-auto  w-36">
          <FaStar className="text-yellow-300 mt-3 ml-1 size-6" />
          <FaStar className="text-yellow-300 mt-3 ml-1 size-6" />
          <FaStar className="text-yellow-300 mt-3 ml-1 size-6" />
          <FaStar className="text-yellow-300 mt-3 ml-1 size-6" />
          <FaStar className="text-yellow-300 mt-3 ml-1 size-6" />
        </div>
      </div>
    </div>
  );
}
