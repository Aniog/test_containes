import { Link } from 'react-router-dom'

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
      { label: 'Shipping & Returns', to: '/about' },
      { label: 'Materials & Care', to: '/journal' },
      { label: 'Contact', to: '/about' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', to: '/about' },
      { label: 'Journal', to: '/journal' },
      { label: 'Collections', to: '/collections' },
    ],
  },
]

const SiteFooter = () => (
  <footer className="border-t border-stone-200/10 bg-stone-950 px-6 py-16 lg:px-10">
    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.3fr_2fr]">
      <div className="space-y-6">
        <Link to="/" className="font-display text-3xl tracking-logo text-stone-50">
          VELMORA
        </Link>
        <p className="max-w-sm text-sm leading-7 text-stone-300">
          Demi-fine jewelry designed for self-purchase, thoughtful gifting, and the quiet moments that deserve a little gold.
        </p>
        <div className="flex flex-wrap gap-2">
          {['Visa', 'Mastercard', 'AmEx', 'PayPal'].map((item) => (
            <span
              key={item}
              className="rounded-full border border-stone-200/15 px-3 py-2 text-[10px] uppercase tracking-[0.24em] text-stone-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-10 sm:grid-cols-3">
        {footerColumns.map((column) => (
          <div key={column.title} className="space-y-4">
            <p className="text-xs uppercase tracking-[0.28em] text-stone-400">
              {column.title}
            </p>
            <div className="flex flex-col gap-3 text-sm text-stone-200">
              {column.links.map((link) => (
                <Link key={link.label} to={link.to} className="transition hover:text-amber-200">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-4 border-t border-stone-200/10 pt-6 text-xs uppercase tracking-[0.24em] text-stone-500 sm:flex-row sm:items-center sm:justify-between">
      <p>© 2026 Velmora Fine Jewelry</p>
      <div className="flex gap-6 text-stone-400">
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="transition hover:text-amber-200">
          Instagram
        </a>
        <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="transition hover:text-amber-200">
          Pinterest
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="transition hover:text-amber-200">
          TikTok
        </a>
      </div>
    </div>
  </footer>
)

export default SiteFooter
