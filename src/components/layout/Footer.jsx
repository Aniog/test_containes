import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const columns = [
  {
    title: 'Shop',
    links: [
      { label: 'Earrings', to: '/shop?category=earrings' },
      { label: 'Necklaces', to: '/shop?category=necklaces' },
      { label: 'Huggies', to: '/shop?category=huggies' },
      { label: 'Bestsellers', to: '/shop' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping', to: '/about' },
      { label: 'Returns & Exchanges', to: '/about' },
      { label: 'Materials & Care', to: '/about' },
      { label: 'Contact Us', to: '/about' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', to: '/about' },
      { label: 'Journal', to: '/journal' },
      { label: 'Sustainability', to: '/about' },
      { label: 'Careers', to: '/about' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-espresso text-ivory">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8">
          <div className="col-span-2 md:col-span-2">
            <p className="font-serif text-3xl tracking-[0.3em] mb-4">VELMORA</p>
            <p className="text-ivory/60 text-sm leading-relaxed max-w-xs">
              Demi-fine gold jewelry, crafted to be treasured. Designed in studio,
              made to be worn every day.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <SocialLink icon={Instagram} label="Instagram" />
              <SocialLink icon={Facebook} label="Facebook" />
              <SocialLink icon={Twitter} label="Twitter" />
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-4">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-ivory/70 hover:text-ivory transition-colors duration-300"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-ivory/15 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ivory/50 tracking-wide">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {['VISA', 'MC', 'AMEX', 'PAYPAL', 'APPLE'].map((p) => (
              <span
                key={p}
                className="text-[10px] tracking-[0.1em] text-ivory/60 border border-ivory/20 rounded-sm px-2 py-1"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ icon: Icon, label }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="w-9 h-9 rounded-full border border-ivory/25 flex items-center justify-center text-ivory/70 hover:text-ivory hover:border-gold transition-colors duration-300"
    >
      <Icon className="w-4 h-4" />
    </a>
  )
}
