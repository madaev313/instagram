import React from "react";
import "./modal.css";
import arrow from "../Assets/Arrow 1.svg";
import { useSelector } from "react-redux";
import smiley from "../Assets/vect.svg";

const Modal = ({ active, setActive }) => {
  const profile = useSelector((state) => state.profile);
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
        <div className="modal_header">
          <img src={arrow} alt="" />
          <div>
            <h4>Создание публикации</h4>
          </div>
          <div>Поделиться</div>
        </div>
        <div className="modal_profile">
          <img src={profile.profile_img} alt="" />
          <div className="username">{profile.username}</div>
        </div>
        <div className="input_text">
          <textarea placeholder="Добавьте подпись..." />
        </div>
        <div className="modal_smiley">
          <img src={smiley} alt="" />
        </div>
        <div className="url_text">
          <input placeholder="Введите URL картинки" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
