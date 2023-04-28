// import React, { useState } from "react";
import style from "./Card.module.css";

export default function Card({
  id,
  name,
  species,
  gender,
  origin,
  status,
  image,
  onClose,
}) {
  return (
    <div className={style.container}>
      <img
        src={image}
        alt="Character"
        className={style.imagenId}
        title="Open Image"
      />
      <div>
        <h2 title="Name">{name}</h2>
        <h2 title="Species">{species}</h2>
        <h2 title="Gender">{gender}</h2>
      </div>
      <button onClick={() => onClose(id)} className={style.closeButton}>
        X
      </button>
    </div>
  );
}
