import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1, paddingTop: '80px' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;