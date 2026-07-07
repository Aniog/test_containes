import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const SHOP_LINKS = ['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const HELP_LINKS = ['Shipping & Returns', 'Care Guide', 'Size Guide', 'FAQ', 'Contact']
const COMPANY_LINKS = ['Our Story', 'Sustainability', 'Journal', 'Press']

export function Footer() {
  return (
    <footer className="bg-velvet-secondary border-t border-cream/8">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="font-serif text-2xl uppercase tracking-[0.22em] text-cream"
            >
              Velmora
            </Link>
            <p className="mt-4 max-w-sm text-sm text-warm-gray leading-relaxed">
              Demi-fine gold jewelry designed to be treasured. Crafted for everyday luxury,
              gifting, and the moments that matter.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                className="text-warm-gray hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-warm-gray hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-warm-gray hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.16em] text-cream mb-5">
              Shop
            </h4>
            <ul className="space-y-3">
              {SHOP_LINKS.map((item) => (
                <li key={item}>
                  <Link
                    to="/shop"
                    className="text-sm text-warm-gray hover:text-cream transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.16em] text-cream mb-5">
              Help
            </h4>
            <ul className="space-y-3">
              {HELP_LINKS.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-warm-gray hover:text-cream transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.16em] text-cream mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {COMPANY_LINKS.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-warm-gray hover:text-cream transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-warm-gray">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <div className="h-6 w-10 bg-warm-gray/20 rounded-sm" aria-label="Visa" />
            <div className="h-6 w-10 bg-warm-gray/20 rounded-sm" aria-label="Mastercard" />
            <div className="h-6 w-10 bg-warm-gray/20 rounded-sm" aria-label="Amex" />
            <div className="h-6 w-10 bg-warm-gray/20 rounded-sm" aria-label="PayPal" />
          </div>
        </div>
      </div>
    </footer>
  )
}
