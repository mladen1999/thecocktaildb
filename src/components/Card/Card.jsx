import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ strDrinkThumb, strCategory, idDrink }) => {
  const id = idDrink;
  return (
    <div className="card">
      <Link to={`/${id}`}>
        <img className="cardImg" src={strDrinkThumb} alt="drnk" />
        <p className="title">{strCategory}</p>
      </Link>
    </div>
  );
};

export default Card;
