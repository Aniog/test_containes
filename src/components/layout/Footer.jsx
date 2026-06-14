import { Link } from 'react-router-dom'
import { Globe2, Mail, Phone, MapPin, Linkedin, Facebook, Youtube } from 'lucide-react'

const productLinks = [
  { to: '/products?cat=consumer', label: 'Consumer Products' },
  { to: '/products?cat=industrial', label: 'Industrial Equipment' },
  { to: '/products?cat=electronics', label: 'Electronics & Components' },
  { to: '/products?cat=textile', label: 'Apparel & Textiles' },
  { to: '/products?cat=home', label: 'Home & Kitchen' },
  { to: '/products?cat=packaging', label: 'Packaging & Print' },
]

const serviceLinks = [
  { to: '/services#supplier', label: 'Supplier Sourcing' },
  { to: '/services#verification', label: 'Factory Verification' },
  { to: '/services#qc', label: 'Quality Inspection' },
  { to: '/services#production', label: 'Production Follow-up' },
  { to: '/services#shipping', label: 'Shipping & Logistics' },
  { to: '/services#private-label', label: 'Private Label & OEM' },
]

const companyLinks = [
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/blog', label: 'Blog & Guides' },
  { to: '/contact', label: 'Contact Us' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="container-x py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-white text-brand-navy flex items-center justify-center">
                <Globe2 className="w-5 h-5" />
              </div>
              <div className="font-bold text-lg">SSourcing China</div>
            </div>
            <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-sm">
              A China-based sourcing agent for overseas buyers. We help importers,
              brands, and wholesalers find reliable factories, verify production
              capacity, inspect quality, and move shipments on schedule.
            </p>

            <div className="mt-6 space-y-2.5 text-sm text-white/80">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-white/60" />
                <a href="mailto:[email protected]" className="hover:text-white">
                  [email protected]
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-white/60" />
                <a href="tel:+8675588889999" className="hover:text-white">
                  +86 755 8888 9999
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-white/60 mt-0.5" />
                <span>
                  Building 8, Innovation Park, Nanshan District, Shenzhen, China
                </span>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-md bg-white/10 hover:bg-white/20 flex items-center justify-center">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-md bg-white/10 hover:bg-white/20 flex items-center justify-center">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-md bg-white/10 hover:bg-white/20 flex items-center justify-center">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60">
              Products
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {productLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-white/80 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60">
              Services
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {serviceLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-white/80 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60">
              Company
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {companyLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-white/80 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-xl bg-white/5 border border-white/10 p-4">
              <div className="text-xs text-white/60 uppercase tracking-wider">Office Hours</div>
              <div className="mt-1 text-sm text-white/85">
                Mon–Fri, 9:00 – 18:00 (GMT+8)
              </div>
              <div className="text-xs text-white/60 mt-2">
                Replies within 1 business day.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <div>© {new Date().getFullYear()} SSourcing China. All rights reserved.</div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
