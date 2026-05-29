import { Link } from 'react-router-dom';
import { Mountain, Instagram, Twitter, Youtube, Mail } from 'lucide-react';

const footerLinks = {
  Explore: [
    { label: 'Destinations', path: '/destinations' },
    { label: 'Activities', path: '/activities' },
    { label: 'Gallery', path: '/gallery' },
  ],
  Learn: [
    { label: 'Conservation', path: '/conservation' },
    { label: 'Stories', path: '/stories' },
    { label: 'Contact', path: '/contact' },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-peak text-glacier">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Mountain className="w-7 h-7 text-amber-peak" />
              <span className="font-playfair font-bold text-xl text-white">Summit</span>
            </Link>
            <p className="text-sm text-glacier/80 leading-relaxed max-w-xs">
              Celebrating the world's greatest peaks — from the Himalayas to the Andes. Inspiring adventurers, protecting wild places.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-glacier hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-glacier hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" aria-label="YouTube" className="text-glacier hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Email" className="text-glacier hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
                {section}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-glacier/80 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-peak/50 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-glacier/60">
            © {new Date().getFullYear()} Summit. All rights reserved.
          </p>
          <p className="text-xs text-glacier/60">
            Protecting mountains for future generations.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
