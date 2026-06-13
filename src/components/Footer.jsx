import { Link } from 'react-router-dom'
import { Ship, Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-gray-300 pt-16 pb-8 mt-auto">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 text-white font-extrabold text-xl no-underline mb-4">
              <Ship className="w-6 h-6" />
              <span>SSourcing China</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Your trusted sourcing partner in China. We help global buyers find reliable suppliers, verify factories, and manage the entire supply chain.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center hover:bg-[#1B4D8E] transition-colors text-gray-300 hover:text-white">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center hover:bg-[#1B4D8E] transition-colors text-gray-300 hover:text-white">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center hover:bg-[#1B4D8E] transition-colors text-gray-300 hover:text-white">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4">Quick Links</h4>
            <ul className="list-none p-0 m-0 space-y-2">
              {[
                { path: '/services', label: 'Our Services' },
                { path: '/how-it-works', label: 'How It Works' },
                { path: '/products', label: 'Products We Source' },
                { path: '/case-studies', label: 'Case Studies' },
                { path: '/blog', label: 'Blog' },
              ].map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4">Services</h4>
            <ul className="list-none p-0 m-0 space-y-2">
              {['Supplier Verification', 'Factory Audits', 'Quality Inspection', 'Production Follow-up', 'Shipping Coordination', 'Product Development'].map(s => (
                <li key={s}>
                  <Link to="/services" className="text-gray-400 text-sm hover:text-white transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm">Shenzhen, Guangdong, China</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gray-400 shrink-0" />
                <span className="text-gray-400 text-sm">info@ssourcingchina.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gray-400 shrink-0" />
                <span className="text-gray-400 text-sm">+86 755-8888-9999</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            &copy; 2026 SSourcing China. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 text-xs hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 text-xs hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
