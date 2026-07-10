import { Mail, Phone, MapPin, Linkedin, Youtube, Globe } from 'lucide-react';

const footerLinks = [
  {
    title: 'Products',
    links: [
      { label: 'Double Folding Machine', href: '#products' },
      { label: 'Double Folder', href: '#products' },
      { label: 'Sheet Metal Folder', href: '#products' },
      { label: 'Metal Folding Machine', href: '#products' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Why Artitect', href: '#features' },
      { label: 'Contact', href: '#contact' },
      { label: 'Get a Quote', href: '#contact' },
    ],
  },
];

export default function Footer() {
  const handleNav = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface border-t border-border-steel">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <div className="text-xl font-extrabold tracking-widest text-text-primary uppercase">ARTITECT</div>
              <div className="text-xs font-semibold tracking-[0.3em] text-gold uppercase">MACHINERY</div>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              Precision-engineered sheet metal folding machines built for industrial excellence and lasting performance.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 rounded-sm border border-border-steel flex items-center justify-center text-text-secondary hover:text-gold hover:border-gold transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-sm border border-border-steel flex items-center justify-center text-text-secondary hover:text-gold hover:border-gold transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-sm border border-border-steel flex items-center justify-center text-text-secondary hover:text-gold hover:border-gold transition-colors">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold tracking-widest uppercase text-gold mb-5">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                      className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-gold mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-text-secondary">+1 (800) 278-4832</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-text-secondary">info@artitectmachinery.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-text-secondary">Industrial Zone, Manufacturing District</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border-steel flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-secondary">
            © {new Date().getFullYear()} Artitect Machinery. All rights reserved.
          </p>
          <p className="text-xs text-text-secondary">
            Precision Engineering · Sheet Metal Folding Solutions
          </p>
        </div>
      </div>
    </footer>
  );
}
