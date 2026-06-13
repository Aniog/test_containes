import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react'

const footerLinks = {
  services: [
    { label: 'Supplier Sourcing', path: '/services' },
    { label: 'Factory Verification', path: '/services' },
    { label: 'Quality Inspection', path: '/services' },
    { label: 'Production Monitoring', path: '/services' },
    { label: 'Shipping Coordination', path: '/services' },
  ],
  company: [
    { label: 'About Us', path: '/contact' },
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ],
  products: [
    { label: 'Electronics & Components', path: '/products' },
    { label: 'Home & Garden', path: '/products' },
    { label: 'Apparel & Textiles', path: '/products' },
    { label: 'Industrial Equipment', path: '/products' },
    { label: 'Packaging & Printing', path: '/products' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#0f2b46] text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[#c8963e] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="font-bold text-xl tracking-tight">
                SSourcing<span className="text-[#c8963e]">China</span>
              </span>
            </div>
            <p className="text-white/70 mb-6 max-w-sm">
              Your trusted partner for sourcing reliable suppliers, verifying factories, and managing quality control in China.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/70">
                <Mail className="w-4 h-4 text-[#c8963e]" />
                <span>info@ssourcingchina.com</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Phone className="w-4 h-4 text-[#c8963e]" />
                <span>+86 755 8888 6666</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <MapPin className="w-4 h-4 text-[#c8963e]" />
                <span>Shenzhen, Guangdong, China</span>
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#c8963e] transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#c8963e] transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#c8963e] transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-white/70 hover:text-[#c8963e] transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-white/70 hover:text-[#c8963e] transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Products We Source</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-white/70 hover:text-[#c8963e] transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/80 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/80 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
