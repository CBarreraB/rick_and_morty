import Card from "../Card/Card.jsx";
import styled from "styled-components";
import { CardsContainer } from "./styledComponents.js";

export default function Cards({ characters, onClose }) {
  return (
    <CardsContainer className={styled.div}>
      {characters?.map(
        ({ id, name, species, gender, origin, status, image }) => {
          return (
            <Card
              key={id}
              id={id}
              name={name}
              species={species}
              origin={origin}
              gender={gender}
              image={image}
              status={status}
              onClose={onClose}
            />
          );
        }
      )}
    </CardsContainer>
  );
}
