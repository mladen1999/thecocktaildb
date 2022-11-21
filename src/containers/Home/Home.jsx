import React, { useContext } from "react";
import Card from "../../components/Card/Card";
import SearchContext from "../../context/SearchContext";
import "./Home.css";
import useHome from "./useHome";

const Home = () => {
  const { searchValue } = useContext(SearchContext);
  const { error, isLoaded, drinks } = useHome(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`
  );

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="home">
      {drinks ? (
        drinks.map((item) => <Card key={item.idDrink} {...item} />)
      ) : (
        <div>Error </div>
      )}
    </div>
  );
};

export default Home;
