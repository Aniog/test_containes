import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="font-serif text-2xl tracking-[0.2em] font-medium text-background">
                VELMORA
              </span>
            </Link>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed font-light">
              Crafting timeless, demi-fine jewelry designed to be lived in, layered, and loved for a lifetime.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif uppercase tracking-widest text-sm mb-6 text-gray-300">Shop</h4>
            <ul className="space-y-4">
              <li><Link to="/shop?category=earrings" className="text-gray-400 hover:text-white transition-colors text-sm font-light">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-gray-400 hover:text-white transition-colors text-sm font-light">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-gray-400 hover:text-white transition-colors text-sm font-light">Huggies</Link></li>
              <li><Link to="/shop?category=sets" className="text-gray-400 hover:text-white transition-colors text-sm font-light">Gift Sets</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif uppercase tracking-widest text-sm mb-6 text-gray-300">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm font-light">Our Story</Link></li>
              <li><Link to="/journal" className="text-gray-400 hover:text-white transition-colors text-sm font-light">Journal</Link></li>
              <li><Link to="/materials" className="text-gray-400 hover:text-white transition-colors text-sm font-light">Materials & Care</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm font-light">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif uppercase tracking-widest text-sm mb-6 text-gray-300">Help</h4>
            <ul className="space-y-4">
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors text-sm font-light">FAQ</Link></li>
              <li><Link to="/shipping" className="text-gray-400 hover:text-white transition-colors text-sm font-light">Shipping & Returns</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors text-sm font-light">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm font-light">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs font-light">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm font-serif italic">Instagram</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm font-serif italic">Pinterest</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm font-serif italic">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;