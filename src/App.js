import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './screens/home/Home';
import Search from './screens/search/Search';
import Restaurants from './screens/menu/Restaurants';
import NotFoundPage from './screens/404page/404Page';
import Menu from './screens/menu/Menu';
import Welcome from './screens/welcome/Welcome';
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';
import RestaurantDash from './screens/RestaurantOwner/Dashboard/RestaurantDash';
import Login from './screens/auth/Login';
import PublicRoute from './routes/PublicRoute';
import Cart from './screens/cart/Cart';
import Order from './screens/RestaurantOwner/Order/Order';
import AllFoods from './screens/RestaurantOwner/AllFood/AllFoods';
import AddFood from './screens/RestaurantOwner/AddFood/AddFood';
import Item from './screens/menu/Item';
import AdminDash from './screens/admin/Dashboard/AdminDash';
import AllRestaurant from './screens/admin/AllRestaurant/AllRestaurant';
import AddRestaurant from './screens/admin/AddRestaurant/AddRestaurant';

function App() {
  return (
    <>
      <Routes>
        <Route path="/welcome" element={<Welcome />} />

        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/search"
          element={
            <Layout>
              <Search />
            </Layout>
          }
        />
        <Route
          path="/menu/:city"
          element={
            <>
              <Navbar />
              <Restaurants />
              <Footer />
            </>
          }
        />
        <Route
          path="/menu/restaurant/:restaurant"
          element={
            <>
              <Navbar />
              <Menu />
              <Footer />
            </>
          }
        />

        <Route
          path="/cart"
          element={
            <>
              <Navbar />
              <Cart />
              <Footer />
            </>
          }
        />

        <Route path='/menu/item/:item_id' 
        element= {
          <>
              <Navbar />
              <Item />
              <Footer />
            </>
        }
          />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Navbar />
              <Login />
              <Footer />
            </PublicRoute>
          }
        />
        <Route
          path="/restaurant"
          element={<Navigate to={'/restaurant/dashboard'} />}
        />

        <Route path="/restaurant/dashboard" element={<RestaurantDash />} />
        <Route path="/restaurant/order" element={<Order />} />
        <Route path="/restaurant/items" element={<AllFoods />} />
        <Route path="/restaurant/add-items" element={<AddFood />} />


        <Route
          path="/admin"
          element={<Navigate to={'/admin/dashboard'} />}
        />

        <Route path="/admin/dashboard" element={<AdminDash />} />
        <Route path="/admin/all-restaurant" element={<AllRestaurant />} />
        <Route path="/admin/add-restaurant" element={<AddRestaurant />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

const Layout = ({ children }) => {
  const { city } = useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (!city)
      return navigate('/welcome', { state: { from: location.pathname } });
  }, [city, navigate]);

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};


export default App;
