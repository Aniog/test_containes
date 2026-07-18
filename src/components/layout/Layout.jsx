import Navbar from './Navbar';
import Footer from './Footer';
import CartDrawer from './CartDrawer';

function Layout({ children }) {
  return React.createElement('div', { className: 'min-h-screen flex flex-col' },
    React.createElement(Navbar, null),
    React.createElement(CartDrawer, null),
    React.createElement('main', { className: 'flex-grow' }, children),
    React.createElement(Footer, null)
  );
}

export default Layout;
