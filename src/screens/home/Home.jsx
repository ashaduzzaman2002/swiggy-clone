import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import ScrollTop from '../../components/ScrollTop/ScrollTop';

const Home = () => {
  
  return (
    <section className="restaurants">
      <div className="container">
        <div
          className="text-center wow fadeInUp"
          data-wow-delay="0.1s"
          style={{
            visibility: 'visible',
            animationDelay: '0.1s',
            animationName: 'fadeInUp',
          }}
        >
          <h5
            className="section-title ff-secondary text-center fw-normal"
            style={{ color: '#FEA116' }}
          >
            Food Menu
          </h5>
          <h1
            className="mb-5"
            style={{
              fontFamily: 'Nunito, sans-serif',
              fontWeight: '800',
              lineHeight: '1.2',
              color: '#0F172B',
            }}
          >
            Most Popular Items
          </h1>
        </div>

        <div className="restaurant-list row">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      <ScrollTop />
    </section>
  );
};

const Card = () => (
  <div className="col-12 coll-md-4 col-lg-3">
    <Link
      to="/restaurants/waffld-domlur-bangalore-303446"
      className="place-link"
    >
      <div className="list-item">
        <div className="item-content">
          <div className="top-img">
            <img
              className="_2tuBw _12_oN"
              alt="La Pino'z Pizza"
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/hgvtyqrxzvpwmbs361er"
              width="254"
              height="160"
            />
          </div>
          <div
            className="status"
            style={{
              background: 'rgb(58, 60, 65)',
              color: 'rgb(255, 255, 255)',
              borderColor: 'rgb(30, 32, 35) transparent',
            }}
          >
            <div className="status-title">Promoted</div>
          </div>
          <div className="place-name-div">
            <div className="name">La Pino'z Pizza</div>
            <div
              className="food-items"
              title="Italian, Pizzas, Fast Food, Mexican, Desserts, Beverages"
            >
              Italian, Pizzas, Fast Food, Mexican, Desserts, Beverages
            </div>
          </div>
          <div className="info-div">
            <div className="rating">
              <span className="icon-star">
                <i className="fa-solid fa-star"></i>
              </span>
              <span>3.8</span>
            </div>
            <div>•</div>
            <div>42 MINS</div>
            <div>•</div>
            <div className="price">₹250 FOR TWO</div>
          </div>
          <div className="offer-div">
            <span className="icon-offer-filled">
              <i className="fa-solid fa-tag"></i>
            </span>
            <span className="offer-text">50% off | Use WELCOME50</span>
          </div>
        </div>
        <div className="quick-view">
          <span role="button" aria-label="Open" className="view-btn">
            QUICK VIEW
          </span>
        </div>
      </div>
    </Link>
  </div>
);

export default Home;
