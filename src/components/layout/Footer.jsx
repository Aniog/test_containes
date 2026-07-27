import React from 'react'
import { Link } from 'react-router-dom'
import { Package, Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react'

const footerLinks = {
  services: [
    { name: 'Supplier Verification', path: '/services#verification' },
    { name: 'Quality Inspection', path: '/services#inspection' },
    { name: 'Production Monitoring', path: '/services#monitoring' },
    { name: 'Shipping Coordination', path: '/services#shipping' },
  ],
  company: [
    { name: 'About Us', path: '/how-it-works' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
  ],
  resources: [
    { name: 'Products We Source', path: '/products' },
    { name: 'FAQ', path: '/contact#faq' },
    { name: 'Contact Us', path: '/contact' },
  ],
}

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <Package className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">SSourcing</span>
                <span className="text-xs text-navy-300 block -mt-1">China</span>
              </div>
            </Link>
            <p className="text-navy-300 mb-6 max-w-sm">
              Professional sourcing agent helping global buyers find reliable suppliers 
              in China. Quality inspection, production monitoring, and shipping coordination.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-navy-700 rounded-lg flex items-center justify-center 
                                   hover:bg-accent transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-navy-700 rounded-lg flex items-center justify-center 
                                   hover:bg-accent transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-navy-700 rounded-lg flex items-center justify-center 
                                   hover:bg-accent transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-navy-300 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-navy-300 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-navy-300 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-700">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6 text-navy-300 text-sm">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>info@ssourcingchina.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+86 XXX-XXXX-XXXX</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Shenzhen, China</span>
            </div>
          </div>
          <p className="text-navy-400 text-sm">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
