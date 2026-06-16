import { Factory } from 'lucide-react';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-am-bg-secondary border-t border-am-border">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Factory className="w-5 h-5 text-am-gold" />
            <span className="text-am-gold font-bold text-sm tracking-[0.1em] uppercase">
              ARTITECT MACHINERY
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-sm text-am-text-secondary hover:text-am-gold transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 pt-8 border-t border-am-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-am-text-muted">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <p className="text-xs text-am-text-muted">
            Precision sheet metal folding machines — engineered for excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}
