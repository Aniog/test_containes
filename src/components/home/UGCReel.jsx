import { ugcItems } from '../../data/products';

// UGC card SVG — vertical 9:16 jewelry worn on model
function UGCImage({ item }) {
  const colors = [
    { bg1: '#2c1f14', bg2: '#1a1208', accent: '#c9a96e' },
    { bg1: '#1e1a14', bg2: '#2a2218', accent: '#d4a574' },
    { bg1: '#241c10', bg2: '#1c1408', accent: '#e2c98a' },
    { bg1: '#201a12', bg2: '#2c2416', accent: '#c9a96e' },
    { bg1: '#1a1610', bg2: '#261e14', accent: '#b8956a' },
  ];
  const idx = ugcItems.findIndex(u => u.id === item.id) % colors.length;
  const { bg1, bg2, accent } = colors[idx];
  const gradId = `ugc-grad-${item.id}`;

  return (
    <svg viewBox="0 0 180 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={bg1} />
          <stop offset="100%" stopColor={bg2} />
        </linearGradient>
        <linearGradient id={`${gradId}-overlay`} x1="0%" y1="60%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.7)" />
        </linearGradient>
      </defs>
      <rect width="180" height="320" fill={`url(#${gradId})`} />

      {/* Neck/ear silhouette suggestion */}
      <ellipse cx="90" cy="100" rx="30" ry="50" fill={bg1} opacity="0.6" />
      <rect x="75" y="140" width="30" height="80" rx="4" fill={bg1} opacity="0.5" />

      {/* Jewelry on ear */}
      <circle cx="118" cy="105" r="10" fill="none" stroke={accent} strokeWidth="4" opacity="0.9" />
      <circle cx="118" cy="105" r="5" fill={accent} opacity="0.7" />

      {/* Necklace */}
      <path d="M 60 155 Q 90 185 120 155" fill="none" stroke={accent} strokeWidth="2" opacity="0.8" strokeLinecap="round" />
      <circle cx="90" cy="178" r="7" fill="none" stroke={accent} strokeWidth="2" opacity="0.8" />
      <circle cx="90" cy="178" r="3.5" fill={accent} opacity="0.6" />

      {/* Sparkles */}
      <g opacity="0.5">
        <line x1="130" y1="80" x2="136" y2="80" stroke={accent} strokeWidth="1" />
        <line x1="133" y1="77" x2="133" y2="83" stroke={accent} strokeWidth="1" />
        <line x1="45" y1="200" x2="51" y2="200" stroke={accent} strokeWidth="1" />
        <line x1="48" y1="197" x2="48" y2="203" stroke={accent} strokeWidth="1" />
      </g>

      {/* Gradient overlay for text */}
      <rect width="180" height="320" fill={`url(#${gradId}-overlay)`} />
    </svg>
  );
}

export default function UGCReel() {
  return (
    <section className="bg-obsidian py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-sans text-xs tracking-widest uppercase text-gold mb-2">As Worn</p>
            <h2 className="font-serif text-3xl md:text-4xl text-warm-white font-light">
              The Velmora Edit
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:block font-sans text-xs tracking-widest uppercase text-warm-white/40 hover:text-gold transition-colors duration-300"
          >
            @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div className="flex gap-3 md:gap-4 overflow-x-auto pb-4 px-4 md:px-8 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {ugcItems.map(item => (
          <div
            key={item.id}
            className="flex-shrink-0 w-36 md:w-44 relative group cursor-pointer"
          >
            {/* 9:16 aspect ratio container */}
            <div className="aspect-ugc overflow-hidden relative">
              <UGCImage item={item} />

              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="font-serif text-xs italic text-warm-white leading-tight">
                  {item.caption}
                </p>
                <p className="font-sans text-[10px] text-warm-white/50 mt-1 tracking-wide">
                  {item.handle}
                </p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
