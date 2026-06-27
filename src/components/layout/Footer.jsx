import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          <div className="md:col-span-1">
            <Link
              to="/"
              className="font-serif text-2xl tracking-[0.22em] uppercase font-semibold"
            >
              Velmora
            </Link>
            <p className="mt-4 text-sm text-sand leading-relaxed max-w-xs">
              Demi-fine jewelry crafted to be treasured. Designed for everyday
              luxury and meaningful gifting.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.16em] font-semibold text-cream mb-5">
              Shop
            </h4>
            <ul className="space-y-3 text-sm text-sand">
              <li>
                <Link to="/shop" className="hover:text-gold transition-colors">
                  All Jewelry
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-gold transition-colors">
                  Earrings
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-gold transition-colors">
                  Necklaces
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-gold transition-colors">
                  Huggies
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-gold transition-colors">
                  Gift Sets
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.16em] font-semibold text-cream mb-5">
              Help
            </h4>
            <ul className="space-y-3 text-sm text-sand">
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Care Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.16em] font-semibold text-cream mb-5">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-sand">
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Journal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-sand hover:text-gold transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-sand hover:text-gold transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-sand hover:text-gold transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          <div className="flex items-center gap-3 text-xs text-sand">
            <span className="w-10 h-6 bg-white/10 rounded flex items-center justify-center">
              Visa
            </span>
            <span className="w-10 h-6 bg-white/10 rounded flex items-center justify-center">
              MC
            </span>
            <span className="w-10 h-6 bg-white/10 rounded flex items-center justify-center">
              Amex
            </span>
            <span className="w-10 h-6 bg-white/10 rounded flex items-center justify-center">
              PayPal
            </span>
          </div>

          <p className="text-xs text-sand">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
