import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Input from "./UI/Input";
import UserProgressContext from "../store/userProgressContext";
import Button from "./UI/Button";

export default function Checkout() {
  const cart = useContext(CartContext);
  const userProgress = useContext(UserProgressContext);

  const totalPrice = cart.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleClose() {
    userProgress.hideCheckout();
  }

  return (
    <Modal open={userProgress.progress === "checkout"} onClose={handleClose}>
      <form>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(totalPrice)}</p>
        <Input label="Full Name" type="text" id="full-name" />
        <Input label="Email" type="email" id="email" />
        <Input label="Address" type="text" id="address" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="email" id="City" />
        </div>
        <p className="modal-actions">
          <Button type="button" textOnly onClick={handleClose}>
            Close
          </Button>
          <Button>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
}
