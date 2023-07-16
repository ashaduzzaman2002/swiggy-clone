import React, { useContext, useEffect, useState } from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';
import Bird from '../../assets/bird_2.jpg';
import { AppContext } from '../../context/AppContext';

function Sidebar({ brandPath, menu }) {
  const [toggle, setToggle] = useState(false);
  const { pathname } = window.location;
  const { isLogin, loggout, user } = useContext(AppContext);

  return (
    <div className="sidebar">
      <div
        className={`d-flex flex-column flex-shrink-0 p-3 sidebar-side ${
          !toggle && 'hide'
        }`}
        style={{ width: 280, minHeight: '100vh' }}
      >
        <Link
          onClick={() => setToggle(false)}
          to={brandPath}
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <img
            width={60}
            style={{ borderRadius: '50%', marginRight: '1rem' }}
            src={Bird}
            alt=""
          />
          <span className="fs-4">Restaurant</span>
        </Link>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          {menu?.map((item) => (
            <li key={item.title}>
              <Link
                onClick={() => setToggle(false)}
                to={item.path}
                className={`nav-link ${pathname === item.path && 'active'}`}
              >
                <i style={{ marginRight: 10 }} className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          ))}


          <li>
            <Link
              onClick={() => setToggle(false)}
              to="/"
              className="nav-link link-body-emphasis"
              aria-current="page"
            >
              <i style={{ marginRight: 10 }} className="bi bi-house"></i>
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
          <i className="fa fa-bars"></i>
        </button>

        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>{user?.username}</strong>
          </a>
          <ul className="dropdown-menu text-small shadow">
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            {user && isLogin && (
              <li>
                <button onClick={loggout} className="dropdown-item" href="#">
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
