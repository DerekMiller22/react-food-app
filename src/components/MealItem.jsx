import { useContext } from "react";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";

export default function MealItem({ mealData }) {
  const cart = useContext(CartContext);

  function handleAddMealToCart() {
    cart.addItem(mealData);
  }

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${mealData.image}`} />
        <div>
          <h3>{mealData.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(mealData.price)}
          </p>
          <p className="meal-item-description">{mealData.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button textOnly={false} onClick={handleAddMealToCart}>
            Add to cart
          </Button>
        </p>
      </article>
    </li>
  );
}
