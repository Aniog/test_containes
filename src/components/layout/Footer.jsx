import { Link } from 'react-router-dom'
import { Ship, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white text-brand-navy">
                <Ship className="h-5 w-5" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-base font-semibold text-white">SSourcing China</span>
                <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/60">Sourcing Agent</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              A China-based sourcing partner helping overseas buyers find reliable suppliers,
              inspect quality, and ship on time.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/services" className="hover:text-white">Supplier Sourcing</Link></li>
              <li><Link to="/services" className="hover:text-white">Factory Verification</Link></li>
              <li><Link to="/services" className="hover:text-white">Quality Inspection</Link></li>
              <li><Link to="/services" className="hover:text-white">Production Follow-up</Link></li>
              <li><Link to="/services" className="hover:text-white">Shipping & Logistics</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/how-it-works" className="hover:text-white">How It Works</Link></li>
              <li><Link to="/products" className="hover:text-white">Products We Source</Link></li>
              <li><Link to="/case-studies" className="hover:text-white">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 text-white/60 shrink-0" />
                <span>Room 1208, Yiwu International Trade City, Yiwu, Zhejiang, China</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-white/60 shrink-0" />
                <a href="mailto:hello@ssourcingchina.com" className="hover:text-white">hello@ssourcingchina.com</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-white/60 shrink-0" />
                <span>+86 138 0000 0000 (WhatsApp)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-white/60">
          <p>© {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
          <p>Operating hours: Mon–Sat, 9:00–18:00 (GMT+8)</p>
        </div>
      </div>
    </footer>
  )
}
