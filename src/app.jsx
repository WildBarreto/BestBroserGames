import "./app.css";
import { SearchBar } from "./components/searchBar";

function App() {
  return (
    <div className="bg-slate-900">
      <SearchBar />
      <div className="w-full h-2 bg-lime-300" />
    </div>
  );
}

export default App;
