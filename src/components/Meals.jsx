import { useState, useEffect } from "react";
import MealItem from "./MealItem";

export default function Meals() {
  const [mealState, setMealState] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch("http://localhost:3000/meals", {
        method: "GET",
      });

      const meals = await response.json();
      setMealState(meals);
    }

    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {mealState.map((meal) => (
        <MealItem key={meal.id} mealData={meal} />
      ))}
    </ul>
  );
}
