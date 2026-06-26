import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

const footerLinks = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link to="/" className="inline-block">
              <span className="text-2xl font-extrabold tracking-tight">ARTITECT</span>
              <span className="ml-2 text-2xl font-light tracking-wide text-amber-500">
                MACHINERY
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-300">
              Precision-engineered double folding machines and sheet metal folding
              solutions for workshops and industrial manufacturers worldwide.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-100">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-300 transition-colors hover:text-amber-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-100">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                <span>
                  123 Industrial Drive, Suite 400
                  <br />
                  Manufacturing City, MC 12345
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-300">
                <Phone className="h-4 w-4 shrink-0 text-amber-500" />
                <a href="tel:+1234567890" className="hover:text-amber-400">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-300">
                <Mail className="h-4 w-4 shrink-0 text-amber-500" />
                <a href="mailto:info@artitectmachinery.com" className="hover:text-amber-400">
                  info@artitectmachinery.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-slate-700" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-slate-400 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.</p>
          <p>Precision engineering for every bend.</p>
        </div>
      </div>
    </footer>
  )
}
