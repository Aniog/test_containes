import { Link } from 'react-router-dom'
import { MapPin, Mail, Phone, Linkedin, Twitter, Facebook } from 'lucide-react'

const footerLinks = {
  Services: [
    { label: 'Supplier Sourcing', path: '/services' },
    { label: 'Factory Verification', path: '/services' },
    { label: 'Quality Inspection', path: '/services' },
    { label: 'Production Follow-up', path: '/services' },
    { label: 'Shipping Coordination', path: '/services' },
  ],
  Company: [
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Products We Source', path: '/products' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact Us', path: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#1A1A2E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-1 mb-4">
              <span className="text-2xl font-bold text-white">SSourcing</span>
              <span className="text-2xl font-bold text-[#C0392B]">China</span>
            </div>
            <p className="text-[#A0AEC0] text-sm leading-relaxed mb-6">
              Your trusted China sourcing partner. We help global buyers find reliable suppliers, verify factories, and manage quality from order to delivery.
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-sm text-[#A0AEC0]">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#C0392B]" />
                <span>Guangzhou & Yiwu, China</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#A0AEC0]">
                <Mail className="w-4 h-4 flex-shrink-0 text-[#C0392B]" />
                <a href="mailto:info@ssourcingchina.com" className="hover:text-white transition-colors">
                  info@ssourcingchina.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#A0AEC0]">
                <Phone className="w-4 h-4 flex-shrink-0 text-[#C0392B]" />
                <span>+86 20 1234 5678</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-[#A0AEC0] hover:text-white text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Start Sourcing</h4>
            <p className="text-[#A0AEC0] text-sm mb-4">
              Ready to source from China? Get a free consultation with our team.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#C0392B] hover:bg-[#A93226] text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors duration-200"
            >
              Get a Free Sourcing Quote
            </Link>
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-8 h-8 bg-[#2D3748] hover:bg-[#C0392B] rounded-full flex items-center justify-center transition-colors duration-200" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-[#2D3748] hover:bg-[#C0392B] rounded-full flex items-center justify-center transition-colors duration-200" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-[#2D3748] hover:bg-[#C0392B] rounded-full flex items-center justify-center transition-colors duration-200" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#2D3748] mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#718096] text-sm">
            © {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[#718096] hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-[#718096] hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
