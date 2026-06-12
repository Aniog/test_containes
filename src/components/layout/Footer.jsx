import { Mail, Phone, MapPin, Linkedin, Youtube, Twitter } from 'lucide-react';

const productLinks = [
  'Double Folding Machine',
  'Double Folder',
  'Sheet Metal Folder',
  'Sheet Metal Folding Machine',
  'Metal Folder',
  'Metal Folding Machine',
];

const companyLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Why Artitect', href: '#why-us' },
  { label: 'Industries', href: '#industries' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-gray-800">
      {/* CTA Banner */}
      <div className="bg-steel py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-bold text-2xl md:text-3xl">
              Ready to Elevate Your Production?
            </h3>
            <p className="text-blue-100 mt-1">
              Talk to our engineers and find the perfect folding machine for your needs.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 bg-gold text-navy px-8 py-3.5 font-bold tracking-wide uppercase text-sm hover:bg-yellow-400 transition-colors"
          >
            Get a Free Quote
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <div className="text-gold font-bold text-2xl tracking-widest uppercase">ARTITECT</div>
              <div className="text-gray-400 text-xs tracking-[0.3em] uppercase font-medium">MACHINERY</div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Precision-engineered sheet metal folding machines trusted by manufacturers
              in over 40 countries worldwide.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Youtube, href: '#', label: 'YouTube' },
                { icon: Twitter, href: '#', label: 'Twitter' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 border border-gray-700 flex items-center justify-center text-gray-400 hover:border-gold hover:text-gold transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Products
            </h4>
            <ul className="space-y-3">
              {productLinks.map((product) => (
                <li key={product}>
                  <a
                    href="#products"
                    className="text-gray-400 text-sm hover:text-gold transition-colors"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <Phone size={14} className="text-gold mt-0.5 flex-shrink-0" />
                <a href="tel:+18002784832" className="text-gray-400 text-sm hover:text-gold transition-colors">
                  +1 (800) 278-4832
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={14} className="text-gold mt-0.5 flex-shrink-0" />
                <a href="mailto:sales@artitectmachinery.com" className="text-gray-400 text-sm hover:text-gold transition-colors">
                  sales@artitectmachinery.com
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin size={14} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  1200 Industrial Blvd, Suite 400<br />
                  Detroit, MI 48201, USA
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Use', 'Sitemap'].map((item) => (
              <a key={item} href="#" className="text-gray-500 text-xs hover:text-gold transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
