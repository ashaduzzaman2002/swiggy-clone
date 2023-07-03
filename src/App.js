import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
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
            <Footer /></>
          }
        />
        <Route
          path="/menu/:city/:restaurant"
          element={
           <>
            <Navbar />
              <Menu />
            <Footer /></>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

const Layout = ({ children }) => {
  const { city } = useContext(AppContext);
  const navigate = useNavigate()
  const location = useLocation()
  useEffect(() => {
    if(!city) return navigate('/welcome', { state: { from: location.pathname } })
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
