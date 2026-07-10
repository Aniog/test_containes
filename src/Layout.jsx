import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import CartDrawer from './components/cart/CartDrawer';

const Layout = () => {
  return (
    <Fragment>
      <CartDrawer />
      <Outlet />
    </Fragment>
  );
};

export default Layout;
