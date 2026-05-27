import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen bg-cosmos-dark flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
