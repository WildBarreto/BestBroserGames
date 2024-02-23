import { StarRatings } from "./starRatings";

export function Coments() {
  return (
    <div>
      <textarea
        className="ml-7  mt-2 w-[30rem] rounded-md text-lg h-40 bg-slate-800 font-semibold  px-2 py-1 outline-none tracking-tight rounded-l-md "
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Faça um comentario sobre o jogo"
      />
      <div>
        <ul>
          <li className="ml-7  mt-2 w-[30rem] rounded-md text-lg h-40 bg-slate-800   px-2 py-1 outline-none tracking-tight rounded-l-md ">
            <div className="flex">
              <h1 className="font-semibold mr-2">Fulano</h1>
              <StarRatings  className="size-10"/>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              blanditiis facere repudiandae repellat consectetur mollitia,
              aperiam deserunt aut laboriosam adipisci ea molestiae iste libero,
              sapiente quia error nam ipsa fugit?
            </p>
          </li>
          <li className="ml-7  mt-2 w-[30rem] rounded-md text-lg h-40 bg-slate-800 font-semibold  px-2 py-1 outline-none tracking-tight rounded-l-md ">
            <h1>Fulano</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              blanditiis facere repudiandae repellat consectetur mollitia,
              aperiam deserunt aut laboriosam adipisci ea molestiae iste libero,
              sapiente quia error nam ipsa fugit?
            </p>
          </li>
          <li className="ml-7  mt-2 w-[30rem] rounded-md text-lg h-40 bg-slate-800 font-semibold  px-2 py-1 outline-none tracking-tight rounded-l-md ">
            <h1>Fulano</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              blanditiis facere repudiandae repellat consectetur mollitia,
              aperiam deserunt aut laboriosam adipisci ea molestiae iste libero,
              sapiente quia error nam ipsa fugit?
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
