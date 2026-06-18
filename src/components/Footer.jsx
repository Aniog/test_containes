import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from 'lucide-react'

const footerLinks = {
  company: [
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/how-it-works', label: 'How It Works' },
    { path: '/case-studies', label: 'Case Studies' },
  ],
  services: [
    { path: '/services', label: 'Supplier Verification' },
    { path: '/services', label: 'Quality Inspection' },
    { path: '/services', label: 'Production Follow-up' },
    { path: '/services', label: 'Shipping & Logistics' },
  ],
  resources: [
    { path: '/blog', label: 'Blog' },
    { path: '/faq', label: 'FAQ' },
    { path: '/guides', label: 'Sourcing Guides' },
    { path: '/contact', label: 'Contact Us' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#1E3A5F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-[#1E3A5F] font-bold text-lg">S</span>
              </div>
              <div>
                <span className="text-white font-bold text-lg">SSourcing</span>
                <span className="text-[#C9A227] font-bold text-lg">China</span>
              </div>
            </Link>
            <p className="text-[#A0AEC0] text-sm mb-6 max-w-sm">
              Your trusted China sourcing agent. We help overseas buyers find reliable suppliers, verify factories, inspect quality, and coordinate seamless shipping.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-[#A0AEC0]">
                <Mail size={18} className="text-[#C9A227]" />
                <span>info@ssourcingchina.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#A0AEC0]">
                <Phone size={18} className="text-[#C9A227]" />
                <span>+86 138 0011 2233</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#A0AEC0]">
                <MapPin size={18} className="text-[#C9A227]" />
                <span>Guangzhou, China</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path + link.label}>
                  <Link to={link.path} className="text-sm text-[#A0AEC0] hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.path + link.label}>
                  <Link to={link.path} className="text-sm text-[#A0AEC0] hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.path + link.label}>
                  <Link to={link.path} className="text-sm text-[#A0AEC0] hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#2C5282]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[#A0AEC0]">
              &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-[#A0AEC0] hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-[#A0AEC0] hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-[#A0AEC0] hover:text-white transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}