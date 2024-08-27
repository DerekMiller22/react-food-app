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

  function handleCheckout() {
    userProgress.showCheckout();
  }

  return (
    <Modal
      className="cart"
      open={userProgress.progress === "cart"}
      onClose={userProgress.progress === "cart" ? handleCloseCart : null}
    >
      <h2>Cart</h2>
      <ul>
        {cart.items.map((item) => (
          <li key={item.id} className="cart-item">
            {item.name} - {item.quantity} x{" "}
            {currencyFormatter.format(item.price)}
          </li>
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(totalPrice)}</p>
      <p className="modal-actions">
        <Button textOnly={true} onClick={handleCloseCart}>
          Close
        </Button>
        {cart.items.length > 0 && (
          <Button onClick={handleCheckout}>Go To Checkout</Button>
        )}
      </p>
    </Modal>
  );
}
