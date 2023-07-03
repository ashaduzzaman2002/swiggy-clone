import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState(null);
  const [restaurants, setRestaurants] = useState([])

  const getCities = async () => {
    try {
      const { data } = await axios('http://localhost:8000/restaurant/cities');
      if (data.success) {
        // setCities(data.cities)
        setCities(data.cities);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const selectCity = (city) => {
    console.log(city);
    try {
      localStorage.setItem('city', city);
    } catch (error) {
      console.log(error);
    }
  };

  const getCity = async () => {
    const myCity = localStorage.getItem('city');
    setCity(myCity);
  };

  const getRestaurantOfCity = async () => {
    try {
      const {data} = await axios.get('http://localhost:8000/restaurant/kolkata/all')
      setRestaurants(data.restaurants);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCities();
    getCity();
    console.log('getCity', city);
    getRestaurantOfCity()
  }, [setCity, city]);

  return (
    <AppContext.Provider value={{ cities, selectCity, city, setCity, restaurants, setRestaurants }}>
      {children}
    </AppContext.Provider>
  );
};
