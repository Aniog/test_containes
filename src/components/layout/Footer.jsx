import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-espresso text-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <Link
              to="/"
              className="font-serif text-2xl font-medium tracking-widest"
            >
              VELMORA
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
              Demi-fine jewelry designed to be treasured. Crafted with care,
              made for everyday luxury.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gold-light">
              Shop
            </h4>
            <ul className="space-y-3 text-sm text-cream/80">
              <li>
                <Link to="/shop" className="hover:text-white">
                  All Jewelry
                </Link>
              </li>
              <li>
                <Link to="/shop?category=earrings" className="hover:text-white">
                  Earrings
                </Link>
              </li>
              <li>
                <Link to="/shop?category=necklaces" className="hover:text-white">
                  Necklaces
                </Link>
              </li>
              <li>
                <Link to="/shop?category=huggies" className="hover:text-white">
                  Huggies
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gold-light">
              Help
            </h4>
            <ul className="space-y-3 text-sm text-cream/80">
              <li>
                <Link to="/shipping" className="hover:text-white">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/care" className="hover:text-white">
                  Jewelry Care
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gold-light">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-cream/80">
              <li>
                <Link to="/about" className="hover:text-white">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/journal" className="hover:text-white">
                  Journal
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="hover:text-white">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/press" className="hover:text-white">
                  Press
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-cream/10 pt-8 md:flex-row">
          <p className="text-xs text-cream/50">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-cream/70 hover:text-white">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-cream/70 hover:text-white">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-cream/70 hover:text-white">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
          <div className="flex items-center gap-3 text-xs text-cream/50">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
