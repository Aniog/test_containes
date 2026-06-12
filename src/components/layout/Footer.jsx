import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const footerLinks = {
  Services: [
    { label: 'Supplier Sourcing', to: '/services' },
    { label: 'Factory Verification', to: '/services' },
    { label: 'Quality Inspection', to: '/services' },
    { label: 'Production Follow-up', to: '/services' },
    { label: 'Shipping & Logistics', to: '/services' },
  ],
  Company: [
    { label: 'How It Works', to: '/how-it-works' },
    { label: 'Products We Source', to: '/products' },
    { label: 'Case Studies', to: '/case-studies' },
    { label: 'Blog', to: '/blog' },
    { label: 'Contact Us', to: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#1A1A2E] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 no-underline mb-4">
              <div className="w-8 h-8 bg-[#1A3C6E] rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-white font-bold text-lg">
                SSourcing<span className="text-[#C0392B]">China</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Your trusted China sourcing partner. We help global buyers find reliable suppliers, verify factories, and manage quality from order to delivery.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C0392B] flex-shrink-0" />
                <span>Guangzhou, China</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C0392B] flex-shrink-0" />
                <a href="mailto:info@ssourcingchina.com" className="hover:text-white no-underline">info@ssourcingchina.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C0392B] flex-shrink-0" />
                <span>+86 20 0000 0000</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-gray-400 hover:text-white no-underline transition-colors duration-150"
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
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Start Sourcing</h4>
            <p className="text-sm text-gray-400 mb-4">
              Tell us what you need. We'll find the right supplier in China — fast and reliably.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#C0392B] hover:bg-[#A93226] text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors duration-200 no-underline"
            >
              Get a Free Sourcing Quote
            </Link>
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-8 h-8 bg-[#2A2A4E] hover:bg-[#1A3C6E] rounded-md flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4 text-gray-300" />
              </a>
              <a href="#" className="w-8 h-8 bg-[#2A2A4E] hover:bg-[#1A3C6E] rounded-md flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4 text-gray-300" />
              </a>
              <a href="#" className="w-8 h-8 bg-[#2A2A4E] hover:bg-[#1A3C6E] rounded-md flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4 text-gray-300" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#2A2A4E] mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© 2024 SSourcing China. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300 no-underline">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 no-underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
