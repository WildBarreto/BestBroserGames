import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa6";

export function CardGame({dataCard}) {
  // Acessar o rating armazenado no Local Storage
  const storedRating = localStorage.getItem(`gameRating_${dataCard.id}`);
  const rating = storedRating ? parseInt(storedRating) : 0;

  return (
    <div className="flex flex-row">
     {console.log(dataCard)}
        <div
          key={dataCard.id}
          className="items-start size-60 rounded-md mx-2 mb-6 bg-secundary cursor-pointer"
        >
          <div className="h-[70%]">
            <img
              src={dataCard.thumbnail}
              alt=""
              className="h-full object-cover rounded-t-md"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-slate-50 ml-2 mt-2 text-md font-semibold">
              {dataCard.title}
            </h1>
            <div className="flex flex-wrap justify-between">
              <h2 className="text-slate-50 ml-2 mt-2 text-sm">{dataCard.genre}</h2>
              <div className="flex">
                <span className="text-slate-50 mt-2 mr-1 text-1xl font-semibold">
                 {rating}
                </span>
                {rating === 0 ? <FaStar className="mt-3 mr-3 size-3.5" /> : <FaStar className="mt-3 text-yellow-300 mr-3 size-3.5" />}
                
              </div>
            </div>
          </div>
        </div>
       
    </div>
  );
}

CardGame.propTypes = {
  dataCard: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
    })
  ).isRequired,
};
