import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';

const RestaurantRoute = ({ children }) => {
  const { isLogin, user, loading } = useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation();

  if (loading) {
    return (
      <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div
          className="spinner-border text-primary"
          style={{ width: '3rem', height: '3rem' }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  if (!user || !isLogin) {
    navigate('/login', { state: { from: location.pathname } });
    return null;
  } else if (user && user.role !== 'restaurant_owner') {
    navigate('/');
    return null;
  }

  return (
    <>
      <Sidebar
        brandPath="/restaurant/dashboard"
        menu={[
          {
            title: 'Dashboard',
            path: '/restaurant/dashboard',
            icon: 'bi bi-speedometer2',
          },
          {
            title: 'Order',
            path: '/restaurant/order',
            icon: 'bi bi-table',
          },
          {
            title: 'All Items',
            path: '/restaurant/items',
            icon: 'bi bi-grid-fill',
          },

          {
            title: 'Add Items',
            path: '/restaurant/add-items',
            icon: 'bi bi-building-add',
          },
        ]}
      />
      {children}
    </>
  );
};

export default RestaurantRoute;
