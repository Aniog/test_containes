import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-brand-border bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-semibold tracking-wide text-brand-ink">
              VELMORA
            </Link>
            <p className="mt-3 text-sm text-brand-muted leading-relaxed">
              Quiet luxury demi-fine jewelry, crafted to be treasured.
            </p>
            <div className="mt-5 flex items-center gap-4">
              <a href="#" className="text-brand-muted hover:text-brand-accent transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-brand-muted hover:text-brand-accent transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-brand-muted hover:text-brand-accent transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-brand-ink">Shop</h4>
            <ul className="mt-4 space-y-2">
              <li><Link to="/shop?category=earrings" className="text-sm text-brand-muted hover:text-brand-accent transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-brand-muted hover:text-brand-accent transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-brand-muted hover:text-brand-accent transition-colors">Huggies</Link></li>
              <li><Link to="/shop?category=sets" className="text-sm text-brand-muted hover:text-brand-accent transition-colors">Sets</Link></li>
              <li><Link to="/shop" className="text-sm text-brand-muted hover:text-brand-accent transition-colors">All</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-brand-ink">Help</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-sm text-brand-muted hover:text-brand-accent transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-brand-muted hover:text-brand-accent transition-colors">Materials & Care</a></li>
              <li><a href="#" className="text-sm text-brand-muted hover:text-brand-accent transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm text-brand-muted hover:text-brand-accent transition-colors">Contact</a></li>
              <li><a href="#" className="text-sm text-brand-muted hover:text-brand-accent transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-brand-ink">Company</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-sm text-brand-muted hover:text-brand-accent transition-colors">Our Story</a></li>
              <li><a href="#" className="text-sm text-brand-muted hover:text-brand-accent transition-colors">Journal</a></li>
              <li><a href="#" className="text-sm text-brand-muted hover:text-brand-accent transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-brand-muted hover:text-brand-accent transition-colors">Press</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-brand-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-subtle">© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs text-brand-subtle">
            <a href="#" className="hover:text-brand-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
