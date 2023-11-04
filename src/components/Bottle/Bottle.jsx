import PropTypes from "prop-types";

const Bottle = ({ bottle, handleAddToCart }) => {
  //  console.log(bottle);
  const { name, img, price } = bottle;

   const bottleBox = {
     border: "2px solid green",
     padding: "20px",
     margin: "10px",
     borderRadius: "20px",
   };

   const imgSize = {
     width: "200px",
  };
  
  return (
    <div style={bottleBox}>
      <h3>bottle: {name}</h3>
      <img src={img} style={imgSize}/>
      <p>price: ${price}</p>
      <button onClick={()=>handleAddToCart(bottle)}>Purchase</button>
    </div>
  );
};

Bottle.propTypes = {
  // You can declare that a prop is a specific JS primitive.
  // By default, these are all optional.
  bottle: PropTypes.object.isRequired,
  handleAddToCart: PropTypes.func.isRequired
};
export default Bottle;
