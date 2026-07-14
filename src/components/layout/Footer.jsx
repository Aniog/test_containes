import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          {/* Brand Col */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.2em] font-light mb-6 block">
              VELMORA
            </Link>
            <p className="text-sm text-background/70 font-light leading-relaxed mb-6">
              Crafted to be treasured. Demi-fine jewelry for everyday elegance.
            </p>
          </div>

          {/* Shop Col */}
          <div className="md:col-span-1">
            <h4 className="font-serif text-lg mb-6 tracking-wide text-background/90">Shop</h4>
            <ul className="space-y-4 text-sm font-light text-background/70">
              <li><Link to="/shop" className="hover:text-background transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="hover:text-background transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-background transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-background transition-colors">Huggies</Link></li>
            </ul>
          </div>

          {/* Help Col */}
          <div className="md:col-span-1">
            <h4 className="font-serif text-lg mb-6 tracking-wide text-background/90">Help</h4>
            <ul className="space-y-4 text-sm font-light text-background/70">
              <li><Link to="/faq" className="hover:text-background transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="hover:text-background transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/care" className="hover:text-background transition-colors">Jewelry Care</Link></li>
              <li><Link to="/contact" className="hover:text-background transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Company Col */}
          <div className="md:col-span-1">
            <h4 className="font-serif text-lg mb-6 tracking-wide text-background/90">Company</h4>
            <ul className="space-y-4 text-sm font-light text-background/70">
              <li><Link to="/about" className="hover:text-background transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-background transition-colors">Journal</Link></li>
              <li><Link to="/sustainability" className="hover:text-background transition-colors">Sustainability</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/50 font-light">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {/* Social blanks */}
            <a href="#" className="text-background/50 hover:text-background transition-colors">Instagram</a>
            <a href="#" className="text-background/50 hover:text-background transition-colors">Pinterest</a>
            <a href="#" className="text-background/50 hover:text-background transition-colors">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  );
}