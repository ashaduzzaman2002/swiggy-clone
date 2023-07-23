import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';
import { AppContext } from '../../context/AppContext';

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { city, cities, selectCity, setCity, isLogin, user, loggout, cartItems } =
    useContext(AppContext);

  // Function to handle link click
  const handleLinkClick = () => {
    setIsCollapsed(false);
    window.scrollTo(0, 0);
  };

  // Function to toggle the collapse menu
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleCitySelection = (selectedCity) => {
    selectCity(selectedCity);
    setCity(selectedCity);
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <div className="d-flex align-items-center">
          <Link onClick={handleLinkClick} to="/" className="logo">
            <svg
              className="_8pSp-"
              viewBox="0 0 559 825"
              height="49"
              width="34"
              fill="#fc8019"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M542.92 388.542C546.805 366.526 542.355 349.598 530.881 340.76C513.621 327.466 487.698 320.236 425.954 320.236C380.271 320.236 331.225 320.286 310.268 320.275C308.322 319.894 301.285 317.604 301.02 309.112L300.734 174.289C300.727 165.779 307.531 158.857 315.943 158.839C324.369 158.825 331.204 165.723 331.211 174.226C331.211 174.226 331.421 247.414 331.441 273.424C331.441 275.936 332.892 281.8 338.549 283.328C375.43 293.267 561.865 285.999 558.967 251.804C543.147 109.96 424.476 0 280.394 0C235.021 0 192.065 10.9162 154.026 30.2754C62.9934 77.5955 -1.65904 173.107 0.0324268 283.43C1.23215 361.622 52.2203 500.605 83.434 521.234C97.8202 530.749 116.765 527.228 201.484 527.228C239.903 527.228 275.679 527.355 293.26 527.436C295.087 527.782 304.671 530.001 304.671 538.907L304.894 641.393C304.915 649.907 298.104 656.826 289.678 656.829C281.266 656.843 274.434 649.953 274.42 641.446C274.42 641.446 275.17 600.322 275.17 584.985C275.17 581.435 275.424 575.339 265.178 570.727C231.432 555.553 121.849 564.712 115.701 581.457C113.347 587.899 125.599 612.801 144.459 644.731C170.102 685.624 211.889 747.245 245.601 792.625C261.047 813.417 268.77 823.813 280.467 824.101C292.165 824.389 300.514 814.236 317.213 793.928C383.012 713.909 516.552 537.663 542.92 388.542Z"
                fill="url(#paint0_linear_19447_66107)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_19447_66107"
                  x1="445.629"
                  y1="63.8626"
                  x2="160.773"
                  y2="537.598"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF993A"></stop>
                  <stop offset="1" stopColor="#F15700"></stop>
                </linearGradient>
              </defs>
            </svg>
          </Link>

          <div className="location-div">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle other"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Your City
                </a>
                <ul className="dropdown-menu">
                  {cities?.map((city) => (
                    <li key={city._id}>
                      <button
                        className="dropdown-item text-capitalize"
                        onClick={() => handleCitySelection(city.name)}
                      >
                        {city.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
            <span className="location">{city}, India</span>
          </div>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleCollapse}
          aria-controls="navbarSupportedContent"
          aria-expanded={isCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isCollapsed ? 'show' : ''}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                style={{ marginRight: '2rem' }}
                className="nav-link"
                to="/search"
                onClick={handleLinkClick}
              >
                <i className="fa-solid fa-magnifying-glass"></i>
                <span>Search</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                style={{ marginRight: '2rem' }}
                className="nav-link"
                to={`/menu/${city}`}
                onClick={handleLinkClick}
              >
                <i className="fa-solid fa-utensils"></i>
                <span>Menu</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/cart"
                style={{ position: 'relative' }}
                onClick={handleLinkClick}
              >
                <i className="fa-solid fa-cart-shopping"></i>
                <span>Cart</span>
                {
                  cartItems.length? <div
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    backgroundColor: 'red',
                    position: 'absolute',
                    top: 5,
                    left: 10,
                    height: 14,
                    width: 14,
                    borderRadius: '50%',
                    color: 'white',
                    fontSize: 10,
                  }}
                >
                  {cartItems?.length}
                </div>: null
                }
                
              </Link>
            </li>

            {/* {isLogin && user && (
              <li className="nav-item">
                <button onClick={() => loggout()} className="nav-link">
                  <i className="fa fa-sign-out" aria-hidden="true"></i>{' '}
                  <span>Logout</span>{' '}
                </button>
              </li>
            )} */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
