import { Link } from 'react-router-dom'
import { Mail, MapPin, Ship } from 'lucide-react'

const footerLinks = [
  { label: 'Services', href: '/services' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Products We Source', href: '/products-we-source' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

const SiteFooter = () => (
  <footer className="bg-brand-navy text-white">
    <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
      <div>
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-base font-bold text-brand-navy">
            SS
          </span>
          <div>
            <p className="text-lg font-bold">SSourcing China</p>
            <p className="text-sm text-white/70">Practical sourcing support for overseas buyers</p>
          </div>
        </div>
        <p className="mt-5 max-w-md text-sm leading-7 text-white/75">
          We help buyers find suitable suppliers, verify factories, monitor quality, follow production, and coordinate export shipping from China.
        </p>
      </div>

      <div>
        <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">Company</h2>
        <nav className="mt-5 grid gap-3">
          {footerLinks.map((link) => (
            <Link key={link.href} to={link.href} className="text-sm text-white/80 transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div>
        <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">Contact</h2>
        <div className="mt-5 grid gap-4 text-sm text-white/80">
          <p className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-brand-amber" /> China-based sourcing coordination</p>
          <p className="flex items-start gap-3"><Mail className="mt-0.5 h-4 w-4 text-brand-amber" /> Send your RFQ through the inquiry form</p>
          <p className="flex items-start gap-3"><Ship className="mt-0.5 h-4 w-4 text-brand-amber" /> Factory, QC, production, and shipping support</p>
        </div>
      </div>
    </div>
    <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-white/60">
      © 2026 SSourcing China. All rights reserved.
    </div>
  </footer>
)

export default SiteFooter
