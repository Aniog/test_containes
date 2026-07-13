import JewelryPlaceholder from '../ui/JewelryPlaceholder';

const reels = [
  { id: 'reel-1', bg: '#1A1714', caption: 'The ear stack of dreams', user: '@sofiarenata', label: 'gold ear cuff crystal huggie stack worn on ear editorial' },
  { id: 'reel-2', bg: '#2C2825', caption: 'Layered & luminous', user: '@miaeleanor', label: 'layered gold necklaces worn on neck decolletage editorial' },
  { id: 'reel-3', bg: '#3A3530', caption: 'Sunday golden hour', user: '@clairedumont', label: 'gold drop earrings worn on ear warm light editorial' },
  { id: 'reel-4', bg: '#1A1714', caption: 'Gift her something real', user: '@annabellerose', label: 'gold jewelry gift box Velmora editorial warm' },
  { id: 'reel-5', bg: '#2C2825', caption: 'Effortless every day', user: '@lunavieira', label: 'gold huggie earrings worn on ear close up editorial' },
  { id: 'reel-6', bg: '#3A3530', caption: 'The necklace she wanted', user: '@isabellakim', label: 'floral crystal necklace worn on neck editorial warm light' },
];

export default function UGCReel() {
  return (
    <section className="bg-obsidian py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-3">
              As Worn
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-ivory">Real Women, Real Gold</h2>
          </div>
          <a
            href="#"
            className="hidden md:block font-sans text-xs font-semibold uppercase tracking-widest text-gold border-b border-gold pb-0.5 hover:text-gold-light hover:border-gold-light transition-colors duration-200"
          >
            @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-3 overflow-x-auto hide-scrollbar px-4 sm:px-6 lg:px-8 pb-2">
        {reels.map(reel => (
          <div
            key={reel.id}
            className="flex-shrink-0 w-44 md:w-52 relative group cursor-pointer"
          >
            {/* 9:16 card */}
            <div className="relative overflow-hidden">
              <JewelryPlaceholder bg={reel.bg} label={reel.label} ratio="9x16" />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="font-serif text-sm italic text-ivory leading-tight mb-1">
                  "{reel.caption}"
                </p>
                <p className="font-sans text-[10px] text-ivory-muted tracking-wide">
                  {reel.user}
                </p>
              </div>

              {/* Play icon overlay on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 rounded-full bg-gold/90 flex items-center justify-center">
                  <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-obsidian ml-1" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
