import React, { useContext } from 'react';
import './cart.css';
import { AppContext } from '../../context/AppContext';

const Cart = () => {
  const { cartItems, totalPrice } = useContext(AppContext);
  

  
  return (
    <div className="restaurant mt-5 pt-5">
      <div className=" container mt-5 p-3 rounded cart">
        <div className="row no-gutters">
          <div className="col-md-8">
            <div className="product-details mr-2">
              <h6 className="mb-0">Shopping cart</h6>
              <div className="d-flex justify-content-between">
                <span>You have {cartItems?.length} items in your cart</span>
              </div>
              {cartItems?.map((item) => (
                <Card key={item._id} data={item} />
              ))}
            </div>
          </div>
          <div className="col-md-4">
            <div className="payment-info">
              <div className="d-flex justify-content-between align-items-center">
                <span>Card details</span>
              </div>
              <span className="type d-block mt-3 mb-1">Card type</span>
              <label className="radio">
                <input type="radio" name="card" value="payment" checked />
                <span>
                  <img
                    width="30"
                    src="https://img.icons8.com/color/48/000000/mastercard.png"
                  />
                </span>
              </label>

              <label className="radio">
                <input type="radio" name="card" value="payment" />
                <span>
                  <img
                    width="30"
                    src="https://img.icons8.com/officel/48/000000/visa.png"
                  />
                </span>
              </label>

              <label className="radio">
                <input type="radio" name="card" value="payment" />
                <span>
                  <img
                    width="30"
                    src="https://img.icons8.com/ultraviolet/48/000000/amex.png"
                  />
                </span>
              </label>

              <label className="radio">
                <input type="radio" name="card" value="payment" />
                <span>
                  <img
                    width="30"
                    src="https://img.icons8.com/officel/48/000000/paypal.png"
                  />
                </span>
              </label>
              <div>
                <label className="credit-card-label">Name on card</label>
                <input
                  type="text"
                  className="form-control credit-inputs"
                  placeholder="Name"
                />
              </div>
              <div>
                <label className="credit-card-label">Card number</label>
                <input
                  type="text"
                  className="form-control credit-inputs"
                  placeholder="0000 0000 0000 0000"
                />
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label className="credit-card-label">Date</label>
                  <input
                    type="text"
                    className="form-control credit-inputs"
                    placeholder="12/24"
                  />
                </div>
                <div className="col-md-6">
                  <label className="credit-card-label">CVV</label>
                  <input
                    type="text"
                    className="form-control credit-inputs"
                    placeholder="342"
                  />
                </div>
              </div>
              <hr className="line" />
              <div className="d-flex justify-content-between information">
                <span>Subtotal</span>
                <span>₹{totalPrice}</span>
              </div>
              <div className="d-flex justify-content-between information">
                <span>Tax</span>
                <span>₹0.00</span>
              </div>
              <div className="d-flex justify-content-between information">
                <span>Total(Incl. taxes)</span>
                <span>₹{totalPrice}</span>
              </div>
              <button
                className="btn btn-primary btn-block d-flex justify-content-between mt-3"
                type="button"
              >
                <span>₹{totalPrice}</span>
                <span>
                  Checkout<i className="fa fa-long-arrow-right ml-1"></i>
                </span>
              </button>
            </div>
          </div>
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
          class="bi bi-trash3-fill ms-3"
        ></i>
      </div>
    </div>
  );
};
export default Cart;
