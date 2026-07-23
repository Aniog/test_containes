import { Link } from 'react-router-dom'

const footerGroups = {
  Shop: ['New In', 'Earrings', 'Necklaces', 'Gift Sets'],
  Help: ['Shipping', 'Returns', 'Care Guide', 'Contact'],
  Company: ['About', 'Journal', 'Materials', 'Stockists'],
}

const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'PayPal']
const socials = ['Instagram', 'Pinterest', 'TikTok']

const Footer = () => {
  return (
    <footer className="border-t border-line bg-obsidian text-parchment">
      <div className="section-frame py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="max-w-sm">
            <Link to="/" className="font-display text-4xl tracking-brand text-parchment">
              VELMORA
            </Link>
            <p className="mt-4 text-sm leading-7 text-parchment/70">
              Quietly luxurious demi-fine jewelry designed for self-gifting, everyday polish, and keepsake moments.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {paymentIcons.map((item) => (
                <span key={item} className="rounded-full border border-parchment/20 px-3 py-2 text-xs uppercase tracking-button text-parchment/80">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {Object.entries(footerGroups).map(([title, items]) => (
            <div key={title}>
              <h3 className="text-sm uppercase tracking-button text-parchment/60">{title}</h3>
              <ul className="mt-5 space-y-3 text-sm text-parchment/80">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-parchment/10 pt-6 text-sm text-parchment/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-5">
            {socials.map((item) => (
              <a key={item} href="#" className="transition duration-300 hover:text-gold">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
