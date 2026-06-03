import { Link } from 'react-router-dom';

const footerLinks = [
  { label: 'Home', path: '/' },
  { label: 'Explore', path: '/explore' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'About', path: '/about' },
];

export default function Footer() {
  return (
    <footer className="bg-cosmos-dark border-t border-cosmos-teal/10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-cosmos-teal/20 border border-cosmos-teal/50 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-cosmos-teal" />
              </div>
              <span className="font-grotesk font-bold text-lg text-cosmos-white">
                Micro<span className="text-cosmos-teal">Cosmos</span>
              </span>
            </div>
            <p className="text-cosmos-muted text-sm leading-relaxed max-w-xs">
              Exploring the invisible universe that exists all around us — from the depths of the ocean to the surface of your skin.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-3">
            <h4 className="font-grotesk font-semibold text-cosmos-white text-sm uppercase tracking-widest mb-1">
              Navigate
            </h4>
            {footerLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-cosmos-muted hover:text-cosmos-teal text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Tagline */}
          <div className="flex flex-col gap-4">
            <h4 className="font-grotesk font-semibold text-cosmos-white text-sm uppercase tracking-widest mb-1">
              The Hidden World
            </h4>
            <p className="text-cosmos-muted text-sm leading-relaxed">
              Every drop of water, every grain of soil, every breath of air — teeming with life too small to see, yet essential to all existence.
            </p>
            <div className="flex gap-2 mt-2">
              <div className="w-2 h-2 rounded-full bg-cosmos-teal animate-pulse" />
              <div className="w-2 h-2 rounded-full bg-cosmos-purple animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="w-2 h-2 rounded-full bg-cosmos-cyan animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>

        <div className="border-t border-cosmos-teal/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-cosmos-muted text-xs">
            © 2026 MicroCosmos. All rights reserved.
          </p>
          <p className="text-cosmos-muted text-xs">
            Dedicated to the wonders of the microscopic world.
          </p>
        </div>
      </div>
    </footer>
  );
}
