import style from "./Card.module.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";

function Card(props) {
  const {
    id,
    name,
    gender,
    species,
    image,
    status,
    origin,
    onClose,
    addFav,
    removeFav,
    myFavorites,
  } = props;

  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    myFavorites?.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites, props.id]);

  const handleFavorite = () => {
    // isFav ? removeFav(id) : addFav(props);
    // setIsFav(!isFav)
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav(props);
    }
  };

  return (
    <div className={style.container}>
      <img
        src={image}
        alt="Character"
        className={style.imagenId}
        title="Open Image"
      />
      <div>
        <Link to={`/detail/${id}`}>
          <h2>{name}</h2>
        </Link>
        <h2 title="Species">{species}</h2>
        <h2 title="Gender">{gender}</h2>
        <h2>{status}</h2>
        <h2>{origin.name}</h2>
      </div>
      {isFav ? (
        <button onClick={handleFavorite}>❤️ </button>
      ) : (
        <button onClick={handleFavorite}>🤍 </button>
      )}
      <button onClick={() => onClose(id)} className={style.closeButton}>
        X
      </button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
