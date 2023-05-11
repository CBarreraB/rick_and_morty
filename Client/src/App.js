import "./App.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import Detail from "./components/Detail/Detail";
import About from "./components/About/About";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";

function App() {
  let [characters, setCharacters] = useState([]);

  const [access, setAccess] = useState(false);
  const EMAIL = "carbar@gmail.com";
  const PASSWORD = "1234cab";

  const { pathname } = useLocation();
  const navigate = useNavigate();

  function onSearch(id) {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        const char = characters?.find((e) => e.id === data.id);
        if (char) {
          alert("Already in the list");
        } else if (data.id !== undefined) {
          setCharacters((characters) => [...characters, data]);
        } else {
          alert("Character not found");
        }
      }
    );
  }

  // const onSearch = (id) => {
  //   const URL_BASE = "https://localhost:3001/rickandmorty";
  // };
  // if (characters.find((char) => char.id === id)) {
  //   return alert("Already in the list");
  // }

  // fetch(`${URL_BASE}/character/${id}`)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     if (data.name) {
  //       setCharacters((oldChars) => [...oldChars, data]);
  //     } else {
  //       alert("Character not found");
  //     }
  //   });

  const login = (userData) => {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  //function onClose(id) {
  const onClose = (id) => {
    setCharacters(
      characters.filter((character) => character.id !== Number(id))
    );
  };

  return (
    <div className="container">
      {pathname !== "/" && <Nav onSearch={onSearch} setAccess={setAccess} />}

      <Routes>
        <Route path="/" element={<Form login={login} />} />

        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />

        <Route path="/about" element={<About />} />

        <Route path="/detail/:id" element={<Detail />} />

        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}
export default App;
