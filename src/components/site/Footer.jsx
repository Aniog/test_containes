import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ArrowUpRight, Linkedin, Youtube, Facebook } from 'lucide-react'

const productLinks = [
  { to: '/products/double-folding-machine', label: 'Double Folding Machine' },
  { to: '/products/double-folder', label: 'Double Folder' },
  { to: '/products/sheet-metal-folder', label: 'Sheet Metal Folder' },
  { to: '/products/sheet-metal-folding-machine', label: 'Sheet Metal Folding Machine' },
  { to: '/products/metal-folder', label: 'Metal Folder' },
  { to: '/products/metal-folder-machine', label: 'Metal Folder Machine' },
  { to: '/products/metal-folding-machine', label: 'Metal Folding Machine' },
]

const companyLinks = [
  { to: '/about', label: 'About ARTITECT' },
  { to: '/products', label: 'All products' },
  { to: '/contact', label: 'Request a quote' },
]

const supportLinks = [
  { href: '#', label: 'Field service' },
  { href: '#', label: 'Spare parts' },
  { href: '#', label: 'Documentation' },
  { href: '#', label: 'Warranty' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-2 text-white">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-brass/10 blur-3xl" />

      <div className="relative">
        {/* Upper CTA strip */}
        <div className="border-b border-line">
          <div className="container-page flex flex-col items-start justify-between gap-6 py-12 md:flex-row md:items-center md:py-16">
            <div>
              <p className="eyebrow eyebrow-line mb-4">Engineered for fabrication</p>
              <h3 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                Talk to an applications engineer.
              </h3>
              <p className="mt-3 max-w-xl text-sm text-steel">
                Send us a part drawing or a sample. We will recommend the right
                ARTITECT machine, prove it on your parts, and quote a firm price
                within five business days.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="btn-primary">
                Request a quote
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
              </Link>
              <a href="tel:+15551234567" className="btn-secondary-dark">
                <Phone className="h-4 w-4" strokeWidth={1.75} />
                +1 (555) 123-4567
              </a>
            </div>
          </div>
        </div>

        {/* Main grid */}
        <div className="container-page grid grid-cols-2 gap-10 py-16 md:grid-cols-4 md:gap-12 md:py-20">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-md border border-brass/60 bg-ink-3 text-brass">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M3 20h18" />
                  <path d="M5 20V8l7-4 7 4v12" />
                  <path d="M9 20v-6h6v6" />
                  <path d="M9 12h6" />
                </svg>
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-sm font-semibold tracking-[0.18em] text-white">
                  ARTITECT
                </span>
                <span className="mt-0.5 text-[10px] font-medium tracking-[0.32em] text-steel">
                  MACHINERY
                </span>
              </span>
            </div>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-steel">
              A complete family of sheet metal folding machines, engineered for
              fabricators who measure success in tenths of a degree.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-steel transition-colors hover:border-brass hover:text-brass"
              >
                <Linkedin className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-steel transition-colors hover:border-brass hover:text-brass"
              >
                <Youtube className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-steel transition-colors hover:border-brass hover:text-brass"
              >
                <Facebook className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-eyebrow text-brass">
              Products
            </h4>
            <ul className="mt-5 space-y-3">
              {productLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-steel transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-eyebrow text-brass">
              Company
            </h4>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-steel transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="mt-10 text-xs font-semibold uppercase tracking-eyebrow text-brass">
              Support
            </h4>
            <ul className="mt-5 space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-steel transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-eyebrow text-brass">
              Contact
            </h4>
            <ul className="mt-5 space-y-4 text-sm text-steel">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-brass" strokeWidth={1.5} />
                <span>
                  124 Foundry Lane<br />
                  Bay 7, Industrial Park<br />
                  Stuttgart, Germany
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-brass" strokeWidth={1.5} />
                <a href="mailto:sales@artitect-machinery.com" className="hover:text-white">
                  sales@artitect-machinery.com
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-brass" strokeWidth={1.5} />
                <a href="tel:+15551234567" className="hover:text-white">
                  +1 (555) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-line">
          <div className="container-page flex flex-col items-start justify-between gap-3 py-6 text-xs text-steel md:flex-row md:items-center">
            <p>© {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Cookies</a>
              <a href="#" className="hover:text-white">Compliance</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
