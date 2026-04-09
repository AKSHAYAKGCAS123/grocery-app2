import { useState, useEffect } from "react";

function Cart({ cart, setCart }) {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [animatedTotal, setAnimatedTotal] = useState(0);

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    let start = 0;
    const duration = 300;
    const increment = totalPrice / (duration / 10);

    const counter = setInterval(() => {
      start += increment;
      if (start >= totalPrice) {
        setAnimatedTotal(totalPrice);
        clearInterval(counter);
      } else {
        setAnimatedTotal(Math.floor(start));
      }
    }, 10);

    return () => clearInterval(counter);
  }, [totalPrice]);

  const handleOrder = () => {
    setOrderPlaced(true);
    setCart([]);
  };

  return (
    <div className="cart">
      <h2>Cart 🛒</h2>

      {orderPlaced && (
        <h3 className="success-msg">Your order was successful ✅</h3>
      )}

      {cart.length === 0 ? (
        <p className="empty-cart">No items in cart</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              {item.name} - ₹{item.price}
            </div>
          ))}

          <h3 className="total">Total: ₹{animatedTotal}</h3>

          <button className="order-btn" onClick={handleOrder}>
            Place Order
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;