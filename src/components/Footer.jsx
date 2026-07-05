import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="font-serif text-2xl tracking-widest font-medium">
              VELMORA
            </Link>
            <p className="text-muted text-sm max-w-xs leading-relaxed">
              Quiet luxury demi-fine jewelry designed for the modern woman. Timeless pieces to be treasured for a lifetime.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-primary hover:text-accent transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-primary hover:text-accent transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-primary hover:text-accent transition-colors"><Mail size={20} /></a>
            </div>
          </div>

          {/* Shop */}
          <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-medium border-b border-border/50 pb-2">Shop</h4>
            <ul className="space-y-3">
              {['Necklaces', 'Earrings', 'Huggies', 'Gift Sets', 'Journal'].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="text-sm text-muted hover:text-primary transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-medium border-b border-border/50 pb-2">Help</h4>
            <ul className="space-y-3">
              {['Shipping & Returns', 'FAQ', 'Care Guide', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-sm text-muted hover:text-primary transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-medium border-b border-border/50 pb-2">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Ethical Standards', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-sm text-muted hover:text-primary transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <p className="text-[10px] uppercase tracking-widest text-muted">
            © {new Date().getFullYear()} VELMORA FINE JEWELRY. All Rights Reserved.
          </p>
          <div className="flex space-x-6">
             {/* Payment Icons Placeholder */}
             <div className="text-[10px] uppercase tracking-widest text-muted flex space-x-4 opacity-50">
               <span>Visa</span>
               <span>Amex</span>
               <span>Mastercard</span>
               <span>PayPal</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
