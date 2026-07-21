import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#F9F7F2] border-t border-[#E5E2DA] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-0">
        {/* Brand */}
        <div className="flex flex-col space-y-6">
          <Link to="/" className="text-2xl font-serif tracking-widest text-[#1C1C1C]">
            VELMORA
          </Link>
          <div className="flex space-x-6">
            <Instagram size={20} className="text-[#555555] hover:text-[#A68A56] cursor-pointer" />
            <Facebook size={20} className="text-[#555555] hover:text-[#A68A56] cursor-pointer" />
            <Twitter size={20} className="text-[#555555] hover:text-[#A68A56] cursor-pointer" />
          </div>
        </div>

        {/* Shop */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-sm font-sans font-semibold uppercase tracking-widest text-[#1C1C1C]">Shop</h4>
          <Link to="/shop" className="text-sm text-[#555555] hover:text-[#A68A56]">All Jewelry</Link>
          <Link to="/shop?category=earrings" className="text-sm text-[#555555] hover:text-[#A68A56]">Earrings</Link>
          <Link to="/shop?category=necklaces" className="text-sm text-[#555555] hover:text-[#A68A56]">Necklaces</Link>
          <Link to="/shop?category=huggies" className="text-sm text-[#555555] hover:text-[#A68A56]">Huggies</Link>
        </div>

        {/* Help */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-sm font-sans font-semibold uppercase tracking-widest text-[#1C1C1C]">Help</h4>
          <Link to="/shipping" className="text-sm text-[#555555] hover:text-[#A68A56]">Shipping & Returns</Link>
          <Link to="/care" className="text-sm text-[#555555] hover:text-[#A68A56]">Materials & Care</Link>
          <Link to="/contact" className="text-sm text-[#555555] hover:text-[#A68A56]">Contact Us</Link>
          <Link to="/faq" className="text-sm text-[#555555] hover:text-[#A68A56]">FAQ</Link>
        </div>

        {/* Company */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-sm font-sans font-semibold uppercase tracking-widest text-[#1C1C1C]">Company</h4>
          <Link to="/about" className="text-sm text-[#555555] hover:text-[#A68A56]">Our Story</Link>
          <Link to="/journal" className="text-sm text-[#555555] hover:text-[#A68A56]">Journal</Link>
          <Link to="/privacy" className="text-sm text-[#555555] hover:text-[#A68A56]">Privacy Policy</Link>
          <Link to="/terms" className="text-sm text-[#555555] hover:text-[#A68A56]">Terms of Service</Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-[#E5E2DA] flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] text-[#888888] uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
        <div className="flex space-x-6">
          <span>Visa</span>
          <span>Mastercard</span>
          <span>Apple Pay</span>
          <span>Shop Pay</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
