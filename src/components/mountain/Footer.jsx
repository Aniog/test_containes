import { Link } from 'react-router-dom';
import { Mountain, Instagram, Twitter, Youtube } from 'lucide-react';

const FOOTER_LINKS = [
  { label: 'Geography', href: '/geography' },
  { label: 'Equipment', href: '/equipment' },
  { label: 'Teams', href: '/teams' },
  { label: 'Safety', href: '/safety' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 text-white font-black text-xl mb-3">
              <Mountain className="w-6 h-6 text-amber-500" />
              <span>SummitQuest</span>
            </Link>
            <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
              Dedicated to the art and science of mountain climbing. Always respect the mountain.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-slate-400 hover:text-amber-400 text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {[Instagram, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-amber-500 flex items-center justify-center text-slate-400 hover:text-slate-950 transition-all duration-200"
                aria-label="Social link"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 text-center text-slate-600 text-xs">
          © {new Date().getFullYear()} SummitQuest. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
