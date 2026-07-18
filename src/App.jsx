import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ProductDetail from './pages/ProductDetail';
import ShopPage from './pages/ShopPage';

function App() {
  return React.createElement(Layout, null,
    React.createElement(Routes, null,
      React.createElement(Route, { path: "/", element: React.createElement(HomePage) }),
      React.createElement(Route, { path: "/shop", element: React.createElement(ShopPage) }),
      React.createElement(Route, { path: "/product/:id", element: React.createElement(ProductDetail) })
    )
  );
}

export default App;
