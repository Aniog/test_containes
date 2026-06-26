import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'

const linkGroups = [
  {
    title: 'Services',
    links: [
      { to: '/services', label: 'Supplier Sourcing' },
      { to: '/services', label: 'Factory Verification' },
      { to: '/services', label: 'Quality Inspection' },
      { to: '/services', label: 'Production Follow-up' },
      { to: '/services', label: 'Shipping Coordination' },
    ],
  },
  {
    title: 'Company',
    links: [
      { to: '/how-it-works', label: 'How It Works' },
      { to: '/products', label: 'Products We Source' },
      { to: '/case-studies', label: 'Case Studies' },
      { to: '/blog', label: 'Blog' },
      { to: '/contact', label: 'Contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-brand-ink text-white">
      <div className="container-page py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-md bg-white text-brand-ink font-extrabold text-sm">
                SS
              </div>
              <div className="leading-none">
                <p className="text-lg font-bold tracking-tight">SSourcing</p>
                <p className="text-[11px] uppercase tracking-[0.22em] text-white/60 mt-1">
                  China Sourcing Agent
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/70 max-w-md">
              A China-based sourcing partner for overseas buyers. We help you
              find reliable suppliers, verify factories, inspect quality,
              follow production, and coordinate shipping — from inquiry to
              delivery.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-start gap-3 text-white/80">
                <MapPin className="w-4 h-4 mt-0.5 text-brand-accent-2 shrink-0" />
                <span>
                  Yiwu, Zhejiang, China &middot; Shenzhen, Guangdong, China
                </span>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <Mail className="w-4 h-4 mt-0.5 text-brand-accent-2 shrink-0" />
                <a href="mailto:hello@ssourcing.cn" className="hover:text-white">
                  hello@ssourcing.cn
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <Phone className="w-4 h-4 mt-0.5 text-brand-accent-2 shrink-0" />
                <span>+86 579 0000 0000</span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 grid grid-cols-2 gap-8">
            {linkGroups.map((group) => (
              <div key={group.title}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60 mb-4">
                  {group.title}
                </p>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-sm text-white/80 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60 mb-4">
              Start a Project
            </p>
            <p className="text-sm text-white/70 mb-5">
              Tell us what you need to source. We reply within one business
              day with a clear next step.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center h-11 px-5 rounded-md bg-brand-accent text-white font-semibold text-sm hover:bg-brand-accent-2"
            >
              Get a Free Sourcing Quote
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-white/60">
          <p>&copy; {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
          <p>Built for global B2B buyers. English working language.</p>
        </div>
      </div>
    </footer>
  )
}