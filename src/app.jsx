import "./app.css";
import { Carrossel } from "./components/carrosel";
import { SearchBar } from "./components/searchBar";

function App() {
  return (
    <>
      <SearchBar />
      <div className="mt-32 mb-16 flex justify-center ">
        <h1 className="ml-32 text-2xl">
          Bem-vindo à <span className="text-primary">Best Browser Games</span> a
          estrela-guia do seu mundo dos jogos
        </h1>
      </div>

      <h2 className="ml-32 text-2xl">Recomendações</h2>
      <div className="ml-32 w-24 h-1 bg-yellow-300 mb-10" />

      <Carrossel />
    </>
  );
}

export default App;
