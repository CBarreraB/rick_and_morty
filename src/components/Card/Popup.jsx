import React, { useEffect, useRef } from "react";
import style from "./Popup.module.css";

export default function Popup({ image, onClose }) {
  const popupRef = useRef(null);

  useEffect(() => {
    const handleMouseOut = (event) => {
      if (!popupRef.current.contains(event.relatedTarget)) {
        onClose();
      }
    };

    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [onClose]);

  return (
    <div className={style.popupContainer} ref={popupRef}>
      <img src={image} alt="Character" className={style.popupImage} />
    </div>
  );
}
