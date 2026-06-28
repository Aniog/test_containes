import { Link } from 'react-router-dom'

const footerColumns = {
  Shop: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets'],
  Help: ['Shipping', 'Returns', 'Care Guide', 'Contact'],
  Company: ['About', 'Journal', 'Stockists', 'Privacy'],
}

const socialLinks = ['Instagram', 'Pinterest', 'TikTok']
const paymentIcons = ['Visa', 'Mastercard', 'PayPal', 'Apple Pay']

export default function Footer() {
  return (
    <footer className="border-t border-velmora-line bg-velmora-ivory">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_repeat(3,minmax(0,1fr))]">
          <div className="max-w-sm space-y-5">
            <Link to="/" className="font-display text-3xl tracking-brand text-velmora-ink">
              VELMORA
            </Link>
            <p className="text-sm leading-7 text-velmora-taupe">
              Modern demi-fine gold jewelry designed for self-purchase, thoughtful gifting,
              and a quietly polished everyday wardrobe.
            </p>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social}
                  href="#"
                  className="rounded-full border border-velmora-line px-4 py-2 text-[11px] uppercase tracking-product text-velmora-taupe transition hover:border-velmora-gold hover:text-velmora-gold"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerColumns).map(([title, links]) => (
            <div key={title} className="space-y-4">
              <h3 className="text-xs uppercase tracking-brand text-velmora-taupe">{title}</h3>
              <ul className="space-y-3 text-sm text-velmora-ink">
                {links.map((label) => (
                  <li key={label}>
                    <a href="#" className="transition hover:text-velmora-gold">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-velmora-line pt-6 text-[11px] uppercase tracking-product text-velmora-taupe sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {paymentIcons.map((payment) => (
              <span
                key={payment}
                className="rounded-full border border-velmora-line bg-velmora-pearl px-3 py-2 text-[10px] text-velmora-ink"
              >
                {payment}
              </span>
            ))}
          </div>
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
