import { Mail, Phone, MapPin, Linkedin, Youtube, Twitter, ArrowUp } from 'lucide-react';

const footerLinks = {
  products: {
    title: 'Products',
    links: [
      { name: 'Double Folding Machine', href: '#products' },
      { name: 'Metal Folder Machine', href: '#products' },
      { name: 'Sheet Metal Folder', href: '#products' },
      { name: 'Metal Folding Machine', href: '#products' },
      { name: 'Double Folder', href: '#products' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#about' },
      { name: 'Careers', href: '#' },
      { name: 'News & Updates', href: '#' },
      { name: 'Partners', href: '#' },
    ],
  },
  support: {
    title: 'Support',
    links: [
      { name: 'Contact Us', href: '#contact' },
      { name: 'Request Quote', href: '#contact' },
      { name: 'Documentation', href: '#' },
      { name: 'FAQs', href: '#' },
      { name: 'Service Centers', href: '#' },
    ],
  },
};

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary pt-20 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <div>
                <span className="font-heading font-bold text-xl text-white tracking-tight">
                  ARTITECT
                </span>
                <span className="block text-xs tracking-widest text-white/60 uppercase">
                  MACHINERY
                </span>
              </div>
            </a>
            <p className="text-white/60 mb-8 max-w-sm leading-relaxed">
              Leading manufacturer of precision sheet metal folding machines. 
              Delivering quality, reliability, and performance since 1999.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <a
                href="mailto:info@artitectmachinery.com"
                className="flex items-center gap-3 text-white/60 hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm">info@artitectmachinery.com</span>
              </a>
              <a
                href="tel:+15551234567"
                className="flex items-center gap-3 text-white/60 hover:text-accent transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </a>
              <div className="flex items-start gap-3 text-white/60">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  1234 Industrial Drive, Suite 500<br />
                  Manufacturing City, ST 12345
                </span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith('#')) {
                          e.preventDefault();
                          document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="text-white/60 hover:text-accent transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-white/40 text-sm text-center md:text-left">
              <p>© {currentYear} ARTITECT MACHINERY. All rights reserved.</p>
              <div className="flex gap-4 mt-2 justify-center md:justify-start">
                <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
                <span>•</span>
                <a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a>
                <span>•</span>
                <a href="#" className="hover:text-white/60 transition-colors">Cookie Policy</a>
              </div>
            </div>

            {/* Social & Back to Top */}
            <div className="flex items-center gap-6">
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5 text-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5 text-white" />
                </a>
              </div>

              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-accent hover:bg-accent-dark rounded-lg flex items-center justify-center transition-colors"
                aria-label="Back to top"
              >
                <ArrowUp className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
