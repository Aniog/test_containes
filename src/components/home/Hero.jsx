import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-obsidian">
      {/* Background SVG — warm editorial jewelry scene */}
      <div className="absolute inset-0">
        <svg
          viewBox="0 0 1440 900"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <radialGradient id="hero-glow" cx="60%" cy="45%" r="55%">
              <stop offset="0%" stopColor="#3d2e1e" />
              <stop offset="50%" stopColor="#2c2018" />
              <stop offset="100%" stopColor="#1a1410" />
            </radialGradient>
            <radialGradient id="hero-accent" cx="65%" cy="40%" r="30%">
              <stop offset="0%" stopColor="#c9a96e" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#c9a96e" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="1440" height="900" fill="url(#hero-glow)" />
          <rect width="1440" height="900" fill="url(#hero-accent)" />

          {/* Decorative jewelry silhouettes — right side */}
          {/* Large necklace arc */}
          <path d="M 820 200 Q 1050 480 1280 200" fill="none" stroke="#c9a96e" strokeWidth="3" opacity="0.25" strokeLinecap="round" />
          <path d="M 840 210 Q 1050 470 1260 210" fill="none" stroke="#e2c98a" strokeWidth="1" opacity="0.12" strokeLinecap="round" />
          {/* Pendant */}
          <circle cx="1050" cy="460" r="32" fill="none" stroke="#c9a96e" strokeWidth="4" opacity="0.3" />
          <circle cx="1050" cy="460" r="20" fill="#c9a96e" opacity="0.12" />
          <circle cx="1050" cy="460" r="10" fill="#e2c98a" opacity="0.2" />
          {/* Earring pair */}
          <circle cx="920" cy="320" r="18" fill="none" stroke="#c9a96e" strokeWidth="5" opacity="0.2" />
          <circle cx="1180" cy="320" r="18" fill="none" stroke="#c9a96e" strokeWidth="5" opacity="0.2" />
          {/* Subtle chain links */}
          {[0,1,2,3,4,5,6,7,8].map(i => (
            <ellipse key={i} cx={820 + i * 26} cy={200 + Math.sin(i * 0.7) * 8} rx="8" ry="5"
              fill="none" stroke="#c9a96e" strokeWidth="1.5" opacity="0.15"
              transform={`rotate(${i * 20}, ${820 + i * 26}, ${200 + Math.sin(i * 0.7) * 8})`} />
          ))}
          {/* Scattered sparkles */}
          {[[700,150],[1100,550],[850,600],[1300,400],[750,450],[1200,150]].map(([x,y], i) => (
            <g key={i}>
              <line x1={x-6} y1={y} x2={x+6} y2={y} stroke="#e2c98a" strokeWidth="1" opacity="0.3" />
              <line x1={x} y1={y-6} x2={x} y2={y+6} stroke="#e2c98a" strokeWidth="1" opacity="0.3" />
            </g>
          ))}
          {/* Thin horizontal rule */}
          <line x1="0" y1="899" x2="1440" y2="899" stroke="#c9a96e" strokeWidth="0.5" opacity="0.2" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="font-sans text-xs tracking-ultra-wide uppercase text-gold mb-6 opacity-80">
          New Collection 2026
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-warm-white font-light leading-tight tracking-wide mb-6">
          Crafted to be<br />
          <em className="italic text-gold">Treasured</em>
        </h1>
        <p className="font-sans text-sm md:text-base text-warm-white/60 leading-relaxed mb-10 max-w-md mx-auto">
          Demi-fine gold jewelry for the woman who values beauty in the everyday. 18K gold plated, hypoallergenic, made to last.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-gold text-obsidian font-sans text-xs tracking-widest uppercase px-10 py-4 hover:bg-gold-light transition-colors duration-300 font-medium"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-sans text-[10px] tracking-widest uppercase text-warm-white">Scroll</span>
        <div className="w-px h-8 bg-gold animate-pulse" />
      </div>
    </section>
  );
}
