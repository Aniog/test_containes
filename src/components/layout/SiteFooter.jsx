import { Instagram, Facebook, CreditCard, ShieldCheck, Truck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { journalEntries } from '@/data/storeData.js'

const footerColumns = [
  {
    title: 'Shop',
    links: [
      { label: 'New arrivals', to: '/shop' },
      { label: 'Earrings', to: '/shop?category=Earrings' },
      { label: 'Necklaces', to: '/shop?category=Necklaces' },
      { label: 'Huggies', to: '/shop?category=Huggies' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping', to: '/shop' },
      { label: 'Returns', to: '/shop' },
      { label: 'Care guide', to: '/shop' },
      { label: 'Gift packaging', to: '/shop' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our story', to: '/#our-story' },
      { label: journalEntries[0].title, to: '/#journal' },
      { label: 'Contact', to: '/shop' },
      { label: 'Press', to: '/shop' },
    ],
  },
]

const SiteFooter = () => {
  return (
    <footer className="border-t border-velmora-sand/70 bg-velmora-noir text-velmora-ivory">
      <div className="page-shell py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_2fr]">
          <div className="max-w-md">
            <Link to="/" className="font-display text-3xl tracking-[0.35em] text-velmora-ivory">
              VELMORA
            </Link>
            <p className="mt-4 text-sm leading-7 text-velmora-ivory/75">
              Premium-but-accessible demi-fine jewelry designed for self-gifting, signature stacks, and memorable moments.
            </p>
            <div className="mt-6 flex items-center gap-3 text-velmora-ivory/75">
              <a href="#" aria-label="Instagram" className="rounded-full border border-white/15 p-2 transition hover:text-velmora-gold">
                <Instagram className="h-4 w-4" strokeWidth={1.7} />
              </a>
              <a href="#" aria-label="Facebook" className="rounded-full border border-white/15 p-2 transition hover:text-velmora-gold">
                <Facebook className="h-4 w-4" strokeWidth={1.7} />
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-lg text-velmora-ivory">{column.title}</h3>
                <ul className="mt-4 space-y-3 text-sm text-velmora-ivory/75">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link className="transition hover:text-velmora-gold" to={link.to}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-6 text-sm text-velmora-ivory/70 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-2"><Truck className="h-4 w-4" /> Worldwide delivery</span>
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Secure checkout ready</span>
            <span className="inline-flex items-center gap-2"><CreditCard className="h-4 w-4" /> Visa · Mastercard · Amex</span>
          </div>
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
