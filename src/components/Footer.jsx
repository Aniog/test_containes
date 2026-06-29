import { ArrowUpRight } from 'lucide-react';

const footerLinks = [
  {
    title: 'Products',
    links: [
      { label: 'Double Folding Machine', href: '#products' },
      { label: 'Sheet Metal Folder', href: '#products' },
      { label: 'Metal Folder Machine', href: '#products' },
      { label: 'Metal Folding Machine', href: '#products' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Values', href: '#about' },
      { label: 'Quality Assurance', href: '#about' },
      { label: 'Global Support', href: '#about' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Contact', href: '#contact' },
      { label: 'Request a Quote', href: '#contact' },
      { label: 'Operator Training', href: '#about' },
      { label: 'Service Partners', href: '#about' },
    ],
  },
];

export default function Footer() {
  const scrollTo = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="bg-bg-dark text-white/80">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-14">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-xl font-extrabold tracking-tight text-white">
                ARTITECT
              </span>
              <span className="text-xl font-light tracking-widest text-brand-light">
                MACHINERY
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/60 max-w-sm mb-6">
              Precision-engineered sheet metal folding machines and industrial
              metal folders for manufacturers who demand excellence.
            </p>
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, '#contact')}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-light hover:text-brand transition-colors"
            >
              Request a quote
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => scrollTo(e, link.href)}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
