import { Instagram, Music2, Twitter } from 'lucide-react'

const footerColumns = [
  {
    title: 'Shop',
    links: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets'],
  },
  {
    title: 'Help',
    links: ['Shipping', 'Returns', 'Care Guide', 'Contact'],
  },
  {
    title: 'Company',
    links: ['Our Story', 'Journal', 'Stockists', 'Terms'],
  },
]

const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'PayPal']

const SiteFooter = () => {
  return (
    <footer className="bg-noir px-4 py-14 text-ivory sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1.3fr_repeat(3,1fr)]">
          <div className="max-w-sm">
            <p className="font-display text-4xl tracking-[0.35em] text-ivory">VELMORA</p>
            <p className="mt-5 text-sm leading-7 text-ivory/65">
              Demi-fine jewelry designed for daily wear, thoughtful gifting, and treasured repetition.
            </p>
            <div className="mt-6 flex items-center gap-3 text-ivory/75">
              <a href="https://instagram.com" aria-label="Instagram" className="rounded-full border border-white/10 p-3 transition hover:bg-white/10">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://tiktok.com" aria-label="TikTok" className="rounded-full border border-white/10 p-3 transition hover:bg-white/10">
                <Music2 className="h-4 w-4" />
              </a>
              <a href="https://x.com" aria-label="X" className="rounded-full border border-white/10 p-3 transition hover:bg-white/10">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <p className="text-xs uppercase tracking-brand text-ivory/50">{column.title}</p>
              <ul className="mt-5 space-y-3 text-sm text-ivory/70">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href={link === 'Journal' ? '/#journal' : link === 'Our Story' ? '/#story' : '/shop'} className="transition hover:text-gold">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5 pt-8 text-sm text-ivory/55 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            {paymentIcons.map((icon) => (
              <span key={icon} className="rounded-full border border-white/10 px-3 py-2 text-xs uppercase tracking-[0.18em] text-ivory/75">
                {icon}
              </span>
            ))}
          </div>
          <p>© 2026 Velmora Fine Jewelry. Crafted to be treasured.</p>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
