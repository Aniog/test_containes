import { Link } from 'react-router-dom'
import { Globe, Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="container-custom section-padding">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Globe className="h-6 w-6 text-blue-900" />
              <span className="text-lg font-bold text-gray-900">SSourcing China</span>
            </div>
            <p className="text-sm text-gray-500">
              Your trusted China sourcing agent. We help global buyers find reliable suppliers,
              verify factories, inspect quality, and coordinate shipping.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900">Services</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link to="/services" className="hover:text-blue-900">Supplier Sourcing</Link></li>
              <li><Link to="/services" className="hover:text-blue-900">Factory Verification</Link></li>
              <li><Link to="/services" className="hover:text-blue-900">Quality Inspection</Link></li>
              <li><Link to="/services" className="hover:text-blue-900">Production Follow-up</Link></li>
              <li><Link to="/services" className="hover:text-blue-900">Shipping Coordination</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900">Company</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link to="/how-it-works" className="hover:text-blue-900">How It Works</Link></li>
              <li><Link to="/products" className="hover:text-blue-900">Products We Source</Link></li>
              <li><Link to="/case-studies" className="hover:text-blue-900">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-blue-900">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-blue-900">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-blue-900" />
                <a href="mailto:info@ssourcingchina.com" className="hover:text-blue-900">info@ssourcingchina.com</a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-blue-900" />
                <span>+86 XXX XXXX XXXX</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-900" />
                <span>Guangzhou, China</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
