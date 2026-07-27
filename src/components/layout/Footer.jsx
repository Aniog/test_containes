import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = {
  services: [
    { label: 'Supplier Sourcing', path: '/services' },
    { label: 'Factory Verification', path: '/services' },
    { label: 'Quality Control', path: '/services' },
    { label: 'Production Follow-Up', path: '/services' },
    { label: 'Shipping Coordination', path: '/services' },
  ],
  company: [
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact Us', path: '/contact' },
  ],
  products: [
    { label: 'Electronics', path: '/products' },
    { label: 'Home & Kitchen', path: '/products' },
    { label: 'Industrial', path: '/products' },
    { label: 'Textiles & Apparel', path: '/products' },
    { label: 'Packaging', path: '/products' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-slate-300">
      <div className="container-main section-padding">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded bg-white/10">
                <span className="text-sm font-bold text-white">SS</span>
              </div>
              <span className="text-lg font-bold text-white">
                SSourcing<span className="font-normal text-slate-400"> China</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Your trusted China sourcing agent. We help global buyers find reliable suppliers, verify factories, control quality, and coordinate shipping — end to end.
            </p>
            <div className="mt-6 flex flex-col gap-3 text-sm">
              <a href="mailto:hello@ssourcingchina.com" className="flex items-center gap-2 hover:text-white">
                <Mail className="h-4 w-4 text-slate-500" />
                hello@ssourcingchina.com
              </a>
              <a href="tel:+8675588888888" className="flex items-center gap-2 hover:text-white">
                <Phone className="h-4 w-4 text-slate-500" />
                +86 755 8888 8888
              </a>
              <span className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />
                Room 1205, Block A, Shennan Blvd, Futian District, Shenzhen, China
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Products
            </h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-slate-300">Privacy Policy</Link>
            <Link to="/" className="hover:text-slate-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
