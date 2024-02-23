import { useEffect, useState } from "react";
import Logo from "../assets/vscode-icons_file-type-gamemaker.svg";

import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { CardGame } from "./cardGame";

export function SearchBar() {
  const [termoBusca, setTermoBusca] = useState("");
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    if (termoBusca.trim() !== "") {
      // Aqui você precisará substituir a URL pela sua própria URL da API
      const url = `http://localhost:3000/games`;

      // Envie a requisição usando fetch
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          // Filtra os resultados com base no termo de busca
          const resultadosFiltrados = data.filter((jogo) =>
            jogo.title.toLowerCase().includes(termoBusca.toLowerCase())
          );
          // Atualize os resultados da busca
          setResultados(resultadosFiltrados);
        })
        .catch((error) => {
          console.error("Erro ao buscar dados:", error);
          setResultados([]); // Limpe os resultados em caso de erro
        });
    } else {
      // Se o termo de busca estiver vazio, limpe os resultados
      setResultados([]);
    }
  }, [termoBusca]);

  function hanResultados (){
    return(
      setResultados([])
    )
  }

  return (
    <>
      <div className="mx-auto  flex flex-row h-20 w-full items-center bg-slate-900 fixed z-50 top-0">
        <Link to="/">
          {" "}
          <img src={Logo} alt="Logo" className="ml-6" />
        </Link>
        <form
          action=""
          className="w-[70%] mx-auto flex  items-center bg-slate-900"
        >
          <input
            type="text"
            value={termoBusca}
            placeholder="Encontre um jogo"
            onChange={(e) => setTermoBusca(e.target.value)}
            className="w-[60%] ml-auto text-lg h-10 bg-slate-800 font-semibold  px-2 py-1 outline-none tracking-tight rounded-l-md "
          />

          <button className=" bg-slate-800 mr-auto h-10 rounded-r-md ">
            <IoMdSearch className=" size-9 mx-0 hover:bg-lime-300 hover:rounded-lg hover:text-slate-600" />
          </button>
        </form>
        <button className="bg-primary rounded-md mr-10 w-20 h-9 text-slate-800 font-semibold hover:bg-lime-500 ">
          <Link to="/cadastro">Login</Link>
        </button>
      </div>
      <div className="w-full h-2 bg-primary  fixed z-50 top-20" />
      <div className="bg-slate-900  w-full flex flex-col  items-center   absolute zinde z-50">
        {resultados.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {resultados.map((resultado) => (
              <Link to={`/game/${resultado.id}`} key={resultado.id} onClick={ hanResultados}>
                <CardGame dataCard={resultado} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
