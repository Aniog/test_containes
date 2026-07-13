import { Link } from 'react-router-dom';

function BrandImage() {
  return (
    <svg viewBox="0 0 480 560" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="brand-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2c2018" />
          <stop offset="100%" stopColor="#1a1208" />
        </linearGradient>
        <radialGradient id="brand-glow" cx="50%" cy="45%" r="40%">
          <stop offset="0%" stopColor="#c9a96e" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#c9a96e" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="480" height="560" fill="url(#brand-bg)" />
      <rect width="480" height="560" fill="url(#brand-glow)" />

      {/* Artisan hands holding jewelry — abstract */}
      <ellipse cx="240" cy="300" rx="80" ry="30" fill="#3d2e1e" opacity="0.6" />
      <rect x="200" y="270" width="80" height="60" rx="8" fill="#3d2e1e" opacity="0.5" />

      {/* Necklace being held */}
      <path d="M 160 260 Q 240 320 320 260" fill="none" stroke="#c9a96e" strokeWidth="2.5" opacity="0.9" strokeLinecap="round" />
      <circle cx="240" cy="308" r="22" fill="none" stroke="#c9a96e" strokeWidth="3.5" opacity="0.9" />
      <circle cx="240" cy="308" r="12" fill="#c9a96e" opacity="0.3" />
      <circle cx="240" cy="308" r="6" fill="#e2c98a" opacity="0.5" />

      {/* Decorative elements */}
      <line x1="80" y1="100" x2="400" y2="100" stroke="#c9a96e" strokeWidth="0.5" opacity="0.15" />
      <line x1="80" y1="460" x2="400" y2="460" stroke="#c9a96e" strokeWidth="0.5" opacity="0.15" />

      {/* Corner ornaments */}
      <g opacity="0.2" stroke="#c9a96e" strokeWidth="1" fill="none">
        <path d="M 40 40 L 40 60 L 60 60" />
        <path d="M 440 40 L 440 60 L 420 60" />
        <path d="M 40 520 L 40 500 L 60 500" />
        <path d="M 440 520 L 440 500 L 420 500" />
      </g>

      {/* Sparkles */}
      {[[120,180],[360,200],[150,400],[350,380]].map(([x,y], i) => (
        <g key={i} opacity="0.35">
          <line x1={x-5} y1={y} x2={x+5} y2={y} stroke="#e2c98a" strokeWidth="1" />
          <line x1={x} y1={y-5} x2={x} y2={y+5} stroke="#e2c98a" strokeWidth="1" />
        </g>
      ))}
    </svg>
  );
}

export default function BrandStory() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="relative overflow-hidden">
            <div className="aspect-[4/5]">
              <BrandImage />
            </div>
            {/* Gold border accent */}
            <div className="absolute top-4 left-4 right-4 bottom-4 border border-gold/20 pointer-events-none" />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <p className="font-sans text-xs tracking-widest uppercase text-gold mb-4">Our Story</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-obsidian font-light leading-tight mb-6">
              Born from a love of<br />
              <em className="italic">quiet beauty</em>
            </h2>
            <div className="w-10 h-px bg-gold mb-6" />
            <p className="font-sans text-sm text-stone leading-relaxed mb-4">
              Velmora was founded on a simple belief: that beautiful jewelry shouldn't require a special occasion. We design pieces that feel luxurious every day — crafted with intention, worn with ease.
            </p>
            <p className="font-sans text-sm text-stone leading-relaxed mb-8">
              Each piece is made from 18K gold-plated brass and sterling silver, hypoallergenic and designed to last. We believe in accessible luxury — jewelry that looks like it costs ten times more.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 font-sans text-xs tracking-widest uppercase text-obsidian hover:text-gold transition-colors duration-300 group"
            >
              Read Our Story
              <span className="w-8 h-px bg-obsidian group-hover:bg-gold group-hover:w-12 transition-all duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
