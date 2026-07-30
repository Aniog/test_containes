import { Link } from 'react-router-dom';

const footerLinks = [
  { label: 'Home', path: '/' },
  { label: 'Equipment', path: '/equipment' },
  { label: 'Rules', path: '/rules' },
  { label: 'Techniques', path: '/techniques' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-black text-sm">
                PP
              </span>
              <span className="text-white font-bold text-lg tracking-tight">
                Ping<span className="text-orange-400">Pro</span>
              </span>
            </div>
            <p className="text-sm text-slate-500 text-center md:text-left max-w-xs">
              Your ultimate guide to the sport of table tennis — from beginner to champion.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1">
              Explore
            </p>
            {footerLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm text-slate-400 hover:text-orange-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Sport facts */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1">
              Quick Facts
            </p>
            <p className="text-sm">🏓 Olympic sport since 1988</p>
            <p className="text-sm">⚡ Ball speed up to 170 km/h</p>
            <p className="text-sm">🌍 300M+ players worldwide</p>
            <p className="text-sm">🇨🇳 China dominates globally</p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800 text-center text-xs text-slate-600">
          © {new Date().getFullYear()} PingPro. Built for table tennis enthusiasts everywhere.
        </div>
      </div>
    </footer>
  );
}
