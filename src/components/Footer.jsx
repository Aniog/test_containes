import { Facebook, Linkedin, Twitter, Youtube } from 'lucide-react';

const footerLinks = [
  {
    title: 'Products',
    links: [
      { label: 'Double Folding Machine', href: '#products' },
      { label: 'Double Folder', href: '#products' },
      { label: 'Sheet Metal Folder', href: '#products' },
      { label: 'Sheet Metal Folding Machine', href: '#products' },
      { label: 'Metal Folder', href: '#products' },
      { label: 'Metal Folding Machine', href: '#products' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#home' },
      { label: 'Features', href: '#features' },
      { label: 'Contact', href: '#contact' },
      { label: 'Get a Quote', href: '#contact' },
    ],
  },
];

export default function Footer() {
  const handleClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0f1f2e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-extrabold tracking-wider text-white">
                ARTITECT
              </span>
              <span className="text-xl font-extrabold tracking-wider text-[#c9a84c]">
                MACHINERY
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Precision metal folding solutions for the modern manufacturing
              industry. Built with German engineering, delivered worldwide.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#c9a84c] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#c9a84c] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#c9a84c] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#c9a84c] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold text-white mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleClick(e, link.href)}
                      className="text-gray-400 text-sm hover:text-[#c9a84c] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter / Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>1200 Industrial Parkway</li>
              <li>Cleveland, OH 44101</li>
              <li>United States</li>
              <li className="pt-2">
                <a
                  href="tel:+12345678900"
                  className="hover:text-[#c9a84c] transition-colors"
                >
                  +1 (234) 567-8900
                </a>
              </li>
              <li>
                <a
                  href="mailto:sales@artitectmachinery.com"
                  className="hover:text-[#c9a84c] transition-colors"
                >
                  sales@artitectmachinery.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
