import { Fish, Facebook, Instagram, Youtube, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const footerLinks = {
  Shop: ['Fishing Rods', 'Fishing Reels', 'Lures & Baits', 'Fly Fishing', 'Apparel', 'Accessories'],
  Support: ['FAQ', 'Shipping Info', 'Returns & Exchanges', 'Size Guide', 'Contact Us', 'Track Order'],
  Company: ['About Us', 'Our Story', 'Careers', 'Press', 'Sustainability', 'Affiliate Program'],
};

const socials = [
  { icon: Facebook, label: 'Facebook' },
  { icon: Instagram, label: 'Instagram' },
  { icon: Youtube, label: 'YouTube' },
  { icon: Twitter, label: 'Twitter' },
];

const Footer = () => {
  return (
    <footer className="bg-teal-950 text-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Fish className="w-7 h-7 text-amber-400" />
              <span className="text-xl font-extrabold tracking-tight">CastMaster</span>
            </div>
            <p className="text-teal-300 text-sm leading-relaxed mb-6 max-w-xs">
              Premium fishing equipment for every angler. From your first cast to your biggest catch — we've got you covered.
            </p>
            {/* Contact info */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-teal-300 text-sm">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>123 Lakeshore Drive, Clearwater, FL 33755</span>
              </div>
              <div className="flex items-center gap-2 text-teal-300 text-sm">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>1-800-CAST-PRO</span>
              </div>
              <div className="flex items-center gap-2 text-teal-300 text-sm">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>hello@castmaster.com</span>
              </div>
            </div>
            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-9 h-9 bg-teal-800 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4">{section}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-teal-300 hover:text-amber-400 text-sm transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-teal-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-teal-400 text-sm">
            © 2026 CastMaster. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a key={item} href="#" className="text-teal-400 hover:text-amber-400 text-xs transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
