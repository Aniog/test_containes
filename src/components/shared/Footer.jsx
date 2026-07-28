import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { navLinks, siteConfig } from '@/data/siteData'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-white">SSourcing</span>
              <span className="text-xl font-semibold text-white">China</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-sm text-gray-400 hover:text-white transition-colors">Supplier Sourcing</Link></li>
              <li><Link to="/services" className="text-sm text-gray-400 hover:text-white transition-colors">Factory Verification</Link></li>
              <li><Link to="/services" className="text-sm text-gray-400 hover:text-white transition-colors">Quality Control</Link></li>
              <li><Link to="/services" className="text-sm text-gray-400 hover:text-white transition-colors">Shipping & Logistics</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                <span>{siteConfig.email}</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                <span>{siteConfig.phone}</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>{siteConfig.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-gray-800" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
