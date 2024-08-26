import { useContext } from "react";
import Button from "./UI/Button";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import UserProgressContext from "../store/userProgressContext";

export default function Cart() {
  const cart = useContext(CartContext);
  const userProgress = useContext(UserProgressContext);

  const totalPrice = cart.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleCloseCart() {
    userProgress.hideCart();
  }

  return (
    <Modal className="cart" open={userProgress.progress === "cart"}>
      <h2>Cart</h2>
      <ul>
        {cart.items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(totalPrice)}</p>
      <p className="modal-actions">
        <Button textOnly={true} onClick={handleCloseCart}>
          Close
        </Button>
        <Button>Go To Checkout</Button>
      </p>
    </Modal>
  );
}
