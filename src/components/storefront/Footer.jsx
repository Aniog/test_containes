import { Instagram, Mail, Music2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="border-t border-velmora-linen bg-velmora-ink text-velmora-porcelain">
      <div className="velmora-container py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Link to="/" className="font-serifDisplay text-4xl font-semibold tracking-[0.22em] text-velmora-porcelain">
              VELMORA
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-cream/75">
              Demi-fine gold jewelry designed for gifting, self-purchase, and luminous everyday rituals.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="https://instagram.com" className="rounded-full border border-velmora-porcelain/20 p-3 text-velmora-porcelain transition hover:border-velmora-gold hover:text-velmora-gold" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://tiktok.com" className="rounded-full border border-velmora-porcelain/20 p-3 text-velmora-porcelain transition hover:border-velmora-gold hover:text-velmora-gold" aria-label="TikTok">
                <Music2 className="h-4 w-4" />
              </a>
              <a href="mailto:hello@velmora.example" className="rounded-full border border-velmora-porcelain/20 p-3 text-velmora-porcelain transition hover:border-velmora-gold hover:text-velmora-gold" aria-label="Email Velmora">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-luxury text-velmora-gold">Shop</h3>
              <ul className="mt-5 space-y-3 text-sm text-velmora-cream/75">
                <li><Link className="transition hover:text-velmora-gold" to="/shop">All Jewelry</Link></li>
                <li><Link className="transition hover:text-velmora-gold" to="/shop?category=Earrings">Earrings</Link></li>
                <li><Link className="transition hover:text-velmora-gold" to="/shop?category=Necklaces">Necklaces</Link></li>
                <li><Link className="transition hover:text-velmora-gold" to="/shop?category=Huggies">Huggies</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-luxury text-velmora-gold">Help</h3>
              <ul className="mt-5 space-y-3 text-sm text-velmora-cream/75">
                <li><a className="transition hover:text-velmora-gold" href="#shipping">Shipping</a></li>
                <li><a className="transition hover:text-velmora-gold" href="#returns">Returns</a></li>
                <li><a className="transition hover:text-velmora-gold" href="#care">Jewelry Care</a></li>
                <li><a className="transition hover:text-velmora-gold" href="#contact">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-luxury text-velmora-gold">Company</h3>
              <ul className="mt-5 space-y-3 text-sm text-velmora-cream/75">
                <li><Link className="transition hover:text-velmora-gold" to="/#about">About</Link></li>
                <li><Link className="transition hover:text-velmora-gold" to="/#journal">Journal</Link></li>
                <li><a className="transition hover:text-velmora-gold" href="#sustainability">Sustainability</a></li>
                <li><a className="transition hover:text-velmora-gold" href="#stockists">Stockists</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-velmora-porcelain/15 pt-7 text-xs text-velmora-cream/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex flex-wrap gap-2">
            {['VISA', 'AMEX', 'MC', 'APPLE PAY'].map((item) => (
              <span key={item} className="rounded border border-velmora-porcelain/20 px-2 py-1 text-[0.65rem] font-bold tracking-luxury text-velmora-porcelain">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
