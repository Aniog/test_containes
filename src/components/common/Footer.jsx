const footerGroups = [
  { title: 'Shop', links: ['Bestsellers', 'Earrings', 'Necklaces', 'Gift Sets'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['About', 'Journal', 'Sustainability', 'Stockists'] },
]

const Footer = () => (
  <footer className="bg-velmora-forest px-5 py-12 text-velmora-cream lg:px-10">
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-10 border-b border-velmora-champagne/25 pb-10 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <a href="#home" className="font-serif text-4xl font-semibold tracking-[0.22em] text-velmora-cream">VELMORA</a>
          <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-ivory/75">Demi-fine gold jewelry designed for self-purchase, meaningful gifting, and everyday rituals.</p>
          <div className="mt-6 flex gap-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-champagne">
            <a href="#journal" className="hover:text-velmora-gold">Instagram</a>
            <span>/</span>
            <a href="#journal" className="hover:text-velmora-gold">Pinterest</a>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-champagne">{group.title}</h3>
              <ul className="mt-4 grid gap-3 text-sm text-velmora-ivory/78">
                {group.links.map((link) => (
                  <li key={link}><a href="#shop" className="transition hover:text-velmora-gold">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-between gap-5 pt-7 text-xs text-velmora-ivory/70 md:flex-row md:items-center">
        <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
        <div className="flex flex-wrap gap-2" aria-label="Accepted payments">
          {['VISA', 'MC', 'AMEX', 'PAY'].map((payment) => (
            <span key={payment} className="rounded-full border border-velmora-champagne/35 px-3 py-1 font-bold tracking-widest text-velmora-champagne">{payment}</span>
          ))}
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
