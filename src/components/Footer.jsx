import { Link } from 'react-router-dom'
import { Mail, MapPin, MessageSquare, Clock } from 'lucide-react'

const SERVICE_LINKS = [
  { to: '/services', label: 'Supplier Sourcing' },
  { to: '/services', label: 'Factory Verification' },
  { to: '/services', label: 'Quality Inspection' },
  { to: '/services', label: 'Production Follow-up' },
  { to: '/services', label: 'Shipping & Logistics' },
]

const COMPANY_LINKS = [
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/products', label: 'Products We Source' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/blog', label: 'Blog & Resources' },
  { to: '/contact', label: 'Contact Us' },
]

function FooterCol({ title, links }) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-white">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((l, i) => (
          <li key={i}>
            <Link to={l.to} className="text-sm text-slate-300 transition-colors hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-brand-ink text-slate-300">
      <div className="container-page py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-9 w-9 items-center justify-center rounded-md bg-white">
                <span className="text-sm font-bold text-brand-ink">S</span>
                <span className="absolute -right-0.5 -bottom-0.5 h-2.5 w-2.5 rounded-full border-2 border-brand-ink bg-brand-accent" />
              </span>
              <div className="leading-tight">
                <div className="text-base font-bold tracking-tight text-white">SSourcing</div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">China Sourcing Partner</div>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-slate-300">
              Your English-speaking sourcing partner in China. We help overseas buyers find reliable factories, verify them on the ground, inspect quality, and ship on time.
            </p>
            <div className="mt-6 space-y-2.5 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-400" />
                <span>Shenzhen, Guangdong, China</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-400" />
                <a href="mailto:hello@ssourcing.cn" className="hover:text-white">hello@ssourcing.cn</a>
              </div>
              <div className="flex items-start gap-2.5">
                <MessageSquare className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-400" />
                <span>WhatsApp / WeChat available on request</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-400" />
                <span>Mon - Sat, 9:00 - 18:00 (GMT+8)</span>
              </div>
            </div>
          </div>

          <FooterCol title="Services" links={SERVICE_LINKS} />
          <FooterCol title="Company" links={COMPANY_LINKS} />
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Get a Free Quote</h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              Tell us what you need. We will reply within one business day with a sourcing plan and indicative cost.
            </p>
            <Link
              to="/contact"
              className="mt-5 inline-flex items-center justify-center rounded-md bg-brand-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-accent-dark"
            >
              Start Your Sourcing Request
            </Link>
            <div className="mt-6 rounded-lg border border-white/10 bg-white/5 p-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">No charge for</div>
              <ul className="mt-2 space-y-1 text-sm text-slate-200">
                <li>· Initial sourcing consultation</li>
                <li>· Supplier shortlist with quotes</li>
                <li>· Sample coordination</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-400 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} SSourcing China. All rights reserved.</div>
          <div className="flex gap-5">
            <Link to="/contact" className="hover:text-white">Contact</Link>
            <Link to="/blog" className="hover:text-white">Resources</Link>
            <span>Privacy · Terms</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
