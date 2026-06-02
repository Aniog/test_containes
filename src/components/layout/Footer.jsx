import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#2C2C2C] text-[#D4B896] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <span
            className="block text-3xl text-[#A8C5A0] mb-2"
            style={{ fontFamily: 'Caveat, cursive' }}
          >
            Intertwined
          </span>
          <p className="text-sm text-[#8B6F5E] leading-relaxed max-w-xs">
            A visual exploration of the invisible threads connecting human life
            and the natural world.
          </p>
        </div>

        <div>
          <p className="section-label text-[#5A5A5A] mb-4">Explore</p>
          <ul className="space-y-3">
            {[
              { label: 'The Connection', path: '/' },
              { label: 'Global Stories', path: '/stories' },
              { label: 'The Lab', path: '/lab' },
            ].map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="text-sm text-[#D4B896] hover:text-[#A8C5A0] transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="section-label text-[#5A5A5A] mb-4">About</p>
          <p className="text-sm text-[#8B6F5E] leading-relaxed">
            Photography project documenting the symbiosis between indigenous
            communities and their ecosystems across six continents.
          </p>
          <p
            className="mt-4 text-lg text-[#A8C5A0]"
            style={{ fontFamily: 'Caveat, cursive' }}
          >
            "We are nature, looking at itself."
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-[#3C3C3C] flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-[#5A5A5A]">
          © 2026 Intertwined Project. All rights reserved.
        </p>
        <p className="text-xs text-[#5A5A5A]">
          Photography & Direction — Intertwined Studio
        </p>
      </div>
    </footer>
  );
}
