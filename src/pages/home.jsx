import "../styles/app.css";
//import { PageGame } from "./components/pageGame";
//import { Cadastro } from "./pages/cadastro";
import { Carrossel } from "../components/carrosel";
import { SearchBar } from "../components/searchBar";

export default function Home() {
  return (
    <>
      {/*<Cadastro/>*/}

      <SearchBar />
      {/*<PageGame/>*/}
      <div className="mt-32 mb-12 flex justify-center ">
        <h1 className="mx-auto text-2xl">
          Bem-vindo à <span className="text-primary">Best Browser Games</span> a
          estrela-guia do seu mundo dos jogos.
        </h1>
      </div>

      <Carrossel />
      <Carrossel />
      <Carrossel />
    </>
  );
}
