import { Link } from 'react-router-dom';
import { Heart, Star, Mail, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 text-white">
      {/* Wave top */}
      <div className="w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" fill="#fef9f0"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-xl">
                🐾
              </div>
              <div>
                <div className="font-display text-xl text-white">Monster Match</div>
                <div className="text-xs text-purple-300 font-handwritten">Magical Adoption Agency</div>
              </div>
            </div>
            <p className="text-purple-200 text-sm leading-relaxed">
              Connecting magical creatures with loving families since 2019. Every monster deserves a home. ✨
            </p>
            <div className="flex gap-3 mt-4">
              {['🐦', '📘', '📸', '🎵'].map((icon, i) => (
                <button key={i} className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-sm transition-colors">
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-lg text-white mb-4">Adopt</h4>
            <ul className="space-y-2">
              {[
                { to: '/monsters', label: 'Browse Monsters' },
                { to: '/quiz', label: 'Compatibility Quiz' },
                { to: '/adopt', label: 'Apply to Adopt' },
                { to: '/stories', label: 'Success Stories' },
              ].map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-purple-300 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-white mb-4">Learn</h4>
            <ul className="space-y-2">
              {[
                { to: '/education', label: 'Care Guides' },
                { to: '/education#welfare', label: 'Welfare Standards' },
                { to: '/education#habitats', label: 'Habitat Guide' },
                { to: '/community', label: 'Community Forum' },
              ].map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-purple-300 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-white mb-4">Support Us</h4>
            <p className="text-purple-300 text-sm mb-4">Help us care for monsters waiting for their forever homes.</p>
            <Link
              to="/donate"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl font-semibold text-sm hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <Heart className="w-4 h-4" />
              Donate
            </Link>
            <div className="mt-4">
              <div className="flex items-center gap-2 text-purple-300 text-sm">
                <Mail className="w-4 h-4" />
                hello@monstermatch.magic
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-purple-400 text-sm">
            © 2026 Monster Match. Made with <Heart className="w-3 h-3 inline text-pink-400" /> for magical creatures everywhere.
          </p>
          <div className="flex items-center gap-4 text-purple-400 text-sm">
            <span className="flex items-center gap-1">
              <Star className="w-3 h-3 text-yellow-400" />
              4,200+ successful adoptions
            </span>
            <span>•</span>
            <span>🌍 Serving 50+ magical realms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
