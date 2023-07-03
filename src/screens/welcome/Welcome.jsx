import React, { useContext, useEffect } from 'react';
import './welcome.css';
import { AppContext } from '../../context/AppContext';
import { useLocation, useNavigate } from 'react-router-dom';

const Welcome = () => {
  const { cities, selectCity, city, setCity } = useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (city) {
      if (location.state) {
        navigate(location.state?.from, { replace: true });
      } else {
        navigate('/', { replace: true });
      }
    }
  }, [city, navigate, location.state]);

  const handleCitySelection = (selectedCity) => {
    selectCity(selectedCity);
    setCity(selectedCity);
    navigate('/');
  };

  return (
    <div className="welcome-screen">
      <div className="container">
        <div
          className="text-center wow fadeInUp col-12"
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
            Location
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
            Select Your City
          </h1>
        </div>

        <div className="location-btns d-flex gap-4 flex-wrap justify-content-center">
          {cities?.map((city) => (
            <button
              onClick={() => handleCitySelection(city.name)}
              key={city._id}
            >
              {city.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
