import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy text-gray-300">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-white text-xl font-bold tracking-tight">
                S<span className="text-accent">Sourcing</span> China
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400 mb-4">
              Your trusted China sourcing agent. We help global buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Website">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2.5">
              {[
                'Supplier Sourcing',
                'Factory Verification',
                'Quality Inspection',
                'Production Monitoring',
                'Shipping Coordination',
                'Custom Solutions',
              ].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-sm text-gray-400 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2.5">
              {[
                { name: 'How It Works', path: '/how-it-works' },
                { name: 'Products We Source', path: '/products' },
                { name: 'Case Studies', path: '/case-studies' },
                { name: 'Blog', path: '/blog' },
                { name: 'Contact Us', path: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400">
                  Room 1805, Block A, Fortune Plaza<br />
                  Shenzhen, Guangdong, China 518000
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a href="tel:+8613812345678" className="text-sm text-gray-400 hover:text-white transition-colors">
                  +86 138 1234 5678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href="mailto:info@ssourcingchina.com" className="text-sm text-gray-400 hover:text-white transition-colors">
                  info@ssourcingchina.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-700 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
