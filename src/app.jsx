import "./app.css";
import { CardGame } from "./components/cardGame";
import { SearchBar } from './components/searchBar';

function App() {
  return (
    <>
    <SearchBar/>
      
      <div className="mt-44">
        <h1 className="text-slate-50 ml-32  relative text-3xl">
          Bem-vindo à <span className="text-primary">Best Browser Games</span> a
          estrela-guia do seu mundo dos jogos
        </h1>
      </div>
      <CardGame />
      <CardGame />
      <CardGame />
      <CardGame /> <CardGame />
      <CardGame />
      <CardGame />
      
    </>
  );
}

export default App;
