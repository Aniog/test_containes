import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-velmora-hairline bg-velmora-dark text-white">
      <div className="container-velmora py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <Link
              to="/"
              className="inline-block font-serif text-2xl tracking-[0.15em] text-white"
            >
              VELMORA
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Demi-fine jewelry crafted to be treasured. Designed for everyday luxury and meaningful gifting.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/70">
              Shop
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li><Link to="/shop" className="transition hover:text-velmora-gold-light">All Jewelry</Link></li>
              <li><Link to="/shop" className="transition hover:text-velmora-gold-light">Earrings</Link></li>
              <li><Link to="/shop" className="transition hover:text-velmora-gold-light">Necklaces</Link></li>
              <li><Link to="/shop" className="transition hover:text-velmora-gold-light">Huggies</Link></li>
              <li><Link to="/shop" className="transition hover:text-velmora-gold-light">Gift Sets</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/70">
              Help
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li><Link to="/" className="transition hover:text-velmora-gold-light">Shipping & Returns</Link></li>
              <li><Link to="/" className="transition hover:text-velmora-gold-light">Care Guide</Link></li>
              <li><Link to="/" className="transition hover:text-velmora-gold-light">FAQs</Link></li>
              <li><Link to="/" className="transition hover:text-velmora-gold-light">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/70">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li><Link to="/about" className="transition hover:text-velmora-gold-light">Our Story</Link></li>
              <li><Link to="/" className="transition hover:text-velmora-gold-light">Sustainability</Link></li>
              <li><Link to="/journal" className="transition hover:text-velmora-gold-light">Journal</Link></li>
              <li><Link to="/" className="transition hover:text-velmora-gold-light">Careers</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <div className="flex items-center gap-4">
            <span className="h-6 w-10 rounded bg-white/10" aria-label="Visa" />
            <span className="h-6 w-10 rounded bg-white/10" aria-label="Mastercard" />
            <span className="h-6 w-10 rounded bg-white/10" aria-label="Amex" />
            <span className="h-6 w-10 rounded bg-white/10" aria-label="PayPal" />
          </div>

          <div className="flex items-center gap-5">
            <a href="#" className="text-white/60 transition hover:text-velmora-gold-light" aria-label="Instagram">
              <Instagram size={18} strokeWidth={1.5} />
            </a>
            <a href="#" className="text-white/60 transition hover:text-velmora-gold-light" aria-label="Facebook">
              <Facebook size={18} strokeWidth={1.5} />
            </a>
            <a href="#" className="text-white/60 transition hover:text-velmora-gold-light" aria-label="Twitter">
              <Twitter size={18} strokeWidth={1.5} />
            </a>
          </div>

          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
