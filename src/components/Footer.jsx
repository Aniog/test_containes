import { Linkedin, Twitter, Facebook, Youtube, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const products = [
    'Double Folding Machine',
    'Sheet Metal Folder',
    'Metal Folder Machine',
    'Metal Folding Machine',
    'Accessories & Parts',
  ];

  const company = [
    { label: 'About Us', id: 'about' },
    { label: 'Products', id: 'products' },
    { label: 'Features', id: 'features' },
    { label: 'Contact', id: 'contact' },
  ];

  const support = [
    'Technical Documentation',
    'Training Programs',
    'Spare Parts',
    'Service Network',
    'Warranty Info',
  ];

  const socials = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-bg-dark pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <span
                  className="font-bold text-xl text-white tracking-tight"
                  style={{ fontFamily: 'var(--font-brand)' }}
                >
                  ARTITECT
                </span>
                <span className="block text-xs text-white/60 tracking-widest -mt-1">
                  MACHINERY
                </span>
              </div>
            </div>
            <p className="text-white/60 mb-6 max-w-sm leading-relaxed">
              Engineering excellence in sheet metal folding technology. We deliver precision, 
              reliability, and performance that powers production facilities worldwide.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 hover:bg-accent rounded-lg flex items-center justify-center transition-all hover:-translate-y-1"
                >
                  <social.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-6">Products</h4>
            <ul className="space-y-3">
              {products.map((item, index) => (
                <li key={index}>
                  <a
                    href="#products"
                    className="text-white/60 hover:text-accent transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.id}`}
                    className="text-white/60 hover:text-accent transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              {support.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-white/60 hover:text-accent transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm">
              © {currentYear} ARTITECT MACHINERY. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-white/50 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/50 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/50 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-white/50 hover:text-accent transition-colors"
            >
              <span className="text-sm">Back to top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
