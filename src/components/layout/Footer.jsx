import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-background/20 pb-12">
          
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest uppercase font-semibold mb-6 block">
              VELMORA
            </Link>
            <p className="text-sm text-background/80 font-light mt-4 max-w-sm leading-relaxed">
              Quiet luxury crafted for the modern individual. Demi-fine jewelry designed to be treasured everyday.
            </p>
          </div>

          <div>
            <h4 className="font-serif uppercase tracking-widest text-sm mb-6">Shop</h4>
            <ul className="space-y-4 text-sm text-background/80 font-light">
              <li><Link to="/shop" className="hover:text-white transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-white transition-colors">Huggies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif uppercase tracking-widest text-sm mb-6">Help</h4>
            <ul className="space-y-4 text-sm text-background/80 font-light">
              <li><Link to="#" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Jewelry Care</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif uppercase tracking-widest text-sm mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-background/80 font-light">
              <li><Link to="#" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Journal</Link></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-background/60">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-white transition-colors">Instagram</Link>
            <Link to="#" className="hover:text-white transition-colors">Pinterest</Link>
            <Link to="#" className="hover:text-white transition-colors">TikTok</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
