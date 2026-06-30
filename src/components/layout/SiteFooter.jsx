const footerColumns = {
  Shop: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets'],
  Help: ['Shipping', 'Returns', 'Care Guide', 'FAQ'],
  Company: ['About Velmora', 'Journal', 'Contact', 'Privacy'],
}

const payments = ['Visa', 'Mastercard', 'Amex', 'PayPal']
const socialLinks = ['Instagram', 'Pinterest', 'TikTok']

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-stone-950 py-14 text-stone-300 sm:py-20">
      <div className="section-shell grid gap-12 lg:grid-cols-[1.2fr_2fr]">
        <div className="space-y-5">
          <p className="font-display text-2xl tracking-[0.35em] text-stone-50">VELMORA</p>
          <p className="max-w-md text-sm leading-7 text-stone-400">
            Premium demi-fine jewelry with a warm editorial point of view, designed for gifting and everyday polish.
          </p>
          <div className="flex flex-wrap gap-2">
            {payments.map((payment) => (
              <span key={payment} className="rounded-full border border-white/10 px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-stone-200">
                {payment}
              </span>
            ))}
          </div>
        </div>
        <div className="grid gap-10 sm:grid-cols-3">
          {Object.entries(footerColumns).map(([title, items]) => (
            <div key={title} className="space-y-4">
              <h3 className="text-sm uppercase tracking-[0.24em] text-stone-100">{title}</h3>
              <ul className="space-y-3 text-sm text-stone-400">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="section-shell mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.18em] text-stone-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Velmora Fine Jewelry</p>
        <div className="flex flex-wrap gap-4 text-stone-300">
          {socialLinks.map((link) => (
            <span key={link}>{link}</span>
          ))}
        </div>
      </div>
    </footer>
  )
}
