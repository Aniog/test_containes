import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';
import ScrollToTop from './components/ScrollToTop';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <CartDrawer />
      <main className="flex-grow">
        <Outlet />
      </main>
      
      {/* Simple Footer */}
      <footer className="bg-brand-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-serif text-3xl tracking-widest uppercase mb-6 text-brand-gold">Velmora</h2>
            <p className="text-brand-sand max-w-sm leading-relaxed mb-6 font-light">
              Quiet luxury designed for everyday elegance. Demi-fine gold jewelry that feels as exceptional as it looks.
            </p>
            <div className="flex space-x-6 text-brand-sand">
              <span className="cursor-pointer hover:text-brand-gold transition duration-200 uppercase tracking-wider text-xs">Instagram</span>
              <span className="cursor-pointer hover:text-brand-gold transition duration-200 uppercase tracking-wider text-xs">Pinterest</span>
              <span className="cursor-pointer hover:text-brand-gold transition duration-200 uppercase tracking-wider text-xs">TikTok</span>
            </div>
          </div>
          <div>
            <h3 className="font-serif tracking-widest uppercase mb-6 text-brand-gold text-lg">Shop</h3>
            <ul className="space-y-3 font-light text-brand-sand">
              <li><a href="#" className="hover:text-white transition duration-200">Earrings</a></li>
              <li><a href="#" className="hover:text-white transition duration-200">Necklaces</a></li>
              <li><a href="#" className="hover:text-white transition duration-200">Huggies</a></li>
              <li><a href="#" className="hover:text-white transition duration-200">All Collections</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif tracking-widest uppercase mb-6 text-brand-gold text-lg">Assistance</h3>
            <ul className="space-y-3 font-light text-brand-sand">
              <li><a href="#" className="hover:text-white transition duration-200">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-white transition duration-200">Jewelry Care</a></li>
              <li><a href="#" className="hover:text-white transition duration-200">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition duration-200">FAQ</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-brand-gray/30 text-xs text-brand-gray flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-white transition duration-200">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;