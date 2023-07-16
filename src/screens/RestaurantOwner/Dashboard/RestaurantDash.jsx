import React, { useState } from 'react';
import './restaurantDash.css';
import Sidebar from '../../../components/sidebar/Sidebar';
import RestaurantRoute from '../../../routes/RestaurantRoute';

const RestaurantDash = () => {
  return (
    <RestaurantRoute>
    <div className="restaurant-dash">
        

      <div className="container" style={{paddingTop: '6rem'}}>
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        </div>
        <div className="row">
          <Card
            title={'Order (Today)'}
            total={'100'}
            icon={'fas fa-calendar fa-2x text-gray-300'}
            classname="warning"
          />
          <Card
            title={'Earnings (Today)'}
            total={'8000'}
            icon={'fas fa-dollar-sign fa-2x text-gray-300'}
            classname="info"
          />
          <Card
            title={'Earnings (Monthly)'}
            total={'40,000'}
            icon={'fas fa-calendar fa-2x text-gray-300'}
            classname="primary"
          />
          <Card
            title={'Earnings (Annual)'}
            total={'215,000'}
            icon={'fas fa-dollar-sign fa-2x text-gray-300'}
            classname="success"
          />
        </div>
      </div>
    </div>
    </RestaurantRoute>
  );
};

const Card = ({ title, total, icon, classname }) => (
  <div className="col-xl-3 col-md-6 mb-4">
    <div className={`card border-left-${classname} shadow h-100 py-"`}>
      <div className="card-body">
        <div className="row no-gutters align-items-center">
          <div className="col mr-2">
            <div
              className={`text-xs font-weight-bold text-${classname} text-uppercase mb-1`}
            >
              {title}
            </div>
            <div className="h5 mb-0 font-weight-bold text-gray-800">${total}</div>
          </div>
          <div className="col-auto">
            <i className={icon}></i>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RestaurantDash;
