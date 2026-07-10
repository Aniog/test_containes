import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          {/* Logo & Description */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo">VELMORA</Link>
            <p className="footer__tagline">
              Demi-fine jewelry crafted to be treasured. 
              Premium quality, accessible luxury.
            </p>
            <div className="footer__social">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={20} strokeWidth={1.5} />
              </a>
              <a href="mailto:hello@velmora.com" aria-label="Email">
                <Mail size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div className="footer__column">
            <h4 className="footer__heading">Shop</h4>
            <ul className="footer__list">
              <li><Link to="/shop">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies">Huggies</Link></li>
              <li><Link to="/collections">Collections</Link></li>
            </ul>
          </div>

          {/* Help Links */}
          <div className="footer__column">
            <h4 className="footer__heading">Help</h4>
            <ul className="footer__list">
              <li><Link to="/shipping">Shipping & Returns</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/care">Jewelry Care</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/track-order">Track Order</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="footer__column">
            <h4 className="footer__heading">Company</h4>
            <ul className="footer__list">
              <li><Link to="/about">Our Story</Link></li>
              <li><Link to="/journal">Journal</Link></li>
              <li><Link to="/sustainability">Sustainability</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/press">Press</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {currentYear} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="footer__payment">
            <span className="footer__payment-label">We accept</span>
            <div className="footer__payment-icons">
              <span className="footer__payment-icon">Visa</span>
              <span className="footer__payment-icon">Mastercard</span>
              <span className="footer__payment-icon">Amex</span>
              <span className="footer__payment-icon">PayPal</span>
              <span className="footer__payment-icon">Apple Pay</span>
            </div>
          </div>
          <div className="footer__legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}