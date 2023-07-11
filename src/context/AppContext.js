import React, { createContext, useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import { baseURL, dbObject } from '../helper/api';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState(null);
  const [restaurants, setRestaurants] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0.00);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
    calculateTotalPrice()
  }, [cartItems]);

  const addToCart = (item) => {
    const existingCartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = existingCartItems.find(
      (cartItem) => cartItem._id === item._id
    );

    if (existingItem) {
      // If the item already exists in the cart, increase the quantity
      const updatedCartItems = existingCartItems.map((cartItem) => {
        if (cartItem._id === item._id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });

      setCartItems(updatedCartItems);
      localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    } else {
      // If the item doesn't exist in the cart, add it with a quantity of 1
      const updatedCartItems = [...existingCartItems, { ...item, quantity: 1 }];

      setCartItems(updatedCartItems);
      localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    }
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item._id !== itemId);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const increaseQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item._id === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
  };

  const decreaseQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item._id === itemId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });

    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
  };

  const getQuantity = (itemId) => {
    const item = cartItems.find((item) => item._id === itemId);
    return item ? item.quantity : 0;
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    
    for (const item of cartItems) {
      totalPrice += item.price * item.quantity;
    }
    
    setTotalPrice(totalPrice);
  };

  const getCities = async () => {
    try {
      setLoading(true);
      const { data } = await axios(`${baseURL}/restaurants/cities`);
      if (data.success) {
        setCities(data.cities);
        setLoading(false);
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

  const loggout = async () => {
    try {
      setLoading(true);
      const { data } = await dbObject.get('/auth/logout');
      console.log(data);
      setIsLogin(false);
      setUser(null);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getRestaurantOfCity = async (city) => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${baseURL}/restaurant/${city}/all`);
      setRestaurants(data.restaurants);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getUser = async () => {
    try {
      setLoading(true);
      const { data } = await dbObject.get('/auth/user');
      setIsLogin(true);
      setUser(data.user);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCities();
    getCity();
    getUser();
  }, [city]);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <AppContext.Provider
      value={{
        cities,
        selectCity,
        city,
        setCity,
        restaurants,
        setRestaurants,
        setIsLogin,
        isLogin,
        loggout,
        getRestaurantOfCity,
        user,
        setUser,
        loading,
        setLoading,
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getQuantity,
        increaseQuantity,
        decreaseQuantity,
        totalPrice
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
