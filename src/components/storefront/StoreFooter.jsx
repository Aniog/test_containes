import { Instagram, Facebook, CreditCard, Landmark, WalletCards } from 'lucide-react'
import { Link } from 'react-router-dom'

const columns = {
  Shop: ['New Arrivals', 'Earrings', 'Necklaces', 'Gift Sets'],
  Help: ['Shipping', 'Returns', 'Care Guide', 'Contact'],
  Company: ['About Velmora', 'Journal', 'Our Materials', 'Privacy'],
}

const socials = [
  { label: 'Instagram', icon: Instagram },
  { label: 'Pinterest', icon: Landmark },
  { label: 'Facebook', icon: Facebook },
]

const paymentIcons = [CreditCard, WalletCards, Landmark]

export default function StoreFooter() {
  return (
    <footer className="border-t border-line/70 bg-surface pb-8 pt-14 sm:pt-16">
      <div className="section-shell grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-3xl tracking-[0.24em] text-ink">
              VELMORA
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-7 text-muted">
              Demi-fine jewelry for self-purchase, gifting, and the rituals that make everyday style feel treasured.
            </p>
          </div>

          {Object.entries(columns).map(([title, items]) => (
            <div key={title}>
              <h3 className="text-sm font-medium uppercase tracking-button text-ink">{title}</h3>
              <ul className="mt-4 grid gap-3 text-sm text-muted">
                {items.map((item) => (
                  <li key={item}>
                    <a href="/" className="transition hover:text-ink">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid gap-6">
          <div>
            <h3 className="text-sm font-medium uppercase tracking-button text-ink">Payments</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {paymentIcons.map((Icon, index) => (
                <span
                  key={`payment-${index}`}
                  className="grid h-11 w-14 place-items-center rounded-full border border-line bg-parchment text-muted"
                >
                  <Icon className="h-4 w-4" />
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase tracking-button text-ink">Follow along</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {socials.map(({ label, icon: Icon }) => (
                <a
                  key={label}
                  href="/"
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-parchment px-4 py-3 text-sm text-muted transition hover:border-gold hover:text-ink"
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
