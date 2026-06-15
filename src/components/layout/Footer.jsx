import { Link } from 'react-router-dom'
import { Instagram, Facebook } from 'lucide-react'

function PinterestIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-obsidian text-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-light tracking-widest2 text-ivory hover:text-gold transition-colors duration-300">
              VELMORA
            </Link>
            <p className="font-manrope text-sm text-ivory/60 mt-4 leading-relaxed max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Wear it every day.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-ivory/50 hover:text-gold transition-colors duration-300">
                <Instagram className="w-4 h-4" strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Pinterest" className="text-ivory/50 hover:text-gold transition-colors duration-300">
                <PinterestIcon className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Facebook" className="text-ivory/50 hover:text-gold transition-colors duration-300">
                <Facebook className="w-4 h-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-manrope text-[10px] tracking-widest3 text-gold mb-5">SHOP</h3>
            <ul className="space-y-3">
              {[['Earrings', '/shop?category=earrings'], ['Necklaces', '/shop?category=necklaces'], ['Huggies', '/shop?category=huggies'], ['Gift Sets', '/shop?category=sets'], ['New Arrivals', '/shop']].map(([label, href]) => (
                <li key={label}>
                  <Link to={href} className="font-manrope text-sm text-ivory/60 hover:text-ivory transition-colors duration-300">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-manrope text-[10px] tracking-widest3 text-gold mb-5">HELP</h3>
            <ul className="space-y-3">
              {['Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'].map(label => (
                <li key={label}>
                  <Link to="/" className="font-manrope text-sm text-ivory/60 hover:text-ivory transition-colors duration-300">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-manrope text-[10px] tracking-widest3 text-gold mb-5">COMPANY</h3>
            <ul className="space-y-3">
              {[['Our Story', '/#about'], ['Sustainability', '/'], ['Press', '/'], ['Careers', '/'], ['Journal', '/']].map(([label, href]) => (
                <li key={label}>
                  <Link to={href} className="font-manrope text-sm text-ivory/60 hover:text-ivory transition-colors duration-300">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-ivory/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-manrope text-xs text-ivory/40">© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-3">
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map(p => (
              <span key={p} className="font-manrope text-[10px] text-ivory/30 border border-ivory/10 px-2 py-1 rounded-sm">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
