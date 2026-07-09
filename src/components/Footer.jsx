import { Instagram, Facebook, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-velmora-dark text-velmora-dark-text">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-1">
            <p className="font-serif text-2xl tracking-widest-plus uppercase mb-4">Velmora</p>
            <p className="font-sans text-sm text-velmora-dark-text/70 leading-relaxed">
              Demi-fine jewelry designed for modern rituals. Crafted to be treasured.
            </p>
          </div>

          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest mb-5 text-velmora-dark-text/80">Shop</h4>
            <ul className="space-y-3 font-sans text-sm text-velmora-dark-text/70">
              <li><a href="/shop" className="hover:text-white transition-colors">All Jewelry</a></li>
              <li><a href="/shop?category=earrings" className="hover:text-white transition-colors">Earrings</a></li>
              <li><a href="/shop?category=necklaces" className="hover:text-white transition-colors">Necklaces</a></li>
              <li><a href="/shop?category=huggies" className="hover:text-white transition-colors">Huggies</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest mb-5 text-velmora-dark-text/80">Help</h4>
            <ul className="space-y-3 font-sans text-sm text-velmora-dark-text/70">
              <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Care Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest mb-5 text-velmora-dark-text/80">Company</h4>
            <ul className="space-y-3 font-sans text-sm text-velmora-dark-text/70">
              <li><a href="#story" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Journal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="text-velmora-dark-text/70 hover:text-white transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" aria-label="Facebook" className="text-velmora-dark-text/70 hover:text-white transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" aria-label="Twitter" className="text-velmora-dark-text/70 hover:text-white transition-colors">
              <Twitter size={18} />
            </a>
          </div>

          <div className="flex items-center gap-3">
            {['Visa', 'Mastercard', 'Amex', 'PayPal'].map((brand) => (
              <span
                key={brand}
                className="bg-white/10 px-2.5 py-1 text-[10px] font-sans uppercase tracking-wider text-velmora-dark-text/80"
              >
                {brand}
              </span>
            ))}
          </div>

          <p className="text-xs text-velmora-dark-text/50 font-sans">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
