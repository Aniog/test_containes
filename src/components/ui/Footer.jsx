import { Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-velmora-taupe/30 bg-velmora-cream px-6 pt-16">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">
        <div>
          <a href="/" className="font-serif text-2xl font-semibold uppercase tracking-widest text-velmora-espresso">
            Velmora
          </a>
          <p className="mt-4 font-display text-sm font-light leading-relaxed text-velmora-brown">
            Demi-fine gold jewelry designed to be treasured. Crafted for everyday moments and lasting memories.
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-display text-xs font-semibold uppercase tracking-widest text-velmora-espresso">
            Shop
          </h4>
          <ul className="space-y-2.5 font-display text-sm font-light text-velmora-brown">
            <li><a href="/shop" className="hover:text-velmora-gold-dark transition-colors">All Jewelry</a></li>
            <li><a href="/shop?category=earrings" className="hover:text-velmora-gold-dark transition-colors">Earrings</a></li>
            <li><a href="/shop?category=necklaces" className="hover:text-velmora-gold-dark transition-colors">Necklaces</a></li>
            <li><a href="/shop?category=huggies" className="hover:text-velmora-gold-dark transition-colors">Huggies</a></li>
            <li><a href="/shop?category=sets" className="hover:text-velmora-gold-dark transition-colors">Gift Sets</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display text-xs font-semibold uppercase tracking-widest text-velmora-espresso">
            Help
          </h4>
          <ul className="space-y-2.5 font-display text-sm font-light text-velmora-brown">
            <li><a href="#" className="hover:text-velmora-gold-dark transition-colors">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-velmora-gold-dark transition-colors">Care Guide</a></li>
            <li><a href="#" className="hover:text-velmora-gold-dark transition-colors">Size Guide</a></li>
            <li><a href="#" className="hover:text-velmora-gold-dark transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-velmora-gold-dark transition-colors">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display text-xs font-semibold uppercase tracking-widest text-velmora-espresso">
            Company
          </h4>
          <ul className="space-y-2.5 font-display text-sm font-light text-velmora-brown">
            <li><a href="#" className="hover:text-velmora-gold-dark transition-colors">Our Story</a></li>
            <li><a href="#" className="hover:text-velmora-gold-dark transition-colors">Sustainability</a></li>
            <li><a href="#" className="hover:text-velmora-gold-dark transition-colors">Journal</a></li>
            <li><a href="#" className="hover:text-velmora-gold-dark transition-colors">Careers</a></li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-6 border-t border-velmora-taupe/30 py-8 md:flex-row">
        <p className="text-xs text-velmora-stone">
          © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a href="#" aria-label="Instagram" className="text-velmora-brown transition-colors hover:text-velmora-gold-dark">
            <Instagram size={18} />
          </a>
          <a href="#" aria-label="Facebook" className="text-velmora-brown transition-colors hover:text-velmora-gold-dark">
            <Facebook size={18} />
          </a>
          <a href="#" aria-label="Twitter" className="text-velmora-brown transition-colors hover:text-velmora-gold-dark">
            <Twitter size={18} />
          </a>
        </div>

        <div className="flex items-center gap-2 text-xs text-velmora-stone">
          <span className="rounded border border-velmora-taupe/50 px-2 py-1">Visa</span>
          <span className="rounded border border-velmora-taupe/50 px-2 py-1">Mastercard</span>
          <span className="rounded border border-velmora-taupe/50 px-2 py-1">Amex</span>
          <span className="rounded border border-velmora-taupe/50 px-2 py-1">PayPal</span>
        </div>
      </div>
    </footer>
  );
}
