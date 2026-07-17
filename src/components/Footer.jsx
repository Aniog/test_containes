import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="font-serif text-2xl tracking-[0.3em] uppercase">Velmora</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Direct-to-consumer demi-fine jewelry. Crafted to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-serif text-lg mb-6 tracking-wide">Shop</h4>
            <ul className="space-y-4">
              <li><Link to="/shop" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-serif text-lg mb-6 tracking-wide">Help</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider">Shipping & Returns</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider">Jewelry Care</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-lg mb-6 tracking-wide">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider">Our Story</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider">Journal</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider">Sustainability</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-xs uppercase tracking-widest">Instagram</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-xs uppercase tracking-widest">Pinterest</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-xs uppercase tracking-widest">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
