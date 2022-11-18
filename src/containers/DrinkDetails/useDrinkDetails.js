import { useEffect, useState } from "react";

const useDrinkDetails = (id) => {
  const [drink, setDrink] = useState([]);

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((result) => {
        setDrink(result);
      });
  }, [id]);

  return { drink };
};

export default useDrinkDetails;
