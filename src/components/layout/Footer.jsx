import { Link } from 'react-router-dom'
import { Container, Mail, Phone, MapPin } from 'lucide-react'

const columns = [
  {
    title: 'Services',
    links: [
      { to: '/services', label: 'Supplier Sourcing' },
      { to: '/services', label: 'Factory Verification' },
      { to: '/services', label: 'Quality Inspection' },
      { to: '/services', label: 'Production Follow-up' },
      { to: '/services', label: 'Shipping & Logistics' },
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
    <footer className="bg-[#0B2545] text-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2 max-w-md">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10">
                <Container className="h-5 w-5 text-white" strokeWidth={2.25} />
              </span>
              <span className="text-lg font-bold tracking-tight text-white">SSourcing China</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              A China-based sourcing agent helping overseas buyers find reliable suppliers, verify
              factories, inspect quality, follow production and coordinate shipping.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-slate-400" />
                <span>Yiwu Office, Zhejiang Province, China</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 flex-none text-slate-400" />
                <a href="mailto:hello@ssourcing-china.com" className="hover:text-white">
                  hello@ssourcing-china.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 flex-none text-slate-400" />
                <span>+86 138 0000 0000 (WhatsApp / WeChat)</span>
              </li>
            </ul>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link, idx) => (
                  <li key={`${col.title}-${idx}`}>
                    <Link
                      to={link.to}
                      className="text-sm text-slate-300 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
          <p>Trade & sourcing services for international B2B buyers.</p>
        </div>
      </div>
    </footer>
  )
}
