import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Linkedin, Twitter, Globe } from 'lucide-react';

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
};

export default function Footer() {
  return (
    <footer className="bg-[#0d2340] text-[#a8b8cc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#1a4f8a] rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <span className="text-white font-bold text-lg">
                SSourcing<span className="text-[#e8621a]">China</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-5">
              Your trusted China-based sourcing partner. We help global buyers find reliable suppliers, verify factories, and manage quality from order to delivery.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-[#e8621a] shrink-0" />
                <span>Guangzhou, China (Operations across major manufacturing hubs)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#e8621a] shrink-0" />
                <a href="mailto:info@ssourcingchina.com" className="hover:text-white transition-colors">
                  info@ssourcingchina.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#e8621a] shrink-0" />
                <span>+86 (0) 20 1234 5678</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Trust & CTA */}
          <div>
            <h4 className="text-white font-semibold mb-4">Start Sourcing</h4>
            <p className="text-sm mb-4">
              Ready to source from China with confidence? Get a free, no-obligation sourcing quote today.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#e8621a] hover:bg-[#c9521a] text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
            >
              Get a Free Quote
            </Link>
            <div className="mt-6">
              <p className="text-xs uppercase tracking-widest text-[#5a6a7e] mb-3">Follow Us</p>
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 bg-[#1a3a5c] rounded-md flex items-center justify-center hover:bg-[#1a4f8a] transition-colors">
                  <Linkedin className="w-4 h-4 text-white" />
                </a>
                <a href="#" className="w-8 h-8 bg-[#1a3a5c] rounded-md flex items-center justify-center hover:bg-[#1a4f8a] transition-colors">
                  <Twitter className="w-4 h-4 text-white" />
                </a>
                <a href="#" className="w-8 h-8 bg-[#1a3a5c] rounded-md flex items-center justify-center hover:bg-[#1a4f8a] transition-colors">
                  <Globe className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#1a3a5c] mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-[#5a6a7e]">
          <p>© {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
