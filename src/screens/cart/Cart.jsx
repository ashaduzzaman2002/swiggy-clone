import React, { useContext } from 'react';
import './cart.css';
import { AppContext } from '../../context/AppContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, totalPrice } = useContext(AppContext);

  return (
    <div className="restaurant mt-5 pt-5">
      <div className="container mt-md-5 p-3 cart-container">
        <div className="card">
          <div className="row">
            <div className="col-md-8 cart">
              <div className="title">
                <h4>
                  <b>Shopping Cart</b>
                </h4>

                <div className="text-muted">{cartItems?.length || 0} items</div>
              </div>

              <div className="row border-top">
                {cartItems?.length ? (
                  cartItems?.map((item) => (
                    <CartItem key={item._id} data={item} />
                  ))
                ) : (
                  <div className="container d-flex align-items-center justify-content-center mt-5">
                    <div className="row" style={{ width: '100%' }}>
                      <div className="col-lg-8 offset-lg-2 text-center">
                        <div className="error-text">
                          <h1>Oops! No Item Found.</h1>
                          <p>Please add items to cart</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="back-to-shop">
                <Link to="/">←</Link>
                <span className="text-muted">Back to shop</span>
              </div>
            </div>
            <div className="col-md-4 summary">
              <div>
                <h5>
                  <b>Summary</b>
                </h5>
              </div>
              <hr />
              <div className="row">
                <div className="col" style={{ paddingLeft: 0 }}>
                  ITEMS {cartItems?.length || 0}
                </div>
                <div className="col text-right">₹ {totalPrice.toFixed(2)}</div>
              </div>
              <form>
                <p>GIVE CODE</p>
                <input id="code" placeholder="Enter your code" />
              </form>
              <div
                className="row"
                style={{
                  borderTop: '1px solid rgba(0,0,0,.1)',
                  padding: '2vh 0px',
                }}
              >
                <div className="col">TOTAL PRICE</div>
                <div className="col text-right">₹ {totalPrice.toFixed(2)}</div>
              </div>
              <button className="btn">CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CartItem = ({ data }) => {
  const { removeFromCart, decreaseQuantity, increaseQuantity } =
    useContext(AppContext);
  return (
    <div className="border-bottom p-0">
      <div className="row main align-items-center">
        <div className="col-2">
          <img className="img-fluid" src={data.img} />
        </div>
        <div className="col">
          <div className="row text-muted">
            {data.name.slice(0, 18)}
            {data?.name?.length >= 18 ? '...' : null}
          </div>
        </div>
        <div className="col d-flex align-items-center justify-content-center gap-2">
          <button
            className="cart-btn"
            onClick={() => decreaseQuantity(data._id)}
          >
            -
          </button>
          <a style={{ cursor: 'default', userSelect: 'none' }} className="border">
            {data.quantity}
          </a>
          <button
            onClick={() => increaseQuantity(data._id)}
            className="cart-btn"
          >
            +
          </button>
        </div>
        <div className="col d-flex gap-2 align-items-center justify-content-center">
          <span>₹ {(data?.price * data?.quantity).toFixed(0)}</span>
          <button
            onClick={() => removeFromCart(data._id)}
            className="close text-danger"
          >
            <i className="bi bi-trash3"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

const Card = ({ data }) => {
  const { removeFromCart, decreaseQuantity, increaseQuantity } =
    useContext(AppContext);
  return (
    <div className="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
      <div className="d-flex flex-row">
        <img className="rounded " src={data.img} width="40" />
        <div className="ml-2 ms-3">
          <span className="font-weight-bold d-block">{data.name}</span>
          <span className="spec">{data.desc}</span>
        </div>
      </div>
      <div className="d-flex flex-row align-items-center">
        <div
          className="d-flex gap-3 align-items-center"
          style={{ marginRight: '1rem' }}
        >
          <span
            onClick={() => decreaseQuantity(data._id)}
            className="conunterBtn"
          >
            -
          </span>
          <span className="d-block">{data.quantity}</span>
          <span
            onClick={() => increaseQuantity(data._id)}
            className="conunterBtn"
          >
            +
          </span>
        </div>

        <span className="d-block ml-5 font-weight-bold ms-3">
          ${data.price}
        </span>
        <i
          onClick={() => removeFromCart(data._id)}
          className="bi bi-trash3-fill ms-3"
        ></i>
      </div>
    </div>
  );
};
export default Cart;
