import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Products', href: '/products' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="flex items-center gap-2 text-xl font-bold text-white"
            >
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-brand-800 text-white text-sm font-extrabold">
                SS
              </span>
              <span>SSourcing China</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              A China-based sourcing agent helping overseas buyers find reliable
              suppliers, verify factories, control quality, and coordinate
              shipping.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-slate-400 hover:text-white transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              <li>Supplier Discovery</li>
              <li>Factory Verification</li>
              <li>Quality Inspection</li>
              <li>Production Monitoring</li>
              <li>Shipping Coordination</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-brand-200 shrink-0" />
                <span>hello@ssourcingchina.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-200 shrink-0" />
                <span>+86 755 1234 5678</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-200 shrink-0" />
                <span>Shenzhen, Guangdong, China</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-slate-300 transition">
              Privacy Policy
            </Link>
            <Link to="/" className="hover:text-slate-300 transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
