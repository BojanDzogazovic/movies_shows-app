import React from "react";
import headerIcon from "../resources/icons/header-icon.png";

export const Header = () => {
  return (
    <header className="header">
      <img className="header__icon" src={headerIcon} alt="movie-icon" />
      <h1 className="header__title">Movies/TV shows app</h1>
    </header>
  );
};
