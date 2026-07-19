import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const footerLinks = {
  Shop: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'],
  Help: ['Shipping & Returns', 'Care Guide', 'FAQ', 'Contact Us'],
  Company: ['Our Story', 'Sustainability', 'Journal', 'Careers'],
}

export default function Footer() {
  return (
    <footer className="bg-espresso text-ivory">
      <div className="mx-auto px-5 md:px-8 lg:px-12 xl:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="font-serif text-2xl uppercase tracking-logo inline-block"
            >
              Velmora
            </Link>
            <p className="mt-4 text-taupe-light text-sm leading-relaxed max-w-sm">
              Demi-fine jewelry designed for everyday luxury. Crafted to be
              treasured, gifted, and worn often.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                className="text-ivory hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a
                href="#"
                className="text-ivory hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} strokeWidth={1.5} />
              </a>
              <a
                href="#"
                className="text-ivory hover:text-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs uppercase tracking-[0.2em] font-medium mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      to="/shop"
                      className="text-sm text-taupe-light hover:text-ivory transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-taupe-light">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs text-taupe-light">
            <span className="px-2 py-1 border border-white/10 rounded">Visa</span>
            <span className="px-2 py-1 border border-white/10 rounded">MC</span>
            <span className="px-2 py-1 border border-white/10 rounded">Amex</span>
            <span className="px-2 py-1 border border-white/10 rounded">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
