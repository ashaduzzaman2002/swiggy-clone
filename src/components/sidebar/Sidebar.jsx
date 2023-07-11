import React, { useContext, useEffect, useState } from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';
import Bird from '../../assets/bird_2.jpg';
import { AppContext } from '../../context/AppContext';

function Sidebar({brandPath, menu}) {
  const [toggle, setToggle] = useState(false);
  const { pathname } = window.location;
  const { isLogin, loggout, user } = useContext(AppContext);

  return (
    <div className="sidebar">
      <div
        class={`d-flex flex-column flex-shrink-0 p-3 sidebar-side ${
          !toggle && 'hide'
        }`}
        style={{ width: 280, minHeight: '100vh' }}
      >
        <Link
          onClick={() => setToggle(false)}
          to={brandPath}
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <img
            width={60}
            style={{ borderRadius: '50%', marginRight: '1rem' }}
            src={Bird}
            alt=""
          />
          <span class="fs-4">Restaurant</span>
        </Link>
        <hr />
        <ul class="nav nav-pills flex-column mb-auto">
          {
            menu?.map(item => (
<li>
            <Link
              onClick={() => setToggle(false)}
              to={item.path}
              class={`nav-link ${
                pathname === item.path && 'active'
              }`}
            >
              <i style={{ marginRight: 10 }} class={item.icon}></i>
              {item.title}
            </Link>
          </li>
            ))
          }
          
          {/* <li>
            <Link
              onClick={() => setToggle(false)}
              to="/restaurant/order"
              class={`nav-link ${pathname === '/restaurant/order' && 'active'}`}
            >
              <i style={{ marginRight: 10 }} class="bi bi-table"></i>
              Orders
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setToggle(false)}
              to="/restaurant/items"
              class={`nav-link ${pathname === '/restaurant/items' && 'active'}`}
            >
              <i style={{ marginRight: 10 }} class="bi bi-grid-fill"></i>
              Items
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setToggle(false)}
              to="/restaurant/add-items"
              class={`nav-link ${
                pathname === '/restaurant/add-items' && 'active'
              }`}
            >
              <i style={{ marginRight: 10 }} class="bi bi-building-add"></i>
              Add Items
            </Link>
          </li> */}

          <li>
            <Link
              onClick={() => setToggle(false)}
              to="/"
              class="nav-link link-body-emphasis"
              aria-current="page"
            >
              <i style={{ marginRight: 10 }} class="bi bi-house"></i>
              Back To Home
            </Link>
          </li>
        </ul>
      </div>

      <nav className="sidebar-nav container-fluid">
        <button
          onClick={() => setToggle(!toggle)}
          className="btn btn-link sidebar-toggle"
        >
          <i class="fa fa-bars"></i>
        </button>

        <div class="dropdown">
          <a
            href="#"
            class="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              class="rounded-circle me-2"
            />
            <strong>{user?.username}</strong>
          </a>
          <ul class="dropdown-menu text-small shadow">
            <li>
              <a class="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            {user && isLogin && (
              <li>
                <button onClick={loggout} class="dropdown-item" href="#">
                  Sign out
                </button>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
