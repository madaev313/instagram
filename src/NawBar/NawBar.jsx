import React, { useState } from "react";
import "./nawBar.css";
import insta from "../Assets/LOGO.svg";
import Vector from "../Assets/Vector (1).svg";
import logo2 from "../Assets/msg (1).svg";
import logo3 from "../Assets/add.svg";
import logo4 from "../Assets/trends (1).svg";
import logo5 from "../Assets/likes (2).svg";
import Modal from "../Modal/Modal";

const NawBar = () => {
  const [modalActive, setModalActive] = useState(false)
  return (
    <div className="header" >
      <div className="naw_bar" >
        <img className="number_one" src={insta} alt="" />
        <input placeholder="Search"/>
        <div className="header-icons" >
          <img src={Vector} alt="" />
          <img src={logo2} alt="" />
          <img onClick={() => setModalActive(!modalActive)} src={logo3} alt="" />
          <img src={logo4} alt="" />
          <img src={logo5} alt="" />
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive}/>
    </div>
  );
};

export default NawBar;
