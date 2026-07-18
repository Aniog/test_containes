import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#1a1612] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-xl tracking-[0.2em] text-white">
              VELMORA
            </Link>
            <p className="text-sm text-white/50 mt-4 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for everyday luxury. Designed in Stockholm, worn worldwide.
            </p>
            <div className="flex gap-4 mt-6">
              <SocialLink href="#">IG</SocialLink>
              <SocialLink href="#">FB</SocialLink>
              <SocialLink href="#">PT</SocialLink>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-[0.12em] uppercase text-white/60 mb-4">Shop</h4>
            <div className="flex flex-col gap-2.5">
              <FooterLink to="/shop">All Jewelry</FooterLink>
              <FooterLink to="/shop">Earrings</FooterLink>
              <FooterLink to="/shop">Necklaces</FooterLink>
              <FooterLink to="/shop">Huggies</FooterLink>
              <FooterLink to="/shop">Gift Sets</FooterLink>
            </div>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-[0.12em] uppercase text-white/60 mb-4">Help</h4>
            <div className="flex flex-col gap-2.5">
              <FooterLink to="/">Shipping & Returns</FooterLink>
              <FooterLink to="/">Size Guide</FooterLink>
              <FooterLink to="/">Jewelry Care</FooterLink>
              <FooterLink to="/">FAQ</FooterLink>
              <FooterLink to="/">Contact</FooterLink>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-[0.12em] uppercase text-white/60 mb-4">Company</h4>
            <div className="flex flex-col gap-2.5">
              <FooterLink to="/">About Us</FooterLink>
              <FooterLink to="/">Sustainability</FooterLink>
              <FooterLink to="/">Journal</FooterLink>
              <FooterLink to="/">Press</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-white/40">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
            <span>Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ to, children }) {
  return (
    <Link
      to={to}
      className="text-sm text-white/50 hover:text-accent transition-colors duration-300"
    >
      {children}
    </Link>
  );
}

function SocialLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-xs tracking-widest text-white/50 hover:text-accent transition-colors duration-300"
      onClick={(e) => e.preventDefault()}
    >
      {children}
    </a>
  );
}
