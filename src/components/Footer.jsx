import { Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';

const footerLinks = {
  products: [
    { label: 'Double Folding Machine', href: '#products' },
    { label: 'Double Folder', href: '#products' },
    { label: 'Sheet Metal Folder', href: '#products' },
    { label: 'Sheet Metal Folding Machine', href: '#products' },
    { label: 'Metal Folder', href: '#products' },
    { label: 'Metal Folder Machine', href: '#products' },
  ],
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Technology', href: '#about' },
    { label: 'Quality Standards', href: '#about' },
    { label: 'Careers', href: '#contact' },
  ],
  support: [
    { label: 'Contact Us', href: '#contact' },
    { label: 'Request a Quote', href: '#contact' },
    { label: 'Service & Parts', href: '#contact' },
    { label: 'Documentation', href: '#contact' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="bg-brand text-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#home" className="text-xl font-bold tracking-tight inline-block mb-4">
              ARTITECT <span className="text-accent">MACHINERY</span>
            </a>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm">
              Precision metal folding solutions engineered for the demands of modern fabrication. Quality, reliability, and performance in every machine.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-brand transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.1em] mb-5 text-accent">
              Products
            </h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-white/60 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.1em] mb-5 text-accent">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-white/60 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.1em] mb-5 text-accent">
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-white/60 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/40 text-sm hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/40 text-sm hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
