import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background — deep warm dark with gold glow */}
      <div className="absolute inset-0 bg-obsidian">
        <svg viewBox="0 0 1440 900" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover opacity-80">
          <defs>
            <radialGradient id="hero-glow-1" cx="65%" cy="45%" r="45%">
              <stop offset="0%" stopColor="#C9A96E" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#1A1714" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="hero-glow-2" cx="30%" cy="70%" r="35%">
              <stop offset="0%" stopColor="#A8854A" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#1A1714" stopOpacity="0" />
            </radialGradient>
            <filter id="hero-blur">
              <feGaussianBlur stdDeviation="40" />
            </filter>
          </defs>
          <rect width="1440" height="900" fill="#1A1714" />
          <ellipse cx="936" cy="405" rx="520" ry="380" fill="url(#hero-glow-1)" filter="url(#hero-blur)" />
          <ellipse cx="432" cy="630" rx="400" ry="300" fill="url(#hero-glow-2)" filter="url(#hero-blur)" />

          {/* Decorative jewelry silhouette */}
          <g opacity="0.12" transform="translate(720, 450) scale(1.8)">
            <circle cx="0" cy="0" r="80" fill="none" stroke="#C9A96E" strokeWidth="2" />
            <circle cx="0" cy="0" r="60" fill="none" stroke="#C9A96E" strokeWidth="1" />
            {[0,45,90,135,180,225,270,315].map((a, i) => {
              const r = (a * Math.PI) / 180;
              return <circle key={i} cx={80 * Math.cos(r)} cy={80 * Math.sin(r)} r="5" fill="#C9A96E" />;
            })}
            <polygon points="0,-40 10,0 0,40 -10,0" fill="#C9A96E" opacity="0.8" />
          </g>

          {/* Thin horizontal lines — editorial texture */}
          {[200, 400, 600, 700].map(y => (
            <line key={y} x1="0" y1={y} x2="1440" y2={y} stroke="#C9A96E" strokeWidth="0.3" opacity="0.08" />
          ))}
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] mb-6 opacity-80" style={{ color: '#C9A96E' }}>
          18K Gold Plated · Demi-Fine Jewelry
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1.05] mb-6" style={{ color: '#F5F0E8' }}>
          Crafted to be<br />
          <em className="italic" style={{ color: '#C9A96E' }}>Treasured</em>
        </h1>
        <p className="font-sans text-base md:text-lg max-w-md mx-auto mb-10 leading-relaxed" style={{ color: '#C8C0B5' }}>
          Demi-fine gold jewelry for the woman who knows her worth. Designed to be worn every day, remembered forever.
        </p>
        <Link
          to="/shop"
          className="inline-block font-sans text-xs font-semibold uppercase tracking-[0.2em] px-10 py-4 transition-all duration-300"
          style={{ backgroundColor: '#C9A96E', color: '#1A1714' }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#DFC08A'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = '#C9A96E'}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-12 bg-gold animate-pulse" />
        <span className="font-sans text-[10px] uppercase tracking-widest text-ivory-muted">Scroll</span>
      </div>
    </section>
  );
}
