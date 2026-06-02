import { Link } from 'react-router-dom';
import { Bike, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const footerLinks = {
  Bikes: [
    { label: 'Mountain', to: '/bikes' },
    { label: 'Road', to: '/bikes' },
    { label: 'Gravel', to: '/bikes' },
    { label: 'Urban', to: '/bikes' },
  ],
  Company: [
    { label: 'About Us', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ],
  Support: [
    { label: 'FAQ', to: '/contact' },
    { label: 'Shipping', to: '/contact' },
    { label: 'Returns', to: '/contact' },
    { label: 'Warranty', to: '/contact' },
  ],
};

const socials = [
  { icon: Instagram, label: 'Instagram' },
  { icon: Twitter, label: 'Twitter' },
  { icon: Facebook, label: 'Facebook' },
  { icon: Youtube, label: 'YouTube' },
];

const Footer = () => {
  return (
    <footer className="bg-[#1a1a2e] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 text-white font-black text-xl mb-4">
              <Bike className="w-7 h-7 text-[#e94560]" />
              <span>VELOX</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Premium bikes for every rider. Engineered for performance, built to last, designed to inspire.
            </p>
            <div className="flex gap-4">
              {socials.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#e94560] transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-gray-400 hover:text-white text-sm transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Velox Bikes. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
