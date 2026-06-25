import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-[#2D2A26] text-[#FAF9F5] pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <h3 className="font-serif text-3xl tracking-widest uppercase mb-4 text-[#Cbb26A]">Velmora</h3>
            <p className="text-[#E5E0D8]/70 font-sans text-sm leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for the modern individual. Quiet luxury designed to be loved and worn everyday.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-[#Cbb26A] mb-6 font-semibold">Shop</h4>
            <ul className="space-y-4 text-sm text-[#E5E0D8]/80 font-sans">
              <li><Link to="/shop" className="hover:text-white transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-white transition-colors">Huggies</Link></li>
              <li><Link to="/collections/bestsellers" className="hover:text-white transition-colors">Bestsellers</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-[#Cbb26A] mb-6 font-semibold">Help</h4>
            <ul className="space-y-4 text-sm text-[#E5E0D8]/80 font-sans">
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/care" className="hover:text-white transition-colors">Jewelry Care</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-[#Cbb26A] mb-6 font-semibold">Company</h4>
            <ul className="space-y-4 text-sm text-[#E5E0D8]/80 font-sans">
              <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-white transition-colors">Journal</Link></li>
              <li><Link to="/sustainability" className="hover:text-white transition-colors">Sustainability</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-[#E5E0D8]/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs text-[#E5E0D8]/50 font-sans">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-[#E5E0D8]/50 font-sans">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}