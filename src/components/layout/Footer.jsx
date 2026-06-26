import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = {
  services: [
    { label: 'Supplier Sourcing', to: '/services' },
    { label: 'Factory Verification', to: '/services' },
    { label: 'Quality Inspection', to: '/services' },
    { label: 'Production Follow-up', to: '/services' },
    { label: 'Shipping Coordination', to: '/services' },
  ],
  company: [
    { label: 'About Us', to: '/how-it-works' },
    { label: 'How It Works', to: '/how-it-works' },
    { label: 'Case Studies', to: '/case-studies' },
    { label: 'Blog', to: '/blog' },
    { label: 'Contact', to: '/contact' },
  ],
  products: [
    { label: 'Electronics & Components', to: '/products' },
    { label: 'Machinery & Equipment', to: '/products' },
    { label: 'Textiles & Apparel', to: '/products' },
    { label: 'Home & Garden', to: '/products' },
    { label: 'Auto Parts', to: '/products' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <span className="text-xl font-bold text-white">
                SSourcing <span className="text-primary-400">China</span>
              </span>
            </Link>
            <p className="text-sm text-neutral-400 mb-4 leading-relaxed">
              Professional China sourcing agent helping global buyers find reliable suppliers, verify factories, and coordinate quality control and shipping.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-neutral-400">
                <Mail className="w-4 h-4 shrink-0" />
                <span>info@ssourcingchina.com</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-400">
                <Phone className="w-4 h-4 shrink-0" />
                <span>+86 755 8888 8888</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-400">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>Shenzhen, Guangdong, China</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-neutral-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-neutral-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Products We Source</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-neutral-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-neutral-500">
            <span className="hover:text-neutral-300 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-neutral-300 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
