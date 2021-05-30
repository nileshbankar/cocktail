import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({
  idDrink,
  strDrink,
  strDrinkThumb,
  strAlcoholic,
  strCategory,
  strGlass,
  strInstructions,
}) => {
  return (
    <article className="cocktail">
      <div className="img">
        <img src={strDrinkThumb} alt={strCategory}></img>
      </div>
      <div className="cocktail-footer">
        <h3>{strDrink}</h3>
        <h4>{strAlcoholic}</h4>
        <h4>{strGlass}</h4>
        <p>{strInstructions}</p>
        <Link to={`/cocktail/${idDrink}`}>
          <button className="btn btn-primary btn-details">More info...</button>
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
