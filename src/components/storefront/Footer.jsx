import { Link } from 'react-router-dom'

const footerLinks = {
  Shop: [
    { label: 'All Jewelry', to: '/shop' },
    { label: 'Earrings', to: '/shop?category=earrings' },
    { label: 'Necklaces', to: '/shop?category=necklaces' },
    { label: 'Huggies', to: '/shop?category=huggies' },
  ],
  Help: [
    { label: 'Shipping', to: '/shop' },
    { label: 'Returns', to: '/shop' },
    { label: 'Care Guide', to: '/#journal' },
    { label: 'Contact', to: '/#journal' },
  ],
  Company: [
    { label: 'Our Story', to: '/#about' },
    { label: 'Journal', to: '/#journal' },
    { label: 'Stockists', to: '/shop' },
    { label: 'Careers', to: '/shop' },
  ],
}

const paymentIcons = ['Visa', 'Mastercard', 'AmEx', 'PayPal']
const socials = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'Pinterest', href: 'https://pinterest.com' },
  { label: 'TikTok', href: 'https://tiktok.com' },
]

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-obsidian text-ivory">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_repeat(3,minmax(0,1fr))]">
          <div>
            <p className="font-serif text-2xl tracking-[0.36em] text-ivory">VELMORA</p>
            <p className="mt-5 max-w-sm text-sm leading-7 text-ivory/70">
              Demi-fine jewelry for gifting, keeping, and collecting. Designed with a warm editorial point of view.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-xs uppercase tracking-[0.28em] text-ivory/60">{title}</h3>
              <ul className="mt-5 space-y-3 text-sm text-ivory/80">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="transition hover:text-champagne">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-8 text-sm text-ivory/70 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            {paymentIcons.map((payment) => (
              <span key={payment} className="rounded-full border border-white/20 px-3 py-2 text-xs uppercase tracking-[0.22em] text-ivory/80">
                {payment}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-champagne"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
