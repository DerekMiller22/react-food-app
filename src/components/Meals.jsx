import { useState, useEffect } from "react";

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
        <li key={meal.id}>{meal.name}</li>
      ))}
    </ul>
  );
}
