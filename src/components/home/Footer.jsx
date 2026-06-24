import { Microscope } from 'lucide-react';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Organisms', href: '#organisms' },
  { label: 'Gallery', href: '#gallery' },
];

const EXPLORE_LINKS = [
  { label: 'Bacteria', href: '#organisms' },
  { label: 'Protozoa', href: '#organisms' },
  { label: 'Microalgae', href: '#organisms' },
  { label: 'Tardigrades', href: '#organisms' },
];

const Footer = () => {
  return (
    <footer className="bg-[#050d1a] border-t border-[#1a2d4a] pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center">
                <Microscope className="w-5 h-5 text-[#00d4ff]" />
              </div>
              <span
                className="text-white font-bold text-xl"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                MicroCosmos
              </span>
            </div>
            <p className="text-[#8ab4c8] text-sm leading-relaxed max-w-xs">
              Exploring the hidden universe of microorganisms — the ancient, invisible architects
              of all life on Earth.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-white font-semibold mb-4 text-sm uppercase tracking-wider"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Navigate
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#8ab4c8] hover:text-[#00d4ff] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4
              className="text-white font-semibold mb-4 text-sm uppercase tracking-wider"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Explore
            </h4>
            <ul className="space-y-3">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#8ab4c8] hover:text-[#00d4ff] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1a2d4a] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#4a6a7a] text-sm">
            © 2026 MicroCosmos. Celebrating the invisible world.
          </p>
          <p className="text-[#4a6a7a] text-sm italic">
            "In every drop of water, a universe."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
