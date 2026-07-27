import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'Supplier Verification', href: '/services#verification' },
    { name: 'Quality Inspection', href: '/services#inspection' },
    { name: 'Production Follow-up', href: '/services#production' },
    { name: 'Shipping & Logistics', href: '/services#shipping' },
    { name: 'Custom Solutions', href: '/services#custom' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  resources: [
    { name: 'Products We Source', href: '/products' },
    { name: 'Sourcing Guide', href: '/blog/sourcing-guide' },
    { name: 'QC Checklist', href: '/blog/qc-checklist' },
    { name: 'Shipping Guide', href: '/blog/shipping-guide' },
    { name: 'FAQ', href: '/#faq' },
  ],
};

const socialLinks = [
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Facebook', href: '#', icon: Facebook },
];

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 6h16M4 12h12M4 18h14" strokeLinecap="round" />
                  <circle cx="19" cy="18" r="3" fill="#10B981" stroke="none" />
                  <path d="M18 18l1 1 2-2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-white">SSourcing</span>
                <span className="text-xl font-bold text-primary-300">China</span>
              </div>
            </Link>
            <p className="text-neutral-400 mb-6 max-w-sm leading-relaxed">
              Your trusted China sourcing partner. We help global buyers find verified suppliers, ensure product quality, and manage seamless shipping from China.
            </p>
            <div className="space-y-3">
              <a href="mailto:info@ssourcingchina.com" className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
                <span>info@ssourcingchina.com</span>
              </a>
              <a href="tel:+862112345678" className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
                <span>+86 21 1234 5678</span>
              </a>
              <div className="flex items-start gap-3 text-neutral-400">
                <MapPin className="w-5 h-5 mt-0.5" />
                <span>Shanghai, China</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-neutral-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-neutral-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-neutral-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-neutral-500 text-sm">
              &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link to="/privacy" className="text-neutral-500 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-neutral-500 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-500 hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
