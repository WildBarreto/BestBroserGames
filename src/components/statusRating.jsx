import PropTypes from 'prop-types';

export function StatusRating({ textColor, borderColor, ratingGame, status }) {
  const percent = ratingGame * 20;
  return (
    <>
      <div
        className={`flex flex-col rounded-full size-44 ml bg-slate-700 m-auto  font-semibold border-solid border-8 ${borderColor}`}
      >
        <h1 className="text-4xl mx-auto mt-auto">{percent}%</h1>
        <h2 className={`text-lime-400 mx-auto mb-auto ${textColor}`}>
          {status}
        </h2>
      </div>
    </>
  );
}
StatusRating.propTypes = {
  textColor: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
  ratingGame: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
};