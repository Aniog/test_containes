const columns = [
  { title: 'Shop', links: ['Bestsellers', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Stockists'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-ink text-velmora-pearl">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <a href="#/" className="font-serif text-4xl font-bold tracking-[0.18em] text-velmora-pearl">
              VELMORA
            </a>
            <p className="mt-6 max-w-sm text-sm leading-7 text-velmora-pearl/75">
              Demi-fine gold jewelry for every ritual: the self-purchase, the thoughtful gift, the piece you reach for daily.
            </p>
            <div className="mt-8 flex gap-3 text-xs font-bold uppercase tracking-luxe text-velmora-gold">
              <a href="#journal">Instagram</a>
              <span>/</span>
              <a href="#journal">Pinterest</a>
              <span>/</span>
              <a href="#journal">TikTok</a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-bold uppercase tracking-luxe text-velmora-gold">{column.title}</h3>
                <ul className="mt-5 grid gap-3 text-sm text-velmora-pearl/75">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#/shop" className="transition hover:text-velmora-gold">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-velmora-pearl/15 pt-8 text-xs text-velmora-pearl/65 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex flex-wrap gap-2">
            {['VISA', 'AMEX', 'APPLE PAY', 'PAYPAL'].map((payment) => (
              <span key={payment} className="border border-velmora-pearl/20 px-3 py-1 text-[10px] font-bold tracking-[0.16em] text-velmora-pearl/80">
                {payment}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
