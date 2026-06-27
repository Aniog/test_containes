import { Instagram, Facebook, CreditCard } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-obsidian text-porcelain">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_2fr]">
          <div className="max-w-sm space-y-5">
            <Link to="/" className="font-serif text-3xl tracking-[0.26em] text-porcelain">
              VELMORA
            </Link>
            <p className="text-sm leading-7 text-porcelain/72">
              Demi-fine gold jewelry designed for daily rituals, meaningful gifts, and pieces that become quietly yours.
            </p>
            <div className="flex gap-3 text-porcelain">
              <a href="#journal" className="rounded-full border border-porcelain/20 p-2 transition hover:border-gold hover:text-gold" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#journal" className="rounded-full border border-porcelain/20 p-2 transition hover:border-gold hover:text-gold" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.26em] text-softgold">Shop</h3>
              <ul className="space-y-3 text-sm text-porcelain/72">
                <li><Link to="/shop" className="hover:text-gold">All Jewelry</Link></li>
                <li><Link to="/shop" className="hover:text-gold">Earrings</Link></li>
                <li><Link to="/shop" className="hover:text-gold">Necklaces</Link></li>
                <li><Link to="/shop" className="hover:text-gold">Huggies</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.26em] text-softgold">Help</h3>
              <ul className="space-y-3 text-sm text-porcelain/72">
                <li><a href="#shipping" className="hover:text-gold">Shipping</a></li>
                <li><a href="#returns" className="hover:text-gold">Returns</a></li>
                <li><a href="#care" className="hover:text-gold">Care Guide</a></li>
                <li><a href="#contact" className="hover:text-gold">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.26em] text-softgold">Company</h3>
              <ul className="space-y-3 text-sm text-porcelain/72">
                <li><a href="/#story" className="hover:text-gold">Our Story</a></li>
                <li><a href="/#journal" className="hover:text-gold">Journal</a></li>
                <li><a href="#materials" className="hover:text-gold">Materials</a></li>
                <li><a href="#stockists" className="hover:text-gold">Stockists</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.26em] text-softgold">Payment</h3>
              <div className="flex flex-wrap gap-2">
                {['VISA', 'MC', 'AMEX', 'PAY'].map((label) => (
                  <span key={label} className="inline-flex items-center gap-1 rounded border border-porcelain/20 px-2 py-1 text-[0.65rem] font-bold tracking-[0.12em] text-porcelain/80">
                    <CreditCard className="h-3 w-3" /> {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-porcelain/12 pt-6 text-xs text-porcelain/58 sm:flex-row">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <p>Free Worldwide Shipping · 30-Day Returns · Hypoallergenic</p>
        </div>
      </div>
    </footer>
  )
}
