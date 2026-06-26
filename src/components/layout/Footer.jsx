import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Linkedin, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#1a2e4a', color: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-1 mb-4">
              <span className="text-xl font-bold text-white">SS</span>
              <span className="text-xl font-bold" style={{ color: '#c0392b' }}>ourcing</span>
              <span className="text-xl font-bold text-white"> China</span>
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#94a3b8' }}>
              Professional China sourcing agent helping global buyers find reliable suppliers, verify factories, and manage quality control.
            </p>
            <div className="flex items-center gap-2 text-sm mb-2" style={{ color: '#94a3b8' }}>
              <MapPin className="w-4 h-4 flex-shrink-0" style={{ color: '#c0392b' }} />
              <span>Shenzhen & Yiwu, China</span>
            </div>
            <div className="flex items-center gap-2 text-sm mb-2" style={{ color: '#94a3b8' }}>
              <Mail className="w-4 h-4 flex-shrink-0" style={{ color: '#c0392b' }} />
              <a href="mailto:info@ssourcingchina.com" className="hover:text-white transition-colors no-underline" style={{ color: '#94a3b8' }}>
                info@ssourcingchina.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm" style={{ color: '#94a3b8' }}>
              <Phone className="w-4 h-4 flex-shrink-0" style={{ color: '#c0392b' }} />
              <span>+86 755 0000 0000</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Services</h4>
            <ul className="space-y-2">
              {['Supplier Sourcing', 'Factory Verification', 'Quality Inspection', 'Production Follow-up', 'Shipping Coordination', 'Private Label Sourcing'].map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-sm no-underline hover:text-white transition-colors" style={{ color: '#94a3b8' }}>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Company</h4>
            <ul className="space-y-2">
              {[
                { label: 'How It Works', to: '/how-it-works' },
                { label: 'Products We Source', to: '/products' },
                { label: 'Case Studies', to: '/case-studies' },
                { label: 'Blog', to: '/blog' },
                { label: 'Contact Us', to: '/contact' },
              ].map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm no-underline hover:text-white transition-colors" style={{ color: '#94a3b8' }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Start Sourcing</h4>
            <p className="text-sm mb-4" style={{ color: '#94a3b8' }}>
              Tell us what you need. We'll find the right suppliers and send you a free sourcing plan.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#c0392b] hover:bg-[#a93226] text-white font-semibold px-5 py-3 rounded-lg text-sm transition-colors no-underline"
            >
              Get a Free Sourcing Quote
            </Link>
            <div className="mt-6 flex items-center gap-3">
              <a href="#" aria-label="LinkedIn" className="p-2 rounded-full hover:bg-white/10 transition-colors" style={{ color: '#94a3b8' }}>
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Website" className="p-2 rounded-full hover:bg-white/10 transition-colors" style={{ color: '#94a3b8' }}>
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderColor: '#2d4a6e' }}>
          <p className="text-xs" style={{ color: '#64748b' }}>
            © {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: '#64748b' }}>
            China Sourcing Agent · Supplier Verification · Quality Control · Shipping
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
