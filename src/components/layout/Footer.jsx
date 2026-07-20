import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-velmora-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.15em] font-medium text-white">VELMORA</Link>
            <p className="mt-4 text-sm text-white/50 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, and designed for everyday elegance.
            </p>
            <div className="flex gap-5 mt-6 text-xs tracking-widest uppercase text-white/40">
              <a href="#" className="hover:text-velmora-gold-light transition-colors">Instagram</a>
              <a href="#" className="hover:text-velmora-gold-light transition-colors">Facebook</a>
              <a href="#" className="hover:text-velmora-gold-light transition-colors">Pinterest</a>
            </div>
          </div>
          <div>
            <h4 className="font-serif text-base tracking-wide mb-4 text-white/80">Shop</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li><Link to="/shop" className="hover:text-velmora-gold-light transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-velmora-gold-light transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-velmora-gold-light transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-velmora-gold-light transition-colors">Huggies</Link></li>
              <li><Link to="/shop?category=Sets" className="hover:text-velmora-gold-light transition-colors">Gift Sets</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-base tracking-wide mb-4 text-white/80">Help</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li><a href="#" className="hover:text-velmora-gold-light transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-velmora-gold-light transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-velmora-gold-light transition-colors">Care Instructions</a></li>
              <li><a href="#" className="hover:text-velmora-gold-light transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-velmora-gold-light transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-base tracking-wide mb-4 text-white/80">Company</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li><a href="#" className="hover:text-velmora-gold-light transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-velmora-gold-light transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-velmora-gold-light transition-colors">Journal</a></li>
              <li><a href="#" className="hover:text-velmora-gold-light transition-colors">Wholesale</a></li>
              <li><a href="#" className="hover:text-velmora-gold-light transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-6 font-sans tracking-wide">
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
