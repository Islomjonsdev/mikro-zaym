import React from "react";
import Header from "../Header/Header";
import "./HeaderHero.scss";

const HeaderHero = ({ hero }) => {
  return (
    <div className="bg">
      {/* <Header /> */}
      {hero}
    </div>
  );
};

export default HeaderHero;
