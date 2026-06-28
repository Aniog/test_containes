import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, ShieldCheck, FileCheck, Truck, Search } from 'lucide-react'
import { site } from '@/data/site-data'

const services = [
  { label: 'Supplier Verification', to: '/services#supplier-verification', icon: ShieldCheck },
  { label: 'Quality Inspection', to: '/services#quality-inspection', icon: FileCheck },
  { label: 'Factory Audits', to: '/services#factory-audits', icon: Search },
  { label: 'Shipping & Logistics', to: '/services#shipping-logistics', icon: Truck },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-footer-bg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary-light rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SC</span>
              </div>
              <span className="font-bold text-lg">{site.name}</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Your trusted China-based sourcing agent helping global buyers find reliable suppliers, 
              verify factories, inspect quality, and coordinate shipping.
            </p>
            <div className="flex gap-3">
              <a
                href={site.social.linkedin}
                className="w-9 h-9 bg-white/10 hover:bg-primary-light rounded-lg flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.label}>
                  <Link to={s.to} className="flex items-center gap-2 text-gray-300 hover:text-white text-sm transition-colors">
                    <s.icon className="w-4 h-4 text-primary-light" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'How It Works', to: '/how-it-works' },
                { label: 'Products We Source', to: '/products' },
                { label: 'Case Studies', to: '/case-studies' },
                { label: 'Blog', to: '/blog' },
                { label: 'Contact Us', to: '/contact' },
              ].map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-gray-300 hover:text-white text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-4">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href={`mailto:${site.email}`} className="flex items-start gap-2 text-gray-300 hover:text-white text-sm transition-colors">
                  <Mail className="w-4 h-4 text-primary-light mt-0.5 shrink-0" />
                  {site.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phone}`} className="flex items-start gap-2 text-gray-300 hover:text-white text-sm transition-colors">
                  <Phone className="w-4 h-4 text-primary-light mt-0.5 shrink-0" />
                  {site.phone}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-gray-300 text-sm">
                  <MapPin className="w-4 h-4 text-primary-light mt-0.5 shrink-0" />
                  {site.address}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>&copy; {year} {site.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}