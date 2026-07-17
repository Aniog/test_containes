import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 px-4 md:px-8 mt-auto">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="font-serif text-2xl tracking-widest uppercase mb-6 block">
            VELMORA
          </Link>
          <p className="text-sm text-background/70 font-light leading-relaxed max-w-xs">
            Quiet luxury demi-fine jewelry. Crafted to be treasured, worn to be lived in.
          </p>
        </div>

        <div>
          <h4 className="font-serif tracking-widest uppercase text-sm mb-6">Shop</h4>
          <ul className="space-y-3 text-sm text-background/70 font-light">
            <li><Link to="/shop" className="hover:text-background transition-colors">All Jewelry</Link></li>
            <li><Link to="/shop/earrings" className="hover:text-background transition-colors">Earrings</Link></li>
            <li><Link to="/shop/necklaces" className="hover:text-background transition-colors">Necklaces</Link></li>
            <li><Link to="/shop/huggies" className="hover:text-background transition-colors">Huggies</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif tracking-widest uppercase text-sm mb-6">Help</h4>
          <ul className="space-y-3 text-sm text-background/70 font-light">
            <li><Link to="/faq" className="hover:text-background transition-colors">FAQ</Link></li>
            <li><Link to="/shipping" className="hover:text-background transition-colors">Shipping & Returns</Link></li>
            <li><Link to="/care" className="hover:text-background transition-colors">Jewelry Care</Link></li>
            <li><Link to="/contact" className="hover:text-background transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif tracking-widest uppercase text-sm mb-6">Company</h4>
          <ul className="space-y-3 text-sm text-background/70 font-light">
            <li><Link to="/about" className="hover:text-background transition-colors">Our Story</Link></li>
            <li><Link to="/journal" className="hover:text-background transition-colors">Journal</Link></li>
            <li><Link to="/terms" className="hover:text-background transition-colors">Terms of Service</Link></li>
            <li><Link to="/privacy" className="hover:text-background transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center text-xs text-background/50 font-light">
        <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <span>Instagram</span>
          <span>Pinterest</span>
          <span>TikTok</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;