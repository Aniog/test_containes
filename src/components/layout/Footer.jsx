import { Linkedin, Twitter, Youtube, Mail } from 'lucide-react';

const Footer = () => (
  <footer className="bg-brand-navy border-t border-brand-steel/50">
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="mb-4">
            <div className="font-heading font-800 text-brand-white text-lg tracking-widest uppercase">ARTITECT</div>
            <div className="font-heading font-400 text-brand-gold text-xs tracking-[0.3em] uppercase">MACHINERY</div>
          </div>
          <p className="font-body text-brand-silver text-sm leading-relaxed mb-6">
            Precision-engineered sheet metal folding machines trusted by fabricators worldwide since 1999.
          </p>
          <div className="flex gap-3">
            {[Linkedin, Twitter, Youtube, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 border border-brand-steel/70 flex items-center justify-center text-brand-silver hover:border-brand-gold hover:text-brand-gold transition-colors"
                aria-label="Social link"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Products */}
        <div>
          <h4 className="font-heading font-700 text-brand-white text-sm uppercase tracking-widest mb-5">Products</h4>
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
                  onClick={(e) => { e.preventDefault(); document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="font-body text-brand-silver text-sm hover:text-brand-gold transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-heading font-700 text-brand-white text-sm uppercase tracking-widest mb-5">Company</h4>
          <ul className="flex flex-col gap-3">
            {[
              { label: 'About Us', href: '#about' },
              { label: 'Why Choose Us', href: '#why-us' },
              { label: 'Certifications', href: '#why-us' },
              { label: 'Contact', href: '#contact' },
              { label: 'Request a Quote', href: '#contact' },
            ].map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="font-body text-brand-silver text-sm hover:text-brand-gold transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-700 text-brand-white text-sm uppercase tracking-widest mb-5">Contact</h4>
          <ul className="flex flex-col gap-4">
            <li className="font-body text-brand-silver text-sm leading-relaxed">
              14 Industrial Park Drive<br />Manufacturing District, 10001
            </li>
            <li>
              <a href="tel:+18002784832" className="font-body text-brand-silver text-sm hover:text-brand-gold transition-colors">
                +1 (800) 278-4832
              </a>
            </li>
            <li>
              <a href="mailto:sales@artitectmachinery.com" className="font-body text-brand-silver text-sm hover:text-brand-gold transition-colors">
                sales@artitectmachinery.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-brand-steel/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-body text-brand-silver/60 text-xs">
          © {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
        </p>
        <div className="flex gap-6">
          {['Privacy Policy', 'Terms of Use', 'Cookie Policy'].map((item) => (
            <a key={item} href="#" className="font-body text-brand-silver/60 text-xs hover:text-brand-gold transition-colors">
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
