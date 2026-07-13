import { ugcItems } from '../../data/products';

const ugcColors = [
  'linear-gradient(160deg, #2C2018 0%, #3D2E1A 60%, #1A1614 100%)',
  'linear-gradient(160deg, #1A1614 0%, #2C2018 50%, #3D2E1A 100%)',
  'linear-gradient(160deg, #3D2E1A 0%, #2C2018 50%, #1A1614 100%)',
  'linear-gradient(160deg, #2C2018 0%, #1A1614 40%, #3D2E1A 100%)',
  'linear-gradient(160deg, #1A1614 0%, #3D2E1A 60%, #2C2018 100%)',
  'linear-gradient(160deg, #3D2E1A 0%, #1A1614 50%, #2C2018 100%)',
];

export default function UGCReel() {
  return (
    <section className="py-20 lg:py-28 bg-velmora-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-manrope text-xs uppercase tracking-widest text-velmora-gold mb-3">
              As Worn
            </p>
            <h2 className="font-cormorant text-4xl lg:text-5xl text-velmora-obsidian font-light">
              The Velmora Edit
            </h2>
          </div>
          <a
            href="#"
            className="hidden sm:block font-manrope text-xs uppercase tracking-widest text-velmora-stone hover:text-velmora-gold transition-colors duration-200 border-b border-velmora-stone/30 hover:border-velmora-gold pb-0.5"
          >
            Follow @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div className="flex gap-3 lg:gap-4 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 pb-2">
        {ugcItems.map((item, i) => (
          <div
            key={item.id}
            className="flex-shrink-0 relative overflow-hidden cursor-pointer group"
            style={{ width: '160px', height: '284px' }}
          >
            {/* Background */}
            <div
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
              style={{ background: ugcColors[i % ugcColors.length] }}
            >
              {/* Gold accent glow */}
              <div
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(ellipse 60% 50% at ${40 + i * 8}% ${30 + i * 5}%, rgba(201,169,110,0.25) 0%, transparent 65%)`,
                }}
              />
              {/* Decorative ring */}
              <div
                className="absolute rounded-full border border-velmora-gold/20"
                style={{
                  width: '80px',
                  height: '80px',
                  top: `${15 + (i % 3) * 20}%`,
                  left: `${10 + (i % 2) * 30}%`,
                }}
              />
            </div>

            {/* Hidden text for image queries */}
            <span id={item.titleId} className="sr-only">{item.caption}</span>

            {/* Caption overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-velmora-obsidian/80 to-transparent">
              <p
                id={item.captionId}
                className="font-cormorant text-sm italic text-velmora-ivory/90 leading-tight"
              >
                {item.caption}
              </p>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-velmora-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
}
