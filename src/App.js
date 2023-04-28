import { useState } from "react";
import axios from "axios";
import "./App.module.css";
// import style from "./App.module.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";

function App() {
  let [characters, setCharacters] = useState([]);

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (!data.name) {
          alert("¡No hay personajes con este ID!");
          // setCharacters((oldChars) => [...oldChars, data]);
        } else {
          setCharacters((characters) => [...characters, data]);
        }
      }
    );
  }

  const onClose = (id) => {
    setCharacters(
      characters.filter((character) => character.id !== Number(id))
    );
  };

  return (
    <div className="container">
      <div>
        <Nav onSearch={onSearch} />
      </div>
      <div>
        <Cards characters={characters} onClose={onClose} />
      </div>
    </div>
  );
}

export default App;
// {/* style={{ padding: "10px" }} */ }
// {/* className={style.nav} */ }
