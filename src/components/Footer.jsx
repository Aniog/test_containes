import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-foreground text-white pt-16 pb-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link to="/" className="font-serif text-3xl tracking-[0.2em] uppercase block mb-6">
              Velmora
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for the everyday elegant. Subtle luxury, made to be treasured.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-lg tracking-wider uppercase mb-6">Shop</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/collection" className="hover:text-white transition-colors">All Jewelry</Link></li>
              <li><Link to="/collection" className="hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/collection" className="hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/collection" className="hover:text-white transition-colors">Huggies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg tracking-wider uppercase mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Journal</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Materials</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg tracking-wider uppercase mb-6">Help</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Jewelry Care</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Terms & Privacy</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="w-8 h-5 bg-gray-800 rounded flex items-center justify-center text-[10px] text-gray-400">VISA</span>
            <span className="w-8 h-5 bg-gray-800 rounded flex items-center justify-center text-[10px] text-gray-400">MC</span>
            <span className="w-8 h-5 bg-gray-800 rounded flex items-center justify-center text-[10px] text-gray-400">AMEX</span>
          </div>
        </div>
      </div>
    </footer>
  );
}