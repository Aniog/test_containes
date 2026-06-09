import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'

const footerLinks = {
  services: [
    { label: 'Supplier Search', href: '/services' },
    { label: 'Factory Verification', href: '/services' },
    { label: 'Quality Inspection', href: '/services' },
    { label: 'Production Follow-up', href: '/services' },
    { label: 'Shipping Coordination', href: '/services' },
  ],
  company: [
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  products: [
    { label: 'Electronics', href: '/products' },
    { label: 'Machinery', href: '/products' },
    { label: 'Textiles', href: '/products' },
    { label: 'Home Goods', href: '/products' },
    { label: 'Packaging', href: '/products' },
  ],
}

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-navy-950">SSourcing</span>
              <span className="rounded bg-navy-950 px-1.5 py-0.5 text-xs font-semibold text-white">China</span>
            </div>
            <p className="text-sm text-slate-500">
              Your trusted China sourcing agent. We help global buyers find reliable suppliers, verify factories, and manage quality and shipping.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>Suite 1206, Futian District, Shenzhen, China</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Mail className="h-4 w-4 shrink-0" />
                <span>hello@ssourcingchina.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+86 755 8888 1234</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-slate-900">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-slate-500 transition-colors hover:text-navy-950">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-slate-900">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-slate-500 transition-colors hover:text-navy-950">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-slate-900">Products We Source</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-slate-500 transition-colors hover:text-navy-950">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="text-xs text-slate-500">Privacy Policy</span>
            <span className="text-xs text-slate-500">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
