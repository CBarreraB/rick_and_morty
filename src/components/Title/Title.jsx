import styled from "./Title.module.css";
import imageLogo from "../../assests/image/logoNav.png";

const Title = () => {
  return (
    <div>
      <img src={imageLogo} alt="logo rick and morty" className={styled.img} />
    </div>
  );
};
export default Title;
