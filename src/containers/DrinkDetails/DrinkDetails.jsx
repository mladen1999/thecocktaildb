import { useParams } from "react-router-dom";
import useDrinkDetails from "./useDrinkDetails";

const DrinkDetails = () => {
  const { id } = useParams();
  const { drink } = useDrinkDetails(id);
  console.log(drink);
  return (
    <div className="home">
      {drink.drinks?.map((item) => (
        <div key={item.idDrink}>
          <div className="card">
            <img className="cardImg" src={item.strDrinkThumb} alt="drnk" />
            <p className="title">{item.strDrink}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DrinkDetails;
