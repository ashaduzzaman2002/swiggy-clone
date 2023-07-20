import React, { useContext, useEffect, useState } from 'react';
import './restaurantDash.css';
import RestaurantRoute from '../../../routes/RestaurantRoute';
import { AppContext } from '../../../context/AppContext';
import { dbObject } from '../../../helper/api';

const RestaurantDash = () => {

  const [data, setData] = useState([]);
  const { user } = useContext(AppContext);


  const getData = async () => {
    try {
      const { data } = await dbObject.get(
        `/restaurants/restaurant/${user?.restaurant}/foods`
      );
      setData(data.foods);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, [user]);

  return (
    <RestaurantRoute>
      <div className="restaurant-dash">
        <div className="container" style={{ paddingTop: '6rem' }}>
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

          <div>
            <h3 className="mt-4">Pending Order</h3>

            <div class="card shadow mb-4">
              <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">
                  Pernding orders
                </h6>
              </div>

              <div class="row mt-3 mx-1">
                
                <div class="col-sm-12 col-md-6">
                  <div id="dataTable_filter" class="dataTables_filter">
                    <input
                      type="search"
                     
                      class="form-control form-control-sm"
                      placeholder="Search..."
                      aria-controls="dataTable"
                    />
                  </div>
                </div>

                <div class="col-sm-12 col-md-6">
                  <div id="dataTable_filter" class="dataTables_filter">
                    <button className='btn btn-primary'>Add Order</button>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table
                    class="table table-bordered"
                    id="dataTable"
                    width="100%"
                    cellspacing="0"
                  >
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Type</th>
                        <th>Price</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      {data?.length
                        ? data.map((item, i) => (
                            <tr key={i}>
                              <td style={{ width: 120 }}>
                                <img
                                  className="m-auto w-100"
                                  src={item.img}
                                  alt=""
                                />
                              </td>
                              <td>{item?.name}</td>
                              <td>{item.category}</td>
                              <td>{item.type}</td>
                              <td>₹ {item.price}</td>
                              <td style={{maxWidth: '200px'}}>
                                <div className="btn-group d-flex" style={{maxWidth: '200px'}}>
                                  <button type="button" class="btn btn-warning d-flex align-items-center gap-1" style={{fontSize: 12}}>
                                    <i class="bi bi-pencil-square"></i> Pending
                                  </button>
                                  <button type="button" class="btn btn-danger d-flex align-items-center gap-1" style={{fontSize: 12}}>
                                    <i class="bi bi-trash3-fill"></i> Processing
                                  </button>

                                  <button type="button" class="btn btn-success d-flex align-items-center gap-1" style={{fontSize: 12}}>
                                    <i class="bi bi-trash3-fill"></i> Complete
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))
                        : 'No data found'}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
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
            <div className="h5 mb-0 font-weight-bold text-gray-800">
              ${total}
            </div>
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
