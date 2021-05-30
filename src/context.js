import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [cocktails, setCocktails] = useState([]);

  // Fetch data from API
  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);

      const response = await fetch(`${url}${searchTerm}`);

      if (!response.ok) return console.error("Error fetching data from API");
      const data = await response.json();
      const { drinks } = data;
      if (!drinks) setCocktails([]);
      else setCocktails(data);
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchData();
  }, [searchTerm, fetchData]);

  return (
    <AppContext.Provider
      value={{ isLoading, searchTerm, cocktails, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
