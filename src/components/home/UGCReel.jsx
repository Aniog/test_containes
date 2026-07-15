const REEL_ITEMS = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&q=80',
    caption: 'Morning light, gold accents',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80',
    caption: 'Stacking my Golden Spheres',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80',
    caption: 'Date night in Amber Lace',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80',
    caption: 'Gift from me, to me',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80',
    caption: 'The Heirloom Set IRL',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=400&q=80',
    caption: 'Effortless elegance',
  },
];

export default function UGCReel() {
  return (
    <section className="py-16 md:py-24 bg-ink">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-white font-light uppercase tracking-wider">
              As Seen on You
            </h2>
            <p className="text-white/50 text-sm mt-2 font-light">
              Tag <span className="text-gold">@velmorajewelry</span> to be featured
            </p>
          </div>
          <div className="hidden md:flex gap-2">
            <span className="text-white/30 text-xs uppercase tracking-wider">Reels</span>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto hide-scrollbar">
        <div className="flex gap-4 px-6 lg:px-8 pb-4" style={{ minWidth: 'max-content' }}>
          {REEL_ITEMS.map((reel) => (
            <div
              key={reel.id}
              className="relative flex-shrink-0 w-48 md:w-56 aspect-[9/16] bg-beige-light overflow-hidden group cursor-pointer"
            >
              <img
                src={reel.image}
                alt={reel.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 font-serif text-sm text-white/90 italic leading-snug">
                &ldquo;{reel.caption}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient fade hint */}
      <div className="relative mt-2 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-white/20 text-[11px] uppercase tracking-wider text-center">
          Scroll to explore more &rarr;
        </p>
      </div>
    </section>
  );
}