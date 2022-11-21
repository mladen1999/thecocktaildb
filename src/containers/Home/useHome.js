import { useEffect, useState, useContext } from "react";
import SearchContext from "../../context/SearchContext";
import axios from "axios";

export default function useHome() {
  const { searchValue } = useContext(SearchContext);

  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        const { data: value } = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`
        );

        setDrinks(value.drinks);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [searchValue]);
  console.log(drinks);

  return { drinks };
}
