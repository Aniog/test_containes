import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Globe, Linkedin, Facebook, Twitter } from 'lucide-react'

const footerLinks = {
  services: [
    { name: 'Supplier Sourcing', href: '/services' },
    { name: 'Factory Verification', href: '/services' },
    { name: 'Quality Control', href: '/services' },
    { name: 'Production Follow-up', href: '/services' },
    { name: 'Shipping Coordination', href: '/services' },
  ],
  company: [
    { name: 'About Us', href: '/how-it-works' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact' },
  ],
  products: [
    { name: 'Electronics', href: '/products' },
    { name: 'Machinery', href: '/products' },
    { name: 'Textiles & Apparel', href: '/products' },
    { name: 'Home & Garden', href: '/products' },
    { name: 'Custom Products', href: '/products' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-cta-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold text-white">
                S<span className="text-cta-400">Sourcing</span>
                <span className="text-navy-300 font-medium ml-1">China</span>
              </span>
            </Link>
            <p className="text-navy-300 text-sm leading-relaxed mb-6">
              Professional sourcing services for global buyers. We help you find reliable suppliers,
              verify factories, and coordinate shipping from China.
            </p>
            <div className="space-y-3">
              <a href="mailto:info@ssourcingchina.com" className="flex items-center gap-2 text-navy-300 hover:text-white transition-colors text-sm">
                <Mail className="w-4 h-4" />
                info@ssourcingchina.com
              </a>
              <a href="tel:+8613800138000" className="flex items-center gap-2 text-navy-300 hover:text-white transition-colors text-sm">
                <Phone className="w-4 h-4" />
                +86 138-0013-8000
              </a>
              <div className="flex items-center gap-2 text-navy-300 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>Nanshan District, Shenzhen, Guangdong, China</span>
              </div>
            </div>
          </div>

          {/* Services links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-navy-300 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-navy-300 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Products</h3>
            <ul className="space-y-2.5">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-navy-300 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-navy-400 text-sm">
              © {new Date().getFullYear()} SSourcing China. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-navy-400 text-sm">Follow Us:</span>
              <div className="flex items-center gap-3">
                <a href="#" className="text-navy-400 hover:text-white transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-navy-400 hover:text-white transition-colors" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-navy-400 hover:text-white transition-colors" aria-label="Twitter">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
