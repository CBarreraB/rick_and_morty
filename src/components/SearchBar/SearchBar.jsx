import { useState } from "react";
import styled from "./SearchBar.module.css";

export default function SearchBar(props) {
  const [id, setId] = useState(" ");

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      props.onSearch(id);
    }
  };

  const handleChange = (event) => {
    setId(event.target.velue);
  };

  return (
    <div className={styled.bar}>
      <input
        type="search"
        placeholder="Search..."
        name="search"
        id="search"
        className={styled.searchInput}
        omKeyUp={handleEnter}
        onChange={handleChange}
        value={id}
      />
      <button
        className={styled.searchButton}
        onClick={() => props.onSearch(id)}>
        Add
      </button>
    </div>
  );
}
