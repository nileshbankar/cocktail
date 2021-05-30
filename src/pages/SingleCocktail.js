import React, { useCallback, useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useParams, Link, Redirect } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  let { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);

  const [drink, setDrink] = useState([]);

  const getDrink = useCallback(async () => {
    try {
      setIsLoading(true);

      const response = await fetch(`${url}${id}`);

      if (!response.ok) return <Redirect to="/error" />;
      const data = await response.json();
      const { drinks } = data;

      setDrink(drinks[0]);
    } catch (error) {
      console.error(error.message);
      <Redirect to="/error" />;
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getDrink();
  }, [id, getDrink]);

  if (isLoading) return <Loading></Loading>;

  if (drink.length === 0)
    return (
      <section className="section about-section">
        <h2>No record found for drinks you are looking for</h2>
      </section>
    );

  if (drink)
    return (
      <section className="section cocktail-section">
        <Link to="/">
          <button className="btn btn-primary">Back to home</button>
        </Link>
        <h2 className="section-title">{drink.strDrink}</h2>
        <div className="drink">
          <img src={drink.strDrinkThumb} alt={drink.strDrink}></img>
          <div className="drink-info">
            <p>
              <span className="drink-data">name :</span> {drink.strDrink}
            </p>
            <p>
              <span className="drink-data">category :</span> {drink.strCategory}
            </p>
            <p>
              <span className="drink-data">info :</span> {drink.strAlcoholic}
            </p>
            <p>
              <span className="drink-data">glass :</span> {drink.strGlass}
            </p>
            <p>
              <span className="drink-data">instructons :</span>
              {drink.strInstructions}
            </p>
            <p>
              <span className="drink-data">ingredients :</span>
              <span> {drink.strIngredient1}</span>
              <span> {drink.strIngredient2}</span>
              <span> {drink.strIngredient3}</span>
            </p>
          </div>
        </div>
      </section>
    );
};

export default SingleCocktail;
