import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const footerLinks = {
  Shop: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'],
  Help: ['Shipping & Returns', 'Care Guide', 'Sizing', 'FAQ', 'Contact'],
  Company: ['Our Story', 'Sustainability', 'Press', 'Careers'],
}

export function Footer() {
  return (
    <footer className="bg-espresso-900 text-cream-100">
      <div className="container-velmora py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl font-semibold uppercase tracking-widest-xl">
              Velmora
            </Link>
            <p className="mt-4 max-w-sm font-sans text-sm leading-relaxed text-warmgray-300">
              Demi-fine jewelry designed for everyday luxury. Crafted in 18K gold plate, made to be treasured.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="#" className="text-warmgray-300 transition-colors hover:text-gold" aria-label="Instagram">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-warmgray-300 transition-colors hover:text-gold" aria-label="Facebook">
                <Facebook size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-warmgray-300 transition-colors hover:text-gold" aria-label="Twitter">
                <Twitter size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-5 font-sans text-[11px] font-semibold uppercase tracking-widest text-warmgray-400">
                {title}
              </h3>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      to="/shop"
                      className="font-sans text-sm text-warmgray-300 transition-colors hover:text-gold"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-center font-sans text-xs text-warmgray-500">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="font-sans text-[10px] uppercase tracking-widest text-warmgray-500">We accept</span>
            <div className="flex gap-2">
              {['VISA', 'MC', 'Amex', 'PayPal'].map((icon) => (
                <span
                  key={icon}
                  className="flex h-7 items-center rounded bg-white/10 px-2 font-sans text-[9px] font-bold uppercase tracking-wider text-cream-100"
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
