import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const PAYMENTS = ['VISA', 'MC', 'AMEX', 'PAYPAL', 'APPLE PAY']

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="max-w-8xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="font-serif text-2xl tracking-[0.3em] mb-4">VELMORA</div>
            <p className="text-sm text-cream/60 leading-relaxed max-w-xs">
              Demi-fine 18K gold plated jewelry, crafted to be treasured. Designed
              in studio, made to be worn every day.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <SocialLink href="#" label="Instagram"><Instagram width={18} height={18} strokeWidth={1.5} /></SocialLink>
              <SocialLink href="#" label="Facebook"><Facebook width={18} height={18} strokeWidth={1.5} /></SocialLink>
              <SocialLink href="#" label="Twitter"><Twitter width={18} height={18} strokeWidth={1.5} /></SocialLink>
            </div>
          </div>

          <FooterCol
            title="Shop"
            links={[
              { label: 'Earrings', to: '/shop?category=earrings' },
              { label: 'Necklaces', to: '/shop?category=necklaces' },
              { label: 'Huggies', to: '/shop?category=huggies' },
              { label: 'Gift Sets', to: '/shop?category=sets' },
              { label: 'All Jewelry', to: '/shop' },
            ]}
          />
          <FooterCol
            title="Help"
            links={[
              { label: 'Shipping', to: '/about' },
              { label: 'Returns', to: '/about' },
              { label: 'Materials & Care', to: '/about' },
              { label: 'Contact Us', to: '/about' },
              { label: 'FAQ', to: '/about' },
            ]}
          />
          <FooterCol
            title="Company"
            links={[
              { label: 'Our Story', to: '/about' },
              { label: 'Journal', to: '/journal' },
              { label: 'Sustainability', to: '/about' },
              { label: 'Reviews', to: '/about' },
              { label: 'Wholesale', to: '/about' },
            ]}
          />
        </div>

        <div className="mt-14 pt-8 border-t border-cream/15 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-cream/50 tracking-wide">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {PAYMENTS.map((p) => (
              <span
                key={p}
                className="text-[10px] tracking-wider text-cream/60 border border-cream/20 rounded px-2 py-1"
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

function FooterCol({ title, links }) {
  return (
    <div>
      <h4 className="text-xs tracking-[0.25em] uppercase text-cream/50 mb-5 font-sans">{title}</h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link to={link.to} className="text-sm text-cream/80 hover:text-champagne transition-colors">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="w-9 h-9 rounded-full border border-cream/25 flex items-center justify-center text-cream/80 hover:bg-champagne hover:border-champagne hover:text-cream transition-colors"
    >
      {children}
    </a>
  )
}
