import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

function CategoryImage({ category }) {
  const configs = {
    earrings: { bg1: '#2c2018', bg2: '#1a1410', accent: '#c9a96e' },
    necklaces: { bg1: '#1e1c18', bg2: '#2a2820', accent: '#d4a574' },
    huggies: { bg1: '#241e14', bg2: '#1c1810', accent: '#e2c98a' },
  };
  const { bg1, bg2, accent } = configs[category.id] || configs.earrings;
  const gradId = `cat-grad-${category.id}`;

  const shapes = {
    earrings: (
      <g>
        <circle cx="85" cy="120" r="22" fill="none" stroke={accent} strokeWidth="5" opacity="0.9" />
        <circle cx="115" cy="120" r="22" fill="none" stroke={accent} strokeWidth="5" opacity="0.9" />
        <line x1="85" y1="98" x2="85" y2="82" stroke={accent} strokeWidth="2" opacity="0.7" />
        <line x1="115" y1="98" x2="115" y2="82" stroke={accent} strokeWidth="2" opacity="0.7" />
        <circle cx="85" cy="78" r="5" fill={accent} opacity="0.8" />
        <circle cx="115" cy="78" r="5" fill={accent} opacity="0.8" />
      </g>
    ),
    necklaces: (
      <g>
        <path d="M 50 80 Q 100 150 150 80" fill="none" stroke={accent} strokeWidth="3" opacity="0.9" strokeLinecap="round" />
        <circle cx="100" cy="140" r="20" fill="none" stroke={accent} strokeWidth="4" opacity="0.9" />
        <circle cx="100" cy="140" r="10" fill={accent} opacity="0.5" />
        <circle cx="100" cy="140" r="5" fill="white" opacity="0.3" />
      </g>
    ),
    huggies: (
      <g>
        <circle cx="80" cy="120" r="30" fill="none" stroke={accent} strokeWidth="10" opacity="0.9" />
        <circle cx="120" cy="120" r="30" fill="none" stroke={accent} strokeWidth="10" opacity="0.9" />
        <circle cx="80" cy="120" r="30" fill="none" stroke="white" strokeWidth="1" opacity="0.1" />
        <circle cx="120" cy="120" r="30" fill="none" stroke="white" strokeWidth="1" opacity="0.1" />
      </g>
    ),
  };

  return (
    <svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={bg1} />
          <stop offset="100%" stopColor={bg2} />
        </linearGradient>
      </defs>
      <rect width="200" height="240" fill={`url(#${gradId})`} />
      <line x1="0" y1="240" x2="200" y2="0" stroke={accent} strokeWidth="0.5" opacity="0.08" />
      {shapes[category.id]}
      <ellipse cx="100" cy="120" rx="60" ry="50" fill={accent} opacity="0.04" />
    </svg>
  );
}

export default function CategoryTiles() {
  return (
    <section className="bg-ivory py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-widest uppercase text-gold mb-3">Browse</p>
          <h2 className="font-serif text-3xl md:text-4xl text-obsidian font-light">Shop by Category</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative overflow-hidden block"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <div className="w-full h-full transform group-hover:scale-105 transition-transform duration-500">
                  <CategoryImage category={cat} />
                </div>
              </div>

              {/* Label overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent">
                <h3 className="font-serif text-2xl md:text-3xl text-warm-white tracking-widest uppercase font-light">
                  {cat.name}
                </h3>
                <p className="font-sans text-xs text-warm-white/60 mt-1 tracking-wide">
                  {cat.description}
                </p>
                <div className="mt-3 font-sans text-xs tracking-widest uppercase text-gold border-b border-gold pb-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Shop Now
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
