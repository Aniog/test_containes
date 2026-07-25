import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-velmora-bg border-t border-velmora-border/50 pt-20 pb-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.25em] text-velmora-text block mb-6">
              VELMORA
            </Link>
            <p className="text-velmora-text/70 text-sm leading-relaxed max-w-xs">
              Demi-fine jewelry crafted to be treasured. Everyday luxury designed for the modern muse.
            </p>
          </div>

          <div>
            <h4 className="font-serif tracking-widest uppercase mb-6 text-sm">Shop</h4>
            <ul className="space-y-4 text-sm text-velmora-text/70">
              <li><Link to="/shop" className="hover:text-velmora-accent transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="hover:text-velmora-accent transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-velmora-accent transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-velmora-accent transition-colors">Huggies</Link></li>
              <li><Link to="/shop/gifts" className="hover:text-velmora-accent transition-colors">Gifts</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif tracking-widest uppercase mb-6 text-sm">Help</h4>
            <ul className="space-y-4 text-sm text-velmora-text/70">
              <li><a href="#" className="hover:text-velmora-accent transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-velmora-accent transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-velmora-accent transition-colors">Jewelry Care</a></li>
              <li><a href="#" className="hover:text-velmora-accent transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif tracking-widest uppercase mb-6 text-sm">Company</h4>
            <ul className="space-y-4 text-sm text-velmora-text/70">
              <li><Link to="/about" className="hover:text-velmora-accent transition-colors">Our Story</Link></li>
              <li><a href="#" className="hover:text-velmora-accent transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-velmora-accent transition-colors">Journal</a></li>
              <li><a href="#" className="hover:text-velmora-accent transition-colors">Careers</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-velmora-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-velmora-text/50">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-velmora-text/50">
            <a href="#" className="hover:text-velmora-text transition-colors">Terms</a>
            <a href="#" className="hover:text-velmora-text transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
