import { Instagram, Music2, PinIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import Logo from '@/components/layout/Logo.jsx'

const footerColumns = [
  {
    title: 'Shop',
    links: [
      { label: 'All Jewelry', to: '/shop' },
      { label: 'Earrings', to: '/shop?category=Earrings' },
      { label: 'Necklaces', to: '/shop?category=Necklaces' },
      { label: 'Huggies', to: '/shop?category=Huggies' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping & Returns', to: '/shop' },
      { label: 'Care Guide', to: '/#story' },
      { label: 'Gift Cards', to: '/shop' },
      { label: 'Contact', to: '/#newsletter' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Velmora', to: '/#story' },
      { label: 'Journal', to: '/#journal' },
      { label: 'Reviews', to: '/#testimonials' },
      { label: 'Newsletter', to: '/#newsletter' },
    ],
  },
]

const paymentBadges = ['Visa', 'Mastercard', 'Amex', 'PayPal']

const Footer = () => (
  <footer className="border-t border-champagne/30 bg-espresso text-ivory">
    <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.3fr_repeat(3,1fr)] lg:px-8">
      <div className="space-y-5">
        <Logo className="text-ivory" />
        <p className="max-w-sm text-sm leading-7 text-ivory/72">
          Velmora creates quietly luxurious demi-fine jewelry designed to be worn, gifted, and treasured every day.
        </p>
        <div className="flex items-center gap-3 text-ivory/80">
          <a href="https://instagram.com" className="rounded-full border border-ivory/15 p-2 transition hover:border-gold hover:text-gold" aria-label="Instagram">
            <Instagram className="h-4 w-4" />
          </a>
          <a href="https://pinterest.com" className="rounded-full border border-ivory/15 p-2 transition hover:border-gold hover:text-gold" aria-label="Pinterest">
            <PinIcon className="h-4 w-4" />
          </a>
          <a href="https://tiktok.com" className="rounded-full border border-ivory/15 p-2 transition hover:border-gold hover:text-gold" aria-label="TikTok">
            <Music2 className="h-4 w-4" />
          </a>
        </div>
      </div>

      {footerColumns.map((column) => (
        <div key={column.title}>
          <h3 className="text-xs uppercase tracking-[0.3em] text-gold">{column.title}</h3>
          <ul className="mt-5 space-y-3 text-sm text-ivory/72">
            {column.links.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className="transition hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <div className="border-t border-ivory/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.22em] text-ivory/60">
          {paymentBadges.map((badge) => (
            <span key={badge} className="rounded-full border border-ivory/15 px-3 py-2">
              {badge}
            </span>
          ))}
        </div>
        <p className="text-sm text-ivory/55">© 2026 Velmora Fine Jewelry. Crafted for thoughtful gifting and everyday glow.</p>
      </div>
    </div>
  </footer>
)

export default Footer
