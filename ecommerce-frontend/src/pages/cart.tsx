import { useState, useEffect } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/cart-item";
import { Link } from "react-router-dom";
import { RiH1 } from "react-icons/ri";

const cartItems = [
  {
    productId: "asdsad",
    photo: "https://m.media-amazon.com/images/I/71jG+e7roXL._SL1500_.jpg",
    name: "Macbook",
    price: 3000,
    quantity: 4,
    stock: 10,
  },
];
const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const shippinCharges = 200;
const total = subtotal + tax + shippinCharges;
const discount = 400;

const Cart = () => {
  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCouponCode, setisValidCouponCode] = useState<boolean>(false);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (Math.random() > 0.5) {
        setisValidCouponCode(true);
      } else {
        setisValidCouponCode(false);
      }
    }, 1000);

    return () => {
      clearTimeout(timeOutId);
      setisValidCouponCode(false);
    };
  }, [couponCode]);

  return (
    <div className="cart">
      <main>
        <h1>abc</h1>
        {cartItems.length > 0 ? (
          cartItems.map((i, idx) => <CartItem key={idx} cartItem={i} />)
        ) : (
          <h1>Noitems Added</h1>
        )}
      </main>

      <aside>
        <p>SubTotal: ₹{subtotal} </p>
        <p>ShippingCharges : ₹{shippinCharges}</p>
        <p>Tax : ₹{tax}</p>
        <p>
          Discount : <em className="red"> - ₹{discount}</em>
        </p>

        <p>
          {" "}
          <b>Total: ₹{total}</b>
        </p>

        <input
          type="text"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          placeholder="Enter Coupon Code Here ... "
        />

        {couponCode &&
          (isValidCouponCode ? (
            <span className="green">
              ${discount} off using the
              <code>{couponCode}</code>
            </span>
          ) : (
            <span className="red">
              Invalid Coupon Code <VscError />{" "}
            </span>
          ))}

        {cartItems.length > 0 && <Link to="/shipping">Checkout</Link>}
      </aside>
    </div>
  );
};

export default Cart;
