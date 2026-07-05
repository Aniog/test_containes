import { Link } from 'react-router-dom'
import { Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-vdark text-vcream">
      <div className="section-padding py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-4">
            <Link
              to="/"
              className="font-serif text-2xl tracking-[0.15em] text-vcream"
            >
              VELMORA
            </Link>
            <p className="font-sans text-sm text-vcream/60 mt-4 max-w-xs leading-relaxed">
              Demi-fine jewelry crafted for the modern woman. Designed in New York,
              worn everywhere.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                className="text-vcream/60 hover:text-vcream transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="text-vcream/60 hover:text-vcream transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div className="md:col-span-2 md:col-start-6">
            <h3 className="font-sans text-xs font-medium tracking-widest uppercase text-vcream/40 mb-4">
              Shop
            </h3>
            <ul className="flex flex-col gap-2.5">
              {['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to="/shop"
                      className="font-sans text-sm text-vcream/70 hover:text-vcream transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Help */}
          <div className="md:col-span-2">
            <h3 className="font-sans text-xs font-medium tracking-widest uppercase text-vcream/40 mb-4">
              Help
            </h3>
            <ul className="flex flex-col gap-2.5">
              {['Shipping', 'Returns', 'Care Guide', 'FAQ', 'Contact'].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="font-sans text-sm text-vcream/70 hover:text-vcream transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h3 className="font-sans text-xs font-medium tracking-widest uppercase text-vcream/40 mb-4">
              Company
            </h3>
            <ul className="flex flex-col gap-2.5">
              {['About', 'Sustainability', 'Press', 'Careers'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="font-sans text-sm text-vcream/70 hover:text-vcream transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-vcream/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-vcream/40">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="font-sans text-xs text-vcream/40">
              Visa
            </span>
            <span className="font-sans text-xs text-vcream/40">
              Mastercard
            </span>
            <span className="font-sans text-xs text-vcream/40">
              Amex
            </span>
            <span className="font-sans text-xs text-vcream/40">
              PayPal
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
