import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import {
  addToLS,
  getStoredCart,
  removeFromLS,
} from "../../utilities/localStorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((response) => response.json())
      .then((data) => setBottles(data));
  }, []);

  // load cart from local storage
  useEffect(() => {
    // console.log('called the useEffect', bottles.length);
    if (bottles.length) {
      const storedCartId = getStoredCart();
      // console.log(storedCartId, bottles);

      const savedCart = [];
      for (let id of storedCartId) {
        // console.log(id);
        const bottle = bottles.find((bottle) => bottle.id === id);
        if (bottle) {
          savedCart.push(bottle);
        }
      }
      // console.log('saved cart', savedCart);
      setCart(savedCart);
    }
  }, [bottles]);

  const bottleContainer = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "15px",
  };

  const handleAddToCart = (bottle) => {
    // console.log(bottle);
    const newCart = [...cart, bottle];
    setCart(newCart);
    // add bottle id to local storage
    addToLS(bottle.id);
  };

  const handleRemoveFromCart = (id) => {
    // remove from webpage
    const remainingCart = cart.filter(bottle => bottle.id != id);
    setCart(remainingCart);
    // remove from local storage
    removeFromLS(id);
  };

  return (
    <div>
      <h2>total bottles: {bottles.length} </h2>
      {/* <h3>cart: {cart.length} </h3> */}
      <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
      <div style={bottleContainer}>
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleAddToCart={handleAddToCart}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
