import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

const footerLinks = {
  Services: [
    { name: 'Supplier Verification', path: '/services' },
    { name: 'Quality Inspection', path: '/services' },
    { name: 'Production Monitoring', path: '/services' },
    { name: 'Shipping Coordination', path: '/services' },
  ],
  Company: [
    { name: 'About Us', path: '/' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
  ],
  Resources: [
    { name: 'Products We Source', path: '/products' },
    { name: 'FAQ', path: '/' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Get a Quote', path: '/contact' },
  ],
}

const Footer = () => {
  return (
    <footer className="bg-brand-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Banner */}
        <div className="py-12 border-b border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white">
                Ready to Source from China?
              </h3>
              <p className="text-gray-300 mt-1">
                Get a free quote within 24 hours. No obligation, no hidden fees.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors shrink-0"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Links Grid */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold text-white">
                SSourcing<span className="text-brand-300"> China</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Your trusted sourcing partner in China. We help global buyers find
              reliable suppliers, verify factories, and manage quality from
              factory floor to final delivery.
            </p>
            <div className="mt-5 space-y-2.5">
              <a href="mailto:info@ssourcingchina.com" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                info@ssourcingchina.com
              </a>
              <a href="tel:+86-21-5555-0000" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                +86 21 5555 0000
              </a>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 shrink-0" />
                Shanghai, China
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
                {title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
