import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube, Facebook } from 'lucide-react';

const footerLinks = {
  Products: [
    'Double Folding Machine',
    'Double Folder',
    'Sheet Metal Folder',
    'Sheet Metal Folding Machine',
    'Metal Folder',
    'Metal Folding Machine',
  ],
  Company: [
    'About Us',
    'Our History',
    'Careers',
    'News & Press',
    'Certifications',
    'Partners',
  ],
  Support: [
    'Technical Support',
    'Spare Parts',
    'Training',
    'Documentation',
    'Warranty',
    'Service Network',
  ],
};

const socials = [
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
];

const Footer = () => {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-steel-navy text-gray-300">
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-precision-blue via-copper-gold to-precision-blue" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-precision-blue rounded-lg flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="8" width="16" height="3" rx="1" fill="white"/>
                  <rect x="2" y="13" width="16" height="2" rx="1" fill="white" opacity="0.6"/>
                  <path d="M5 8 L10 3 L15 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading font-bold text-white text-lg tracking-widest uppercase">Artitect</span>
                <span className="font-heading text-copper-gold text-xs tracking-[0.2em] uppercase font-medium">Machinery</span>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Engineering precision sheet metal folding machines for manufacturers worldwide. 25+ years of innovation, reliability, and excellence.
            </p>

            <div className="space-y-3 mb-6">
              <a href="tel:+1234567890" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group">
                <Phone size={15} className="text-precision-blue group-hover:text-sky-accent transition-colors" />
                +1 (234) 567-8900
              </a>
              <a href="mailto:info@artitectmachinery.com" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group">
                <Mail size={15} className="text-precision-blue group-hover:text-sky-accent transition-colors" />
                info@artitectmachinery.com
              </a>
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin size={15} className="text-precision-blue mt-0.5 flex-shrink-0" />
                123 Industrial Park Drive, CA 90210, USA
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-iron-blue hover:bg-precision-blue rounded-lg flex items-center justify-center transition-colors"
                >
                  <Icon size={16} className="text-gray-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-heading font-semibold text-white text-sm tracking-widest uppercase mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (category === 'Products') scrollTo('#products');
                        else if (category === 'Company') scrollTo('#about');
                        else scrollTo('#contact');
                      }}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-12 pt-8 border-t border-iron-blue/40">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-4">
              {['ISO 9001:2015', 'CE Certified', 'UL Listed', 'RoHS Compliant'].map((cert) => (
                <span
                  key={cert}
                  className="bg-iron-blue/60 border border-iron-blue/80 text-gray-300 text-xs font-medium px-3 py-1.5 rounded-full"
                >
                  {cert}
                </span>
              ))}
            </div>
            <div className="text-gray-500 text-xs text-center md:text-right">
              © {new Date().getFullYear()} Artitect Machinery. All rights reserved.
              <span className="mx-2">·</span>
              <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
              <span className="mx-2">·</span>
              <a href="#" className="hover:text-gray-300 transition-colors">Terms of Use</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
