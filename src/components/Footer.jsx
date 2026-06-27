import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-velmora-sand/40 bg-velmora-ivory">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="font-serif text-xl font-semibold uppercase tracking-[0.25em] text-velmora-espresso">
              Velmora
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-velmora-warm-gray">
              Demi-fine jewelry designed to be treasured. Crafted with intention, worn with confidence.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-velmora-espresso">Shop</h4>
            <ul className="space-y-2.5">
              {['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="text-sm text-velmora-warm-gray transition-colors hover:text-velmora-espresso">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-velmora-espresso">Help</h4>
            <ul className="space-y-2.5">
              {['Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-sm text-velmora-warm-gray transition-colors hover:text-velmora-espresso">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-velmora-espresso">Company</h4>
            <ul className="space-y-2.5">
              {['Our Story', 'Sustainability', 'Press', 'Careers', 'Terms & Privacy'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-sm text-velmora-warm-gray transition-colors hover:text-velmora-espresso">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-velmora-sand/30 pt-8 md:flex-row">
          <p className="text-xs text-velmora-taupe">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs uppercase tracking-wider text-velmora-taupe">We accept</span>
            <div className="flex items-center gap-3">
              {['Visa', 'MC', 'Amex', 'PayPal'].map((card) => (
                <div
                  key={card}
                  className="flex h-6 items-center justify-center rounded bg-velmora-cream px-2 text-[10px] font-medium uppercase tracking-wider text-velmora-warm-gray"
                >
                  {card}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-velmora-sand/50 text-velmora-warm-gray transition-colors hover:border-velmora-espresso hover:text-velmora-espresso"
              >
                <Icon size={15} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
