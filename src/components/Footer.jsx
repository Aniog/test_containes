import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-dusk text-mist py-16 px-8 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-playfair text-2xl text-parchment mb-3">Intertwined</h3>
          <p className="font-caveat text-sky text-lg italic mb-4">
            "We are nature looking at itself."
          </p>
          <p className="font-inter text-sm text-mist/70 leading-relaxed">
            A documentary photography project exploring the invisible threads
            connecting human life and the natural world.
          </p>
        </div>

        <div>
          <h4 className="font-inter text-xs tracking-widest uppercase text-mist/50 mb-5">
            Navigate
          </h4>
          <ul className="space-y-3">
            {[
              { to: '/', label: 'The Connection' },
              { to: '/stories', label: 'Global Stories' },
              { to: '/lab', label: 'The Lab' },
            ].map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="font-inter text-sm text-mist/80 hover:text-parchment transition-colors duration-300"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-inter text-xs tracking-widest uppercase text-mist/50 mb-5">
            About the Project
          </h4>
          <p className="font-inter text-sm text-mist/70 leading-relaxed">
            Shot across six continents over three years, Intertwined documents
            the profound parallels between human anatomy, culture, and the
            ecosystems we inhabit.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-mist/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-inter text-xs text-mist/40 tracking-wide">
          © 2026 Intertwined Project. All rights reserved.
        </p>
        <p className="font-caveat text-sky text-base">
          Photography as empathy
        </p>
      </div>
    </footer>
  );
}
