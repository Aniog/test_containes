import { Link } from 'react-router-dom'
import { Instagram, Facebook } from 'lucide-react'

const paymentMethods = [
  { key: 'visa', label: 'VISA', ariaLabel: 'Visa' },
  { key: 'mastercard', label: 'MC', ariaLabel: 'Mastercard' },
  { key: 'amex', label: 'AMEX', ariaLabel: 'American Express' },
  { key: 'paypal', label: 'PAYPAL', ariaLabel: 'PayPal' },
]

const footerLinks = {
  shop: [
    { label: 'All Jewelry', href: '/shop' },
    { label: 'Earrings', href: '/shop?category=earrings' },
    { label: 'Necklaces', href: '/shop?category=necklaces' },
    { label: 'Huggies', href: '/shop?category=huggies' },
    { label: 'Gift Sets', href: '/shop?category=sets' },
  ],
  help: [
    { label: 'Shipping & Returns', href: '#' },
    { label: 'Care Guide', href: '#' },
    { label: 'FAQ', href: '#' },
    { label: 'Contact Us', href: '#' },
  ],
  company: [
    { label: 'Our Story', href: '/about' },
    { label: 'Journal', href: '/journal' },
    { label: 'Sustainability', href: '#' },
    { label: 'Stockists', href: '#' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-vel-base text-white">
      <div className="container-vel py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="font-serif text-3xl font-medium uppercase tracking-widest"
            >
              Velmora
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Demi-fine jewelry crafted to be treasured. Designed for everyday
              luxury and the moments worth remembering.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="text-white/70 transition-colors hover:text-vel-accent"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-white/70 transition-colors hover:text-vel-accent"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/50">
              Shop
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              {footerLinks.shop.map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="hover:text-vel-accent transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/50">
              Help
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              {footerLinks.help.map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="hover:text-vel-accent transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/50">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              {footerLinks.company.map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="hover:text-vel-accent transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {paymentMethods.map((method) => (
              <div
                key={method.key}
                aria-label={method.ariaLabel}
                title={method.ariaLabel}
                className="flex h-7 w-10 items-center justify-center rounded bg-white/10 text-[9px] font-semibold uppercase tracking-wide text-white/80"
              >
                {method.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
