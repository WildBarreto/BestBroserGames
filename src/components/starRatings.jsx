import PropTypes from "prop-types";
import { useState } from "react";
import { FaStar } from "react-icons/fa6";

export function StarRatings({ onRatingChange, ratingGame }) {
  const [rating, setRating] = useState(ratingGame);

  const handleStarClick = async (index) => {
    const newRating = index + 1;
    setRating(newRating);
    onRatingChange(newRating); // Chama a função de retorno de chamada
  };

  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          className={`h-6 w-6 cursor-pointer ${
            index < rating ? "text-yellow-500" : "text-gray-400"
          }`}
          onClick={() => handleStarClick(index)}
        />
      ))}
    </div>
  );
}

StarRatings.propTypes = {
  onRatingChange: PropTypes.func.isRequired,
  ratingGame: PropTypes.func.isRequired,
};
