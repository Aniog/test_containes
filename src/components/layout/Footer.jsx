import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-primary pt-20 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {/* Brand Info */}
        <div className="space-y-6">
          <Link to="/" className="text-2xl font-serif tracking-[0.2em] font-medium italic">
            VELMORA
          </Link>
          <p className="text-muted-foreground text-sm font-sans leading-relaxed max-w-xs">
            Timeless demi-fine jewelry designed for the modern woman. Crafted with intention, to be treasured for a lifetime.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">Instagram</a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">Pinterest</a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">TikTok</a>
          </div>
        </div>

        {/* Shop Links */}
        <div>
          <h4 className="text-xs uppercase tracking-widest font-sans font-bold mb-6">Shop</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li><Link to="/shop?category=Earrings" className="hover:text-accent transition-colors">Earrings</Link></li>
            <li><Link to="/shop?category=Necklaces" className="hover:text-accent transition-colors">Necklaces</Link></li>
            <li><Link to="/shop?category=Huggies" className="hover:text-accent transition-colors">Huggies</Link></li>
            <li><Link to="/collections" className="hover:text-accent transition-colors">Collections</Link></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-xs uppercase tracking-widest font-sans font-bold mb-6">Help</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-accent transition-colors">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Materials & Care</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Sustainability</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Contact Us</a></li>
          </ul>
        </div>

        {/* Company Info */}
        <div>
          <h4 className="text-xs uppercase tracking-widest font-sans font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-accent transition-colors">Our Story</Link></li>
            <li><Link to="/journal" className="hover:text-accent transition-colors">Journal</Link></li>
            <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-20 pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-sans">
          &copy; {new Date().getFullYear()} VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-4 items-center">
            {/* Payment Icons Placeholder */}
            <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Visa</span>
            <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Mastercard</span>
            <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Amex</span>
            <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Apple Pay</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
