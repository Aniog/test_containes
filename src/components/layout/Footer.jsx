import { Instagram, Mail, Music2 } from 'lucide-react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-velmora-espresso text-velmora-porcelain">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_2fr]">
          <div className="space-y-5">
            <Link to="/" className="font-serif text-3xl tracking-[0.18em] text-velmora-porcelain">
              VELMORA
            </Link>
            <p className="max-w-sm text-sm leading-7 text-velmora-champagne">
              Demi-fine gold jewelry designed for everyday rituals, meaningful gifts, and softly luminous moments.
            </p>
            <div className="flex gap-3 text-velmora-champagne">
              <a href="#journal" aria-label="Instagram" className="rounded-full border border-velmora-champagne/40 p-2 transition hover:border-velmora-gold hover:text-velmora-gold">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#journal" aria-label="TikTok" className="rounded-full border border-velmora-champagne/40 p-2 transition hover:border-velmora-gold hover:text-velmora-gold">
                <Music2 className="h-4 w-4" />
              </a>
              <a href="mailto:hello@velmora.example" aria-label="Email" className="rounded-full border border-velmora-champagne/40 p-2 transition hover:border-velmora-gold hover:text-velmora-gold">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-luxury text-velmora-gold">Shop</h3>
              <ul className="space-y-3 text-sm text-velmora-champagne">
                <li><Link to="/shop" className="hover:text-velmora-porcelain">All Jewelry</Link></li>
                <li><Link to="/shop?category=earrings" className="hover:text-velmora-porcelain">Earrings</Link></li>
                <li><Link to="/shop?category=necklaces" className="hover:text-velmora-porcelain">Necklaces</Link></li>
                <li><Link to="/shop?category=huggies" className="hover:text-velmora-porcelain">Huggies</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-luxury text-velmora-gold">Help</h3>
              <ul className="space-y-3 text-sm text-velmora-champagne">
                <li><a href="#shipping" className="hover:text-velmora-porcelain">Shipping</a></li>
                <li><a href="#returns" className="hover:text-velmora-porcelain">Returns</a></li>
                <li><a href="#care" className="hover:text-velmora-porcelain">Care Guide</a></li>
                <li><a href="#contact" className="hover:text-velmora-porcelain">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-luxury text-velmora-gold">Company</h3>
              <ul className="space-y-3 text-sm text-velmora-champagne">
                <li><a href="/#story" className="hover:text-velmora-porcelain">Our Story</a></li>
                <li><a href="/#journal" className="hover:text-velmora-porcelain">Journal</a></li>
                <li><a href="#sustainability" className="hover:text-velmora-porcelain">Sustainability</a></li>
                <li><a href="#stockists" className="hover:text-velmora-porcelain">Stockists</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-velmora-champagne/20 pt-6 text-xs text-velmora-champagne sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-2 uppercase tracking-[0.16em]">
            <span className="rounded border border-velmora-champagne/30 px-2 py-1">Visa</span>
            <span className="rounded border border-velmora-champagne/30 px-2 py-1">MC</span>
            <span className="rounded border border-velmora-champagne/30 px-2 py-1">Amex</span>
            <span className="rounded border border-velmora-champagne/30 px-2 py-1">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
