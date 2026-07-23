const footerGroups = [
  {
    title: 'Shop',
    links: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets'],
  },
  {
    title: 'Help',
    links: ['Shipping', 'Returns', 'Care Guide', 'FAQ'],
  },
  {
    title: 'Company',
    links: ['About Velmora', 'Journal', 'Contact', 'Wholesale'],
  },
]

export default function SiteFooter() {
  return (
    <footer className="border-t border-stone-200 bg-[var(--velmora-cream)] text-[var(--velmora-ink)]">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1.2fr_repeat(3,1fr)]">
          <div className="space-y-4">
            <p className="font-serif text-3xl tracking-[0.34em]">VELMORA</p>
            <p className="max-w-sm text-sm leading-6 text-stone-600">
              Quietly luxurious demi-fine jewelry designed for gifting, layering, and everyday polish.
            </p>
            <div className="flex flex-wrap gap-2 pt-2 text-[11px] uppercase tracking-[0.2em] text-stone-500">
              {['Visa', 'Mastercard', 'Amex', 'PayPal'].map((payment) => (
                <span key={payment} className="rounded-full border border-stone-300 px-3 py-1.5">
                  {payment}
                </span>
              ))}
            </div>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title} className="space-y-4">
              <h3 className="text-lg text-[var(--velmora-ink)]">{group.title}</h3>
              <ul className="space-y-3 text-sm text-stone-600">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="transition hover:text-[var(--velmora-gold)]">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-stone-200 pt-6 text-xs uppercase tracking-[0.18em] text-stone-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Velmora Fine Jewelry</p>
          <div className="flex gap-5">
            {['Instagram', 'Pinterest', 'TikTok'].map((social) => (
              <a key={social} href="#" className="transition hover:text-[var(--velmora-gold)]">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
