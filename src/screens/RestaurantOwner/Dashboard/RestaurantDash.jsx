import React, { useState } from 'react';
import './restaurantDash.css';
import Sidebar from '../../../components/sidebar/Sidebar';
import RestaurantRoute from '../../../routes/RestaurantRoute';

const RestaurantDash = () => {
  return (
    <RestaurantRoute>
    <div className="restaurant-dash">
        

      <div class="container" style={{paddingTop: '6rem'}}>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
        </div>
        <div class="row">
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
  <div class="col-xl-3 col-md-6 mb-4">
    <div class={`card border-left-${classname} shadow h-100 py-"`}>
      <div class="card-body">
        <div class="row no-gutters align-items-center">
          <div class="col mr-2">
            <div
              class={`text-xs font-weight-bold text-${classname} text-uppercase mb-1`}
            >
              {title}
            </div>
            <div class="h5 mb-0 font-weight-bold text-gray-800">${total}</div>
          </div>
          <div class="col-auto">
            <i class={icon}></i>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RestaurantDash;
