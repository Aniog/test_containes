import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

const footerLinks = {
  services: [
    { label: 'Supplier Sourcing', path: '/services' },
    { label: 'Factory Verification', path: '/services' },
    { label: 'Quality Inspection', path: '/services' },
    { label: 'Production Monitoring', path: '/services' },
    { label: 'Shipping Coordination', path: '/services' },
  ],
  company: [
    { label: 'About Us', path: '/about' },
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ],
  resources: [
    { label: 'Sourcing Guide', path: '/blog' },
    { label: 'QC Checklist', path: '/blog' },
    { label: 'Shipping Options', path: '/blog' },
    { label: 'FAQ', path: '/faq' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      {/* CTA Banner */}
      <div className="bg-brand-500">
        <div className="container-wide py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Ready to Source from China?
              </h3>
              <p className="text-brand-100 text-lg">
                Get a free quote within 24 hours. No obligation.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-500 font-bold rounded-lg hover:bg-neutral-100 transition-all shadow-lg text-lg"
            >
              Get Free Quote <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-brand-500 flex items-center justify-center text-white font-bold text-lg">
                SS
              </div>
              <div>
                <span className="text-xl font-bold text-white tracking-tight">SSourcing</span>
                <span className="text-xs text-neutral-400 block -mt-1 font-medium">China</span>
              </div>
            </Link>
            <p className="text-neutral-400 mb-6 leading-relaxed text-sm">
              Your trusted China sourcing partner. We help global buyers find reliable suppliers,
              verify factories, and manage quality from order to delivery.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent-400 flex-shrink-0" />
                <span>info@ssourcingchina.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent-400 flex-shrink-0" />
                <span>+86 755 8888 9999</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-accent-400 flex-shrink-0" />
                <span>Shenzhen, Guangdong, China</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-neutral-400 hover:text-accent-400 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-neutral-400 hover:text-accent-400 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-neutral-400 hover:text-accent-400 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-sm">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link to="/privacy" className="text-neutral-500 hover:text-neutral-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-neutral-500 hover:text-neutral-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
