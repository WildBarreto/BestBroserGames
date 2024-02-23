/* eslint-disable react/prop-types */
export function Description({genre, description}) {
  return (
    <>
      <div className="flex mt-6">
        <h2 className="ml-6 text-md font-semibold">Genero:</h2>
        <p className="ml-3 text-primary">{genre}</p>
      </div>
      <h2 className="ml-6 mt-6 text-md font-semibold">Descrição:</h2>
      <p className="ml-6 w-[35rem] text-justify">
        {description}
      </p>
    </>
  );
}
