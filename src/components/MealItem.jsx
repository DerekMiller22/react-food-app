import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";

export default function MealItem({ mealData }) {
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
          <Button textOnly={false}>Add to cart</Button>
        </p>
      </article>
    </li>
  );
}
