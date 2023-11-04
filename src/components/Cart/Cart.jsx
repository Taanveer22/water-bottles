import PropTypes from "prop-types";
import "./Cart.css";
const Cart = ({ cart, handleRemoveFromCart }) => {
  //   console.log(cart);

  return (
    <div>
      <h3>cart: {cart.length} </h3>
      <div className="cart-container">
        {cart.map((bottle) => (
          <div key={bottle.id}>
            <img src={bottle.img}></img>
            <button onClick={() => handleRemoveFromCart(bottle.id)}>
              remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  handleRemoveFromCart: PropTypes.func.isRequired,
};
export default Cart;
