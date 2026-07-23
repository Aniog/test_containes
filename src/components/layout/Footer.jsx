import React from 'react'

const footerColumns = [
  {
    title: 'Shop',
    links: ['Bestsellers', 'New Arrivals', 'Gift Sets', 'Necklaces'],
  },
  {
    title: 'Help',
    links: ['Shipping', 'Returns', 'Care Guide', 'Contact'],
  },
  {
    title: 'Company',
    links: ['About', 'Journal', 'Stockists', 'Privacy'],
  },
]

const Footer = () => (
  <footer className="border-t border-white/10 bg-velmora-ink text-velmora-ivory">
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
        <div>
          <p className="font-serif text-3xl tracking-[0.38em] text-white">VELMORA</p>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">
            Quietly luxurious demi-fine jewelry designed to be worn daily, gifted meaningfully, and treasured over time.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-xs uppercase tracking-[0.25em] text-white/60">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>Apple Pay</span>
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-3">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <p className="text-xs uppercase tracking-[0.32em] text-velmora-gold">{column.title}</p>
              <ul className="mt-5 space-y-3 text-sm text-white/70">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="transition-colors hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.24em] text-white/50 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Velmora Fine Jewelry</p>
        <div className="flex gap-4">
          <a href="#" className="transition-colors hover:text-white">Instagram</a>
          <a href="#" className="transition-colors hover:text-white">Pinterest</a>
          <a href="#" className="transition-colors hover:text-white">TikTok</a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
