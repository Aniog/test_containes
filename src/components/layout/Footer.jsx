import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-velmora-dark text-[#DEDBD5] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.2em] uppercase text-white mb-6 block">
              Velmora
            </Link>
            <p className="text-sm font-light leading-relaxed opacity-80">
              Demi-fine gold jewelry crafted to be treasured. Embodying quiet luxury for everyday elegance.
            </p>
          </div>

          {/* Links Cols */}
          <div>
            <h4 className="uppercase tracking-[0.2em] text-xs font-semibold text-white mb-6">Shop</h4>
            <ul className="space-y-4 text-sm opacity-80">
              <li><Link to="/shop" className="hover:text-white transition-colors">All Jewelry</Link></li>
              <li><Link to="/collections/earrings" className="hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/collections/necklaces" className="hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/collections/huggies" className="hover:text-white transition-colors">Huggies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase tracking-[0.2em] text-xs font-semibold text-white mb-6">Help</h4>
            <ul className="space-y-4 text-sm opacity-80">
              <li><Link to="#" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Jewelry Care</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase tracking-[0.2em] text-xs font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-4 text-sm opacity-80">
              <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-white transition-colors">Journal</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Stockists</Link></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs opacity-60">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;