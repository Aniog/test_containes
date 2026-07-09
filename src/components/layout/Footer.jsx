import { Link } from 'react-router-dom'
import { Instagram, Facebook } from 'lucide-react'

const shopLinks = ['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals']
const helpLinks = ['Shipping & Returns', 'Care Guide', 'Size Guide', 'FAQ', 'Contact Us']
const companyLinks = ['Our Story', 'Sustainability', 'Journal', 'Stockists', 'Careers']

export default function Footer() {
  const linkClass = 'text-sm text-velmora-taupe hover:text-velmora-deep transition-colors'
  const headingClass = 'text-[11px] tracking-[0.15em] uppercase font-sans font-semibold text-velmora-deep mb-4'

  return (
    <footer className="bg-velmora-pearl border-t border-velmora-sand">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.2em] text-velmora-deep">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-velmora-taupe leading-relaxed max-w-xs">
              Demi-fine gold jewelry designed for the modern woman. Crafted to be treasured, priced to be worn every day.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className={headingClass}>Shop</h4>
            <ul className="space-y-2.5">
              {shopLinks.map((l) => (
                <li key={l}><a href="#" className={linkClass}>{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className={headingClass}>Help</h4>
            <ul className="space-y-2.5">
              {helpLinks.map((l) => (
                <li key={l}><a href="#" className={linkClass}>{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className={headingClass}>Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l}><a href="#" className={linkClass}>{l}</a></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-velmora-sand/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-velmora-taupe">
            <a href="#" aria-label="Instagram"><Instagram className="w-4 h-4 hover:text-velmora-deep transition-colors" /></a>
            <a href="#" aria-label="Facebook"><Facebook className="w-4 h-4 hover:text-velmora-deep transition-colors" /></a>
            <a href="#" aria-label="Pinterest">
              <svg className="w-4 h-4 hover:text-velmora-deep transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 2a10 10 0 0 1 0 20 10 10 0 0 1 0-20z"/>
                <path d="M11.5 15.5c.5-2 1.5-4 3-5.5 1.5-2 3.5-2.5 3.5-0.5s-1 3.5-2 5"/>
                <path d="M12 22c-3-1-4-5-4-6s0-2 1-2 2 1 2 3c0 2-1 3-1 5"/>
              </svg>
            </a>
          </div>

          <div className="flex items-center gap-6 text-xs text-velmora-taupe">
            <span>© {new Date().getFullYear()} Velmora Fine Jewelry</span>
            <a href="#" className="hover:text-velmora-deep transition-colors">Privacy</a>
            <a href="#" className="hover:text-velmora-deep transition-colors">Terms</a>
          </div>

          <div className="flex items-center gap-2 text-xs text-velmora-taupe">
            <span className="text-[10px] tracking-[0.1em] uppercase">Visa</span>
            <span className="text-[10px] tracking-[0.1em] uppercase">MC</span>
            <span className="text-[10px] tracking-[0.1em] uppercase">Amex</span>
            <span className="text-[10px] tracking-[0.1em] uppercase">PayPal</span>
            <span className="text-[10px] tracking-[0.1em] uppercase">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
