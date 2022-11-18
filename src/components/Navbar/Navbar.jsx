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
        ></input>
        <button>Search</button>
      </div>
    </nav>
  );
};

export default Navbar;
