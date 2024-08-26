import logo from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import { useContext } from "react";

export default function Header() {
  const cart = useContext(CartContext);

  const cartLength = cart.items.reduce((totalItems, item) => {
    return totalItems + item.quantity;
  }, 0);

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="Logo" />
        <h1>React Food App</h1>
      </div>
      <nav>
        <Button textOnly={true}> CART ({cartLength}) </Button>
      </nav>
    </header>
  );
}
