import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Clock, Linkedin, Globe } from 'lucide-react'
import { SITE } from '@/lib/seo'

const COLUMNS = [
  {
    title: 'Services',
    links: [
      { to: '/services#sourcing', label: 'Supplier Sourcing' },
      { to: '/services#verification', label: 'Factory Audit' },
      { to: '/services#qc', label: 'Quality Inspection' },
      { to: '/services#production', label: 'Production Follow-up' },
      { to: '/services#shipping', label: 'Shipping & Logistics' },
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

const Footer = () => (
  <footer className="bg-primary text-slate-200">
    <div className="container-content py-14 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4" aria-label="SSourcing China home">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-white text-primary font-extrabold text-lg">
              S
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-lg font-bold text-white tracking-tight">SSourcing</span>
              <span className="text-[10px] font-semibold text-accent tracking-widest uppercase">China</span>
            </span>
          </Link>
          <p className="text-sm text-slate-300 leading-relaxed max-w-xs">
            A B2B China sourcing partner for overseas buyers. We help you find reliable suppliers, verify factories, inspect quality, and ship to your destination.
          </p>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              {col.title}
            </h3>
            <ul className="space-y-2.5">
              {col.links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
              <span className="text-slate-300">{SITE.address}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-accent flex-shrink-0" />
              <a href={`mailto:${SITE.email}`} className="text-slate-300 hover:text-white">
                {SITE.email}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-accent flex-shrink-0" />
              <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="text-slate-300 hover:text-white">
                {SITE.phone}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
              <span className="text-slate-300">{SITE.hours}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Globe className="w-4 h-4 text-accent flex-shrink-0" />
              <span className="text-slate-300">English / 中文</span>
            </li>
          </ul>
          <div className="flex items-center gap-3 mt-5">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="w-9 h-9 inline-flex items-center justify-center rounded-md bg-white/5 hover:bg-white/10 text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <p className="text-xs text-slate-400">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
        <p className="text-xs text-slate-400">
          We do not represent any factory. Sourcing decisions are made by you, with our independent verification.
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
