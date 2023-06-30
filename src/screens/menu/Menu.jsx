import React from 'react';
import './menu.css';
import { Link } from 'react-router-dom';
import ScrollTop from '../../components/ScrollTop/ScrollTop';

const Menu = () => {
  return (
    <section className="restaurants">
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
          All Restaurants
        </h1>
      </div>
      <div
        className="_1jjVb"
        style={{
          background: '#e9e9eb',
          minHeight: '50vh',
          marginBottom: '-48px',
        }}
      >
        <div className="container pb-5">
          <div className="row">
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
      </div>

      <ScrollTop />
    </section>
  );
};

const Card = () => (
  <Link
    role="button"
    aria-label="Open"
    to="/restaurants/chill-out-restaurant-itinda-road-monoranjan-market-complex-basirhat-207001"
    className="restaurants-card col-xl-3 col-lg-4 col-md-6 col-12 mt-5"
  >
    <div className="restaurants-card-outer">
      <div className="tmKiP">
        <div className="_1zjMg">
          <div className="_1s9IR">Chill Out Restaurant</div>
          <div className="_1VerS">Indian, Chinese, Biryani, Tandoor</div>
        </div>
      </div>
      
      <div className="_2Y2X_">
        <img
          className="_2tuBw _12_oN"
          alt="Chill Out Restaurant"
          width="70"
          height="70"
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_140,h_140,c_fill/ajas5sbo4c43m7ne3y82"
        />
      </div>
    </div>
  </Link>
);

export default Menu;
