import { Link } from 'react-router-dom'
import { Instagram, Facebook, Pinterest } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-velmora-charcoal text-velmora-sand">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-xl tracking-widest text-white">
              VELMORA
            </Link>
            <p className="mt-3 text-sm text-velmora-mist leading-relaxed">
              Demi-fine jewelry crafted for everyday elegance. 18K gold plated, hypoallergenic, and designed to be treasured.
            </p>
            <div className="flex items-center space-x-4 mt-5">
              <SocialIcon><Instagram size={17} /></SocialIcon>
              <SocialIcon><Facebook size={17} /></SocialIcon>
              <SocialIcon><Pinterest size={17} /></SocialIcon>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-white mb-4">Shop</h4>
            <ul className="space-y-2.5">
              <FooterLink to="/shop">All Jewelry</FooterLink>
              <FooterLink to="/shop?category=earrings">Earrings</FooterLink>
              <FooterLink to="/shop?category=necklaces">Necklaces</FooterLink>
              <FooterLink to="/shop?category=huggies">Huggies</FooterLink>
              <FooterLink to="/shop?category=gift-sets">Gift Sets</FooterLink>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-white mb-4">Help</h4>
            <ul className="space-y-2.5">
              <FooterLink to="#">Shipping & Returns</FooterLink>
              <FooterLink to="#">Size Guide</FooterLink>
              <FooterLink to="#">Jewelry Care</FooterLink>
              <FooterLink to="#">FAQ</FooterLink>
              <FooterLink to="#">Contact Us</FooterLink>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-white mb-4">Company</h4>
            <ul className="space-y-2.5">
              <FooterLink to="#">Our Story</FooterLink>
              <FooterLink to="#">Sustainability</FooterLink>
              <FooterLink to="#">Journal</FooterLink>
              <FooterLink to="#">Wholesale</FooterLink>
              <FooterLink to="#">Affiliates</FooterLink>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-velmora-taupe/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-velmora-taupe">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center space-x-3 text-xs text-velmora-taupe">
            <span>Visa</span>
            <span className="text-velmora-mist">·</span>
            <span>Mastercard</span>
            <span className="text-velmora-mist">·</span>
            <span>Amex</span>
            <span className="text-velmora-mist">·</span>
            <span>PayPal</span>
            <span className="text-velmora-mist">·</span>
            <span>Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ to, children }) {
  return (
    <li>
      <Link to={to} className="text-sm text-velmora-mist hover:text-white transition-colors">
        {children}
      </Link>
    </li>
  )
}

function SocialIcon({ children }) {
  return (
    <a href="#" className="text-velmora-mist hover:text-velmora-gold transition-colors">
      {children}
    </a>
  )
}