import { Link } from 'react-router-dom'
import { Instagram, Facebook, Pin } from 'lucide-react'

const shopLinks = ['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals']
const helpLinks = ['Shipping & Returns', 'Size Guide', 'Jewelry Care', 'FAQs', 'Contact Us']
const companyLinks = ['About Velmora', 'Our Story', 'Journal', 'Sustainability', 'Stockists']

export default function Footer() {
  return (
    <footer className="bg-velvet-950 border-t border-velvet-800">
      <div className="container-site section-padding">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-super-wide text-velvet-50">
              VELMORA
            </Link>
            <p className="text-velvet-400 text-sm mt-4 leading-relaxed max-w-[220px]">
              Demi-fine gold jewelry designed to be treasured. Crafted with care in 18K gold plate.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-velvet-400 hover:text-gold-400 transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-velvet-400 hover:text-gold-400 transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="text-velvet-400 hover:text-gold-400 transition-colors" aria-label="Pinterest">
                <Pin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-super-wide uppercase text-velvet-50 font-semibold mb-5">Shop</h4>
            <ul className="flex flex-col gap-3">
              {shopLinks.map((link) => (
                <li key={link}>
                  <Link to="/shop" className="text-velvet-400 text-sm hover:text-gold-400 transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-super-wide uppercase text-velvet-50 font-semibold mb-5">Help</h4>
            <ul className="flex flex-col gap-3">
              {helpLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-velvet-400 text-sm hover:text-gold-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-super-wide uppercase text-velvet-50 font-semibold mb-5">Company</h4>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-velvet-400 text-sm hover:text-gold-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hairline-divider my-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-velvet-500 text-xs">
          <p>&copy; 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
            <span>Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  )
}