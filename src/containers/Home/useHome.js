import { useEffect, useState, useContext } from "react";
import SearchContext from "../../context/SearchContext";

export default function useHome() {
  const { searchValue } = useContext(SearchContext);

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setDrinks(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [searchValue]);

  return { error, isLoaded, drinks };
}
