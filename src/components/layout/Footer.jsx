import { Link } from 'react-router-dom'

const shopLinks = ['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const helpLinks = ['Shipping & Returns', 'Care Guide', 'Size Guide', 'FAQ', 'Contact']
const companyLinks = ['About', 'Journal', 'Sustainability', 'Stockists', 'Careers']

export default function Footer() {
  return (
    <footer className="bg-velmora-base text-velmora-white/60 pt-16 md:pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              className="font-serif text-xl tracking-[0.2em] text-velmora-white"
            >
              VELMORA
            </Link>
            <p className="font-sans text-xs leading-relaxed mt-4 max-w-[200px]">
              Demi-fine gold jewelry designed in London, crafted for everyday
              luxury.
            </p>
          </div>

          {/* Link columns */}
          <div>
            <p className="font-sans text-[10px] tracking-widest uppercase text-velmora-white/40 mb-4">
              Shop
            </p>
            <ul className="space-y-2.5">
              {shopLinks.map((l) => (
                <li key={l}>
                  <Link
                    to="/shop"
                    className="font-sans text-xs hover:text-velmora-white transition-colors"
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-sans text-[10px] tracking-widest uppercase text-velmora-white/40 mb-4">
              Help
            </p>
            <ul className="space-y-2.5">
              {helpLinks.map((l) => (
                <li key={l}>
                  <Link
                    to="/help"
                    className="font-sans text-xs hover:text-velmora-white transition-colors"
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-sans text-[10px] tracking-widest uppercase text-velmora-white/40 mb-4">
              Company
            </p>
            <ul className="space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l}>
                  <Link
                    to="/about"
                    className="font-sans text-xs hover:text-velmora-white transition-colors"
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="hairline border-velmora-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[10px] tracking-wider">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex gap-4 font-sans text-[10px] tracking-wider">
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
