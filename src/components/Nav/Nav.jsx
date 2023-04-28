import React from "react";
import styled from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar";
import imageLogo from "../../assests/image/logoNav.png";

const Nav = (props) => {
  const { onSearch } = props;

  return (
    <div className={styled.nav}>
      <img src={imageLogo} alt="logo rick and morty" className={styled.img} />

      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default Nav;
