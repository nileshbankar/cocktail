import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { cocktails, isLoading } = useGlobalContext();
  if (isLoading) {
    return <Loading></Loading>;
  }
  if (cocktails.length < 1) {
    return (
      <h2 className="section-title">No cocktails found for above search</h2>
    );
  }
  return (
    <section className="section">
      <h2 className="section-title">Cocktails</h2>
      <div className="cocktails-center">
        {cocktails.drinks.map((drink) => {
          return <Cocktail key={drink.idDrink} {...drink}></Cocktail>;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
