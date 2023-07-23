import React, { useState } from 'react';
import './addFood.css';
import Sidebar from '../../../components/sidebar/Sidebar';
import RestaurantRoute from '../../../routes/RestaurantRoute';
import { dbObject } from '../../../helper/api';

const AddFood = () => {
  const [inputs, setInputs] = useState({
    name: '',
    desc: '',
    file: '',
    price: '',
    type: '',
    category: '',
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const fileUpload = (e) => {
    setInputs({ ...inputs, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);

    try {

      const formatData = new FormData()
      formatData.append('file', inputs.file, inputs.file.name)
      formatData.append('name', inputs.name)
      formatData.append('desc', inputs.desc)
      formatData.append('price', inputs.price)
      formatData.append('type', inputs.type)
      formatData.append('category', inputs.category)
      
      const { data } = await dbObject.post(
        '/restaurants/restaurant/add/food',
        formatData
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <RestaurantRoute>
      <div className="restaurant-dash">
        <div
          className="container"
          style={{ paddingTop: '6rem', paddingBottom: '5rem' }}
        >
          <div class="container-fluid">
            <div className="col-md-6 col-12 m-auto">
              <h1 class="h3 mb-2 text-gray-800">Add Items</h1>
              <p class="mb-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Provident, necessitatibus?.
              </p>
              <div
                className="wow fadeInUp"
                data-wow-delay="0.2s"
                style={{
                  visibility: 'visible',
                  animationSelay: '0.2s',
                  animationName: 'fadeInUp',
                }}
              >
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                  <div className="row">
                    <div className="col-12 mb-3">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="title"
                          placeholder="Title"
                          name="name"
                          onChange={handleChange}
                        />
                        <label htmlFor="title">Title</label>
                      </div>
                    </div>

                    <div className="col-12 mb-3">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="price"
                          placeholder="Price"
                          name="price"
                          onChange={handleChange}
                        />
                        <label htmlFor="price">Price</label>
                      </div>
                    </div>

                    <div className="col-12 mb-3">
                      <div className="form-floating">
                        <select
                          onChange={handleChange}
                          className="form-select"
                          id="type"
                          name="type"
                        >
                          <option value="" disabled selected>
                            Select a type
                          </option>
                          <option value="non-veg">Non Veg</option>
                          <option value="veg">Veg</option>
                        </select>
                        <label htmlFor="type">Type</label>
                      </div>
                    </div>

                    <div className="col-12 mb-3">
                      <div className="form-floating">
                        <select
                          onChange={handleChange}
                          className="form-select"
                          id="category"
                          name="category"
                        >
                          <option value="" disabled selected>
                            Select a type
                          </option>
                          <option value="breakfast">Breakfast</option>
                          <option value="launch">Launch</option>
                          <option value="dinner">Dinner</option>
                        </select>
                        <label htmlFor="type">Category</label>
                      </div>
                    </div>

                    <div className="col-12 mb-3">
                      <div className="form-floating">
                        <input
                          onChange={fileUpload}
                          type="file"
                          className="form-control"
                          id="img"
                          placeholder="Image"
                          name="file"
                        />
                        <label htmlFor="img">Image</label>
                      </div>
                    </div>

                    <div className="col-12 mb-3">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          id="desc"
                          placeholder="Image"
                          name="desc"
                          style={{ height: '150px' }}
                          onChange={handleChange}
                        ></textarea>
                        <label htmlFor="desc">Description</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <button
                        className="btn btn-primary w-100 py-3"
                        type="submit"
                      >
                        Add Item
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RestaurantRoute>
  );
};

export default AddFood;
