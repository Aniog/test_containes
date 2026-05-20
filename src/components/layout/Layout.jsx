import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children, cartCount }) => {
  return (
    <div className="min-h-screen bg-[#0f0f13] text-slate-100">
      <Navbar cartCount={cartCount} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
