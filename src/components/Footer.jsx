import { ArrowUpRight } from 'lucide-react';

const productLinks = [
  { label: 'Double Folding Machine', href: '#products' },
  { label: 'Double Folder', href: '#products' },
  { label: 'Sheet Metal Folder', href: '#products' },
  { label: 'Sheet Metal Folding Machine', href: '#products' },
  { label: 'Metal Folder', href: '#products' },
  { label: 'Metal Folder Machine', href: '#products' },
  { label: 'Metal Folding Machine', href: '#products' },
];

const companyLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Our Products', href: '#products' },
  { label: 'Request a Quote', href: '#contact' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Warranty', href: '#' },
];

export default function Footer() {
  const handleClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="w-9 h-9 bg-accent flex items-center justify-center rounded-sm">
                <span className="text-bg font-heading font-bold text-base leading-none">A</span>
              </div>
              <span className="text-text-primary font-heading font-semibold text-lg tracking-wide">
                ARTITECT MACHINERY
              </span>
            </a>
            <p className="text-text-muted text-sm leading-relaxed mb-5">
              Premium industrial folding machines engineered for precision, built to last,
              and backed by decades of expertise.
            </p>
            <div className="flex items-center gap-4">
              {/* Social placeholders */}
              {['LinkedIn', 'YouTube', 'Twitter'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="w-9 h-9 bg-bg border border-border rounded flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/50 transition-colors duration-200"
                  aria-label={platform}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-text-primary text-sm font-semibold uppercase tracking-wide mb-5">
              Products
            </h4>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-text-muted text-sm hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-text-primary text-sm font-semibold uppercase tracking-wide mb-5">
              Company
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-text-muted text-sm hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-text-primary text-sm font-semibold uppercase tracking-wide mb-5">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-text-muted text-sm hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <p className="text-text-muted text-xs">
            Precision industrial equipment worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
}
