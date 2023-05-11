import React from "react";
import styled from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar.jsx";
import { Link } from "react-router-dom";

const Nav = (props) => {
  const { onSearch, setAccess } = props;

  const handleLogOut = () => {
    setAccess(false);
  };
  return (
    <div className={styled.nav}>
      <SearchBar onSearch={onSearch} />
      <Link to="/about">
        <button className={styled.btn}>About</button>
      </Link>

      <Link to="/home">
        <button className={styled.btn}>Home</button>
      </Link>

      <Link to="/favorites">
        <button className={styled.btn}>Favorites</button>
      </Link>

      <button onClick={handleLogOut} className={styled.btn}>
        LOG OUT
      </button>
    </div>
  );
};

export default Nav;
