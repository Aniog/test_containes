import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wide">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-[#9A9A9A] leading-relaxed">
              Crafted to be treasured. Demi-fine jewelry for the modern woman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-sans font-medium tracking-widest uppercase mb-4">
              Shop
            </h4>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm text-[#9A9A9A] hover:text-[#FAF7F2] transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop" className="text-sm text-[#9A9A9A] hover:text-[#FAF7F2] transition-colors">Earrings</Link></li>
              <li><Link to="/shop" className="text-sm text-[#9A9A9A] hover:text-[#FAF7F2] transition-colors">Necklaces</Link></li>
              <li><Link to="/shop" className="text-sm text-[#9A9A9A] hover:text-[#FAF7F2] transition-colors">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs font-sans font-medium tracking-widest uppercase mb-4">
              Help
            </h4>
            <ul className="space-y-3">
              <li><span className="text-sm text-[#9A9A9A]">Shipping & Returns</span></li>
              <li><span className="text-sm text-[#9A9A9A]">Size Guide</span></li>
              <li><span className="text-sm text-[#9A9A9A]">Care Instructions</span></li>
              <li><span className="text-sm text-[#9A9A9A]">Contact Us</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-sans font-medium tracking-widest uppercase mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              <li><span className="text-sm text-[#9A9A9A]">Our Story</span></li>
              <li><span className="text-sm text-[#9A9A9A]">Sustainability</span></li>
              <li><span className="text-sm text-[#9A9A9A]">Press</span></li>
              <li><span className="text-sm text-[#9A9A9A]">Careers</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#9A9A9A]">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-[#9A9A9A] font-medium">Visa</span>
            <span className="text-xs text-[#9A9A9A] font-medium">Mastercard</span>
            <span className="text-xs text-[#9A9A9A] font-medium">Amex</span>
            <span className="text-xs text-[#9A9A9A] font-medium">PayPal</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-[#9A9A9A] hover:text-[#FAF7F2] cursor-pointer transition-colors">Instagram</span>
            <span className="text-xs text-[#9A9A9A] hover:text-[#FAF7F2] cursor-pointer transition-colors">Pinterest</span>
            <span className="text-xs text-[#9A9A9A] hover:text-[#FAF7F2] cursor-pointer transition-colors">TikTok</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
