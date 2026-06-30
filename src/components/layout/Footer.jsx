import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-serif tracking-widest font-bold block mb-6">
              VELMORA
            </Link>
            <p className="text-primary-foreground/70 max-w-md font-light">
              Quiet luxury and demi-fine gold jewelry for the modern woman. 
              Designed to be layered, lived in, and treasured.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-primary-foreground hover:text-gold transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-primary-foreground hover:text-gold transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-primary-foreground hover:text-gold transition-colors"><Twitter size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6">Shop</h4>
            <ul className="space-y-3 text-sm font-light text-primary-foreground/80">
              <li><Link to="/collection" className="hover:text-gold transition-colors">All Jewelry</Link></li>
              <li><Link to="/collection?category=earrings" className="hover:text-gold transition-colors">Earrings</Link></li>
              <li><Link to="/collection?category=necklaces" className="hover:text-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/collection?category=huggies" className="hover:text-gold transition-colors">Huggies</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6">Help</h4>
            <ul className="space-y-3 text-sm font-light text-primary-foreground/80">
              <li><Link to="#" className="hover:text-gold transition-colors">FAQ</Link></li>
              <li><Link to="#" className="hover:text-gold transition-colors">Shipping & Returns</Link></li>
              <li><Link to="#" className="hover:text-gold transition-colors">Jewelry Care</Link></li>
              <li><Link to="#" className="hover:text-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="#" className="hover:text-primary-foreground">Privacy Policy</Link>
            <Link to="#" className="hover:text-primary-foreground">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
