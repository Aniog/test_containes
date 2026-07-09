import { CreditCard, Facebook, Instagram, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerGroups = [
  {
    title: 'Shop',
    items: [
      { label: 'Bestsellers', to: '/shop' },
      { label: 'Necklaces', to: '/shop?category=Necklaces' },
      { label: 'Earrings', to: '/shop?category=Earrings' },
      { label: 'Gift Sets', to: '/product/royal-heirloom-set' },
    ],
  },
  {
    title: 'Help',
    items: [
      { label: 'Shipping', to: '/#newsletter' },
      { label: 'Returns', to: '/#newsletter' },
      { label: 'Care Guide', to: '/#journal' },
      { label: 'Contact', to: '/#newsletter' },
    ],
  },
  {
    title: 'Company',
    items: [
      { label: 'About Velmora', to: '/#story' },
      { label: 'Journal', to: '/#journal' },
      { label: 'Wholesale', to: '/#newsletter' },
      { label: 'Privacy', to: '/#newsletter' },
    ],
  },
]

const Footer = () => {
  return (
    <footer className="border-t border-stone-800 bg-stone-950 text-stone-100">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.5fr_repeat(3,1fr)] lg:px-8">
        <div>
          <p className="font-display text-3xl tracking-[0.42em] text-stone-50">VELMORA</p>
          <p className="mt-5 max-w-sm text-sm leading-7 text-stone-400">
            Demi-fine gold jewelry designed for self-purchase, thoughtful gifting, and the quiet rituals of everyday luxury.
          </p>
          <div className="mt-6 flex items-center gap-3 text-stone-300">
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="rounded-full border border-stone-800 p-2 transition hover:border-amber-400 hover:text-amber-300"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="rounded-full border border-stone-800 p-2 transition hover:border-amber-400 hover:text-amber-300"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://pinterest.com"
              aria-label="Pinterest"
              className="rounded-full border border-stone-800 p-2 transition hover:border-amber-400 hover:text-amber-300"
            >
              <Sparkles className="h-5 w-5" />
            </a>
          </div>
        </div>

        {footerGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-xs uppercase tracking-[0.32em] text-stone-400">
              {group.title}
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-stone-300">
              {group.items.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="transition hover:text-amber-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-stone-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 text-sm text-stone-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-3 text-stone-300">
            <CreditCard className="h-5 w-5" />
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

export default Footer
