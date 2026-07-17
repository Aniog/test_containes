import { Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => (
  <footer className="bg-brand-dark-text text-white">
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="mb-4">
            <div className="font-heading text-brand-gold text-2xl font-bold tracking-widest uppercase">
              ARTITECT
            </div>
            <div className="font-body text-white/50 text-xs font-light tracking-[0.3em] uppercase">
              MACHINERY
            </div>
          </div>
          <p className="font-body text-white/50 text-sm leading-relaxed max-w-xs mb-6">
            Precision-engineered sheet metal folding machines trusted by fabricators
            in over 40 countries worldwide.
          </p>
          <div className="flex gap-3">
            {[
              { Icon: Linkedin, href: '#' },
              { Icon: Twitter, href: '#' },
              { Icon: Youtube, href: '#' },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-all duration-300"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Products */}
        <div>
          <h4 className="font-body text-white font-semibold text-sm uppercase tracking-widest mb-5">
            Products
          </h4>
          <ul className="flex flex-col gap-3">
            {[
              'Double Folding Machine',
              'Double Folder',
              'Sheet Metal Folder',
              'Sheet Metal Folding Machine',
              'Metal Folder',
              'Metal Folding Machine',
            ].map((item) => (
              <li key={item}>
                <a
                  href="#products"
                  className="font-body text-white/50 text-sm hover:text-brand-gold transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-body text-white font-semibold text-sm uppercase tracking-widest mb-5">
            Company
          </h4>
          <ul className="flex flex-col gap-3">
            {[
              { label: 'About Us', href: '#about' },
              { label: 'Why ARTITECT', href: '#why-us' },
              { label: 'Contact', href: '#contact' },
              { label: 'Request a Quote', href: '#contact' },
            ].map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-body text-white/50 text-sm hover:text-brand-gold transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-body text-white/40 text-sm">
          © {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
        </p>
        <div className="flex gap-6">
          {['Privacy Policy', 'Terms of Service'].map((item) => (
            <a
              key={item}
              href="#"
              className="font-body text-white/40 text-sm hover:text-brand-gold transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
