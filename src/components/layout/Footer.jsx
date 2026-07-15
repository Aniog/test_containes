import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const shopLinks = ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals']
const helpLinks = ['Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us']
const companyLinks = ['Our Story', 'Sustainability', 'Press', 'Careers', 'Wholesale']

export function Footer() {
  return (
    <footer className="bg-obsidian-800 text-obsidian-100">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <p className="font-serif text-2xl text-cream tracking-widest2 mb-4">VELMORA</p>
            <p className="text-sm text-obsidian-300 font-sans leading-relaxed mb-6">
              Demi-fine gold jewelry crafted for the modern woman. Wear it every day. Treasure it forever.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-obsidian-400 hover:text-velvet-400 transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-obsidian-400 hover:text-velvet-400 transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-obsidian-400 hover:text-velvet-400 transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-obsidian-300 mb-5">Shop</h4>
            <ul className="space-y-3">
              {shopLinks.map(l => (
                <li key={l}>
                  <Link to="/shop" className="text-sm text-obsidian-300 hover:text-velvet-400 transition-colors font-sans">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-obsidian-300 mb-5">Help</h4>
            <ul className="space-y-3">
              {helpLinks.map(l => (
                <li key={l}>
                  <a href="#" className="text-sm text-obsidian-300 hover:text-velvet-400 transition-colors font-sans">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-obsidian-300 mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map(l => (
                <li key={l}>
                  <a href="#" className="text-sm text-obsidian-300 hover:text-velvet-400 transition-colors font-sans">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-obsidian-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-obsidian-400 font-sans">
            © 2024 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {/* Payment icons as text badges */}
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map(p => (
              <span key={p} className="text-[10px] font-sans text-obsidian-400 border border-obsidian-600 px-2 py-0.5 rounded">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
