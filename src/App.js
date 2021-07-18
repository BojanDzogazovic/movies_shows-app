import { Header } from "./components/Header";
import { Toggler } from "./components/Toggler";
import { SearchBar } from "./components/SearchBar";
import { ItemsList } from "./components/ItemsList";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <SearchBar />
        <Toggler />
        <ItemsList />
      </div>
    </div>
  );
};
