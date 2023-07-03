import React, { useEffect, useState } from 'react';
import ScrollTop from '../../components/ScrollTop/ScrollTop';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Menu = () => {
  const { city, restaurant } = useParams();

  const [restaurantDetails, setRestaurantDetails] = useState(null);

  const getRestaurant = async () => {
    try {
      const { data } = await axios(
        `http://localhost:8000/restaurant/${city}/${restaurant}`
      );
      setRestaurantDetails(data.restaurant);
      console.log(data.restaurant);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRestaurant();
  }, []);

  return (
    <section className="restaurants">
      {/* <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div class="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div> */}
      {restaurantDetails ? (
        <div className="container px-md-5 px-4">
          <div class="RestaurantHeader_wrapper__2GTdS RestaurantHeader_marginBottom__1rbfK">
            <div class="RestaurantNameAddress_wrapper__24l_g">
              <div aria-hidden="true">
                <p class="RestaurantNameAddress_name__2IaTv">
                  {restaurantDetails.name}
                </p>
                <p class="RestaurantNameAddress_cuisines__mBHr2">
                  {restaurantDetails.dishes}
                </p>
              </div>
              <div class="RestaurantFooterAddress_address__37uUA">
                <div class="icon-markerDark RestaurantFooterAddress_icon__2Kjdg"></div>
                <p>{restaurantDetails.location}</p>
              </div>
            </div>
            <div
              class="RestaurantRatings_wrapper__2294i"
              data-testid="restaurant-ratings-header"
              aria-hidden="true"
            >
              <span
                class="RestaurantRatings_avgRating__1TOWY"
                aria-hidden="true"
              >
                <span class="icon-star"></span> <span>4.1</span>{' '}
              </span>
              <span
                class="RestaurantRatings_totalRatings__3d6Zc"
                aria-hidden="true"
              >
                1K+ ratings
              </span>
            </div>
          </div>
          <hr />

          <div
            class="styles_vegOnly__3k3n5"
            data-testid="menu-veg-filter-switch"
          >
            <div class="styles_vegOnlyLabel__HR3Ii" aria-hidden="true">
              Veg Only
            </div>
          </div>
          <hr />

          <div
            class="tab-class text-center wow fadeInUp"
            data-wow-delay="0.1s"
            style={{
              visibility: 'visible',
              animationDelay: '0.1s',
              animationName: 'fadeInUp',
            }}
          >
            <ul class="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
              <li class="nav-item">
                <a
                  class="d-flex align-items-center text-start mx-3 ms-0 pb-3 active"
                  data-bs-toggle="pill"
                  href="#tab-1"
                >
                  <i class="fa fa-coffee fa-2x text-primary"></i>
                  <div class="ps-3">
                    <small class="text-body">Popular</small>
                    <h6 class="mt-n1 mb-0">Breakfast</h6>
                  </div>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="d-flex align-items-center text-start mx-3 pb-3"
                  data-bs-toggle="pill"
                  href="#tab-2"
                >
                  <i class="fa fa-hamburger fa-2x text-primary"></i>
                  <div class="ps-3">
                    <small class="text-body">Special</small>
                    <h6 class="mt-n1 mb-0">Launch</h6>
                  </div>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="d-flex align-items-center text-start mx-3 me-0 pb-3"
                  data-bs-toggle="pill"
                  href="#tab-3"
                >
                  <i class="fa fa-utensils fa-2x text-primary"></i>
                  <div class="ps-3">
                    <small class="text-body">Lovely</small>
                    <h6 class="mt-n1 mb-0">Dinner</h6>
                  </div>
                </a>
              </li>
            </ul>

            <div class="tab-content">
              <div id="tab-1" class="tab-pane fade p-0 active show">
                <div class="row g-4">
                  {restaurantDetails.length ? (
                    restaurantDetails.foods?.map((food, i) => <Card key={i} />)
                  ) : (
                    <div className="container d-flex align-items-center justify-content-center mt-5">
                      <div className="row" style={{ width: '100%' }}>
                        <div className="col-lg-8 offset-lg-2 text-center">
                          <div className="error-text">
                            <h1>Oops! No Item Availabe.</h1>
                            <p>Search diffrent Restaurant</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div id="tab-2" class="tab-pane fade p-0">
              <div class="row g-4">
                  {restaurantDetails.length ? (
                    restaurantDetails.foods?.map((food, i) => <Card key={i} />)
                  ) : (
                    <div className="container d-flex align-items-center justify-content-center mt-5">
                      <div className="row" style={{ width: '100%' }}>
                        <div className="col-lg-8 offset-lg-2 text-center">
                          <div className="error-text">
                            <h1>Oops! No Item Availabe.</h1>
                            <p>Search diffrent Restaurant</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div id="tab-3" class="tab-pane fade p-0">
              <div class="row g-4">
                  {restaurantDetails.length ? (
                    restaurantDetails.foods?.map((food, i) => <Card key={i} />)
                  ) : (
                    <div className="container d-flex align-items-center justify-content-center mt-5">
                      <div className="row" style={{ width: '100%' }}>
                        <div className="col-lg-8 offset-lg-2 text-center">
                          <div className="error-text">
                            <h1>Oops! No Item Availabe.</h1>
                            <p>Search diffrent Restaurant</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container d-flex align-items-center justify-content-center mt-5">
          <div className="row" style={{ width: '100%' }}>
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="error-text">
                <h1>Oops! No Restaurant Found.</h1>
                <p>Search diffrent Restaurant</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <ScrollTop />
    </section>
  );
};

const Card = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="col-lg-6">
      <div className="d-flex align-items-center">
        <Link to="/menu/dadaboudi/food">
          <img
            className="flex-shrink-0 img-fluid rounded"
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_140,h_140,c_fill/ajas5sbo4c43m7ne3y82"
            alt=""
            style={{ width: 80 }}
          />
        </Link>
        <div className="w-100 d-flex flex-column text-start ps-4">
          <h5 className="d-flex justify-content-between border-bottom pb-2">
            <Link to="/menu/dadaboudi/food">Chicken Burger</Link>
            <span className="text-primary">$115</span>
          </h5>

          <div
            className="row justify-content-between pb-2"
            style={{ paddingRight: 10 }}
          >
            <small className="fst-italic col-8">
              Ipsum ipsum clita erat amet dolor justo diam
            </small>

            <button className="add-to-cart-btn col-3" onClick={handleClick}>
              {isClicked ? (
                <i
                  className="bi bi-cart-check-fill"
                  style={{ fontSize: 19, color: '#FEA116' }}
                ></i>
              ) : (
                <i
                  className="bi bi-cart-plus-fill"
                  style={{ fontSize: 19 }}
                ></i>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
