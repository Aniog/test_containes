import { Mail, Phone, MapPin, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const handleNavClick = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{ background: '#0D1117', borderTop: '1px solid #30363D' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <span
                className="text-2xl font-bold tracking-widest uppercase block"
                style={{ fontFamily: '"Playfair Display", serif', color: '#C9A84C' }}
              >
                ARTITECT
              </span>
              <span
                className="text-xs tracking-[0.3em] uppercase"
                style={{ color: '#8B949E' }}
              >
                MACHINERY
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-xs" style={{ color: '#8B949E' }}>
              Engineering precision sheet metal folding machines trusted by manufacturers worldwide. Quality, reliability, and innovation in every machine.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center transition-all duration-200"
                style={{ border: '1px solid #30363D', color: '#8B949E' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#C9A84C';
                  e.currentTarget.style.color = '#C9A84C';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#30363D';
                  e.currentTarget.style.color = '#8B949E';
                }}
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center transition-all duration-200"
                style={{ border: '1px solid #30363D', color: '#8B949E' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#C9A84C';
                  e.currentTarget.style.color = '#C9A84C';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#30363D';
                  e.currentTarget.style.color = '#8B949E';
                }}
                aria-label="YouTube"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-xs tracking-widest uppercase font-semibold mb-6"
              style={{ color: '#C9A84C' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Products', 'Features', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleNavClick(`#${item.toLowerCase()}`)}
                    className="text-sm bg-transparent border-none cursor-pointer p-0 transition-colors duration-200"
                    style={{ color: '#8B949E' }}
                    onMouseEnter={(e) => (e.target.style.color = '#C9A84C')}
                    onMouseLeave={(e) => (e.target.style.color = '#8B949E')}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-xs tracking-widest uppercase font-semibold mb-6"
              style={{ color: '#C9A84C' }}
            >
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={15} style={{ color: '#C9A84C', marginTop: 2, flexShrink: 0 }} />
                <span className="text-sm" style={{ color: '#8B949E' }}>+1 (800) 278-4832</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={15} style={{ color: '#C9A84C', marginTop: 2, flexShrink: 0 }} />
                <span className="text-sm" style={{ color: '#8B949E' }}>info@artitectmachinery.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} style={{ color: '#C9A84C', marginTop: 2, flexShrink: 0 }} />
                <span className="text-sm" style={{ color: '#8B949E' }}>Industrial Park, Suite 400<br />Detroit, MI 48201</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid #21262D' }}
        >
          <p className="text-xs" style={{ color: '#8B949E' }}>
            © 2026 ARTITECT MACHINERY. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: '#8B949E' }}>
            Precision Engineered. Perfectly Folded.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
