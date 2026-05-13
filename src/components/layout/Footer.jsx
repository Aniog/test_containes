import { Link } from 'react-router-dom';
import { Telescope, Github, Twitter, Mail, Star } from 'lucide-react';

const footerLinks = [
  { label: 'Home', path: '/' },
  { label: 'Knowledge Hub', path: '/knowledge' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#080C14] border-t border-gray-800/60 mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Telescope className="w-5 h-5 text-amber-400" />
              <span className="text-gray-50 font-light text-lg tracking-wide">
                Starry Night
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              An educational journey through the cosmos — bridging art, physics,
              and the infinite wonder of the universe.
            </p>
            <div className="flex items-center gap-1 text-amber-400/60 text-xs tracking-widest uppercase">
              <Star className="w-3 h-3" />
              <span>Physics Education Resource</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-gray-300 text-sm font-medium tracking-widest uppercase">
              Explore
            </h4>
            <ul className="space-y-3">
              {footerLinks.map(({ label, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-gray-500 text-sm hover:text-amber-400 transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Topics */}
          <div className="space-y-4">
            <h4 className="text-gray-300 text-sm font-medium tracking-widest uppercase">
              Topics Covered
            </h4>
            <ul className="space-y-3">
              {[
                'Celestial Coordinates',
                'Stellar Evolution',
                'Electromagnetic Spectrum',
                'Deep Sky Objects',
                'Solar & Lunar Phenomena',
              ].map((topic) => (
                <li key={topic} className="text-gray-500 text-sm flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-amber-400/50 flex-shrink-0" />
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800/40 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs tracking-wide">
            © {new Date().getFullYear()} The Starry Night & Astronomy. Crafted for curious minds.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="mailto:teacher@school.edu"
              className="text-gray-600 hover:text-amber-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-amber-400 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-amber-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
