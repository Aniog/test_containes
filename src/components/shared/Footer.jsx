import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Shop: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'],
    Help: ['Contact Us', 'Shipping & Returns', 'Size Guide', 'Care Guide', 'FAQ'],
    Company: ['Our Story', 'Sustainability', 'Press', 'Careers', 'Wholesale'],
  }

  return (
    <footer className="border-t border-velmora-taupe/30 bg-velmora-base">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-[0.2em]">
              VELMORA
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-velmora-taupe-light">
              Demi-fine jewelry designed for everyday luxury. Crafted with care,
              made to be treasured.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="text-velmora-taupe-light transition-colors hover:text-velmora-gold"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="text-velmora-taupe-light transition-colors hover:text-velmora-gold"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="text-velmora-taupe-light transition-colors hover:text-velmora-gold"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 font-sans text-xs uppercase tracking-widest text-velmora-ivory">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      to="/shop"
                      className="text-sm text-velmora-taupe-light transition-colors hover:text-velmora-gold"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-velmora-taupe/30 pt-8 md:flex-row">
          <p className="text-xs text-velmora-taupe-light">
            © {currentYear} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs text-velmora-taupe-light">
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
