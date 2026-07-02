import { Link } from 'react-router-dom'

const shopLinks = ['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const helpLinks = ['Shipping & Returns', 'Materials & Care', 'FAQ', 'Contact Us', 'Track Order']
const companyLinks = ['Our Story', 'Journal', 'Sustainability', 'Careers', 'Press']

export default function Footer() {
  return (
    <footer className="bg-velvet-950 text-velvet-200">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-widest-plus font-semibold text-cream">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-velvet-300 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for everyday radiance. 18K gold-plated pieces designed to be treasured, worn, and loved.
            </p>
            <div className="flex gap-4 mt-6">
              {['Instagram', 'Pinterest', 'TikTok'].map((s) => (
                <span key={s} className="text-xs text-velvet-400 hover:text-gold-400 transition-colors cursor-pointer uppercase tracking-widest">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            { title: 'Shop', links: shopLinks },
            { title: 'Help', links: helpLinks },
            { title: 'Company', links: companyLinks },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-[11px] tracking-widest-plus uppercase text-velvet-400 mb-4 font-medium">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <Link
                      to="/shop"
                      className="text-sm text-velvet-300 hover:text-gold-400 transition-colors"
                    >
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-velvet-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-velvet-400">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-velvet-500">
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