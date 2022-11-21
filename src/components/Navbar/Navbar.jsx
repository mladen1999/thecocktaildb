import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

import Logo from "./../../images/logo.png";
import SearchContext from "../../context/SearchContext";

const Navbar = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext);

  const onChangeHandler = (e) => {
    setSearchValue(e.target.value);
  };
  /*return */
  return (
    <nav className="navbar">
      <Link to="/">
        <img className="logoImg" src={Logo} alt="logo" />
      </Link>
      <div className="links">
        <input
          type="text"
          value={searchValue}
          onChange={onChangeHandler}
          placeholder="Search"
        ></input>
      </div>
    </nav>
  );
};

export default Navbar;
