import React, { useContext, useEffect, useState } from 'react';
import './allFood.css';
import Sidebar from '../../../components/sidebar/Sidebar';
import RestaurantRoute from '../../../routes/RestaurantRoute';
import { dbObject } from '../../../helper/api';
import { AppContext } from '../../../context/AppContext';

const AllFoods = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const { user } = useContext(AppContext);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    const results = data.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    setData(results);
  };

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

  useEffect(() => {
    if (searchTerm === '') {
      getData();
    }
  }, [searchTerm]);

  return (
    <RestaurantRoute>
      <div className="restaurant-dash">

        <div className="container" style={{ paddingTop: '6rem' }}>
          <div class="container-fluid">
            <h1 class="h3 mb-2 text-gray-800">All Items</h1>
            <p class="mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Provident, necessitatibus?.
            </p>

            <div class="card shadow mb-4">
              <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">
                  DataTables Example
                </h6>
              </div>

              <div class="row mt-3 mx-1">
                
                <div class="col-sm-12 col-md-6">
                  <div id="dataTable_filter" class="dataTables_filter">
                    <input
                      type="search"
                      value={searchTerm}
                      onChange={handleSearch}
                      class="form-control form-control-sm"
                      placeholder="Search..."
                      aria-controls="dataTable"
                    />
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
                              <td>
                                <div className="btn-group d-flex">
                                  <button type="button" class="btn btn-warning">
                                    <i class="bi bi-pencil-square"></i> Update
                                  </button>
                                  <button type="button" class="btn btn-danger">
                                    <i class="bi bi-trash3-fill"></i> Remove
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

export default AllFoods;
