const footerColumns = {
  Shop: ['Bestsellers', 'Necklaces', 'Earrings', 'Huggies'],
  Help: ['Shipping', 'Returns', 'Gift Cards', 'Care Guide'],
  Company: ['Our Story', 'Journal', 'Wholesale', 'Contact'],
}

export default function SiteFooter() {
  return (
    <footer className="border-t border-parchment bg-obsidian text-shell">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.3fr_repeat(3,minmax(0,1fr))]">
          <div className="space-y-5">
            <p className="font-serif text-3xl tracking-[0.32em]">VELMORA</p>
            <p className="max-w-sm text-sm leading-7 text-shell/70">
              Quietly luxurious demi-fine jewelry designed for self-purchase, gifting,
              and every day worth treasuring.
            </p>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-shell/60">
              <span>Visa</span>
              <span>Mastercard</span>
              <span>Amex</span>
              <span>PayPal</span>
            </div>
          </div>

          {Object.entries(footerColumns).map(([title, links]) => (
            <div key={title} className="space-y-4">
              <h3 className="text-xs uppercase tracking-[0.24em] text-champagne">{title}</h3>
              <ul className="space-y-3 text-sm text-shell/75">
                {links.map((link) => (
                  <li key={link}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-shell/10 pt-6 text-xs uppercase tracking-[0.2em] text-shell/55 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Velmora Fine Jewelry</p>
          <div className="flex gap-5">
            <a href="#">Instagram</a>
            <a href="#">Pinterest</a>
            <a href="#">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
