import { Instagram, Facebook, Gem } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerGroups = [
  {
    title: 'Shop',
    links: [
      { label: 'Earrings', to: '/shop?category=Earrings' },
      { label: 'Necklaces', to: '/shop?category=Necklaces' },
      { label: 'Huggies', to: '/shop?category=Huggies' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping', to: '/about' },
      { label: 'Returns', to: '/about' },
      { label: 'FAQs', to: '/about' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Velmora', to: '/about' },
      { label: 'Journal', to: '/journal' },
      { label: 'Contact', to: '/about' },
    ],
  },
]

const paymentLabels = ['Visa', 'Mastercard', 'Amex', 'PayPal']

const Footer = () => {
  return (
    <footer className="border-t border-[rgba(215,195,171,0.7)] bg-[#241a13] text-[#f7f2ea]">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[1.4fr_repeat(3,1fr)] lg:px-10">
        <div>
          <Link to="/" className="font-['Cormorant_Garamond'] text-4xl tracking-[0.32em] text-[#f7f2ea]">
            VELMORA
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-[rgba(247,242,234,0.72)]">
            Quiet-luxury demi-fine jewelry designed for self-purchase, gifting,
            and the pieces you reach for again tomorrow.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {[Instagram, Facebook, Gem].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(247,242,234,0.2)] text-[#f7f2ea] transition hover:border-[#c19a6b] hover:text-[#c19a6b]"
                aria-label="Social link"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {footerGroups.map((group) => (
          <div key={group.title}>
            <p className="text-xs uppercase tracking-[0.32em] text-[#c19a6b]">
              {group.title}
            </p>
            <div className="mt-5 space-y-4 text-sm text-[rgba(247,242,234,0.76)]">
              {group.links.map((link) => (
                <Link key={link.label} to={link.to} className="block transition hover:text-[#f7f2ea]">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-[rgba(247,242,234,0.1)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 text-xs uppercase tracking-[0.28em] text-[rgba(247,242,234,0.56)] sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div className="flex flex-wrap items-center gap-3">
            {paymentLabels.map((label) => (
              <span
                key={label}
                className="rounded-full border border-[rgba(247,242,234,0.15)] px-3 py-2 text-[10px] text-[rgba(247,242,234,0.7)]"
              >
                {label}
              </span>
            ))}
          </div>
          <p>© 2026 Velmora Fine Jewelry</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
