const reels = [
  {
    id: 1,
    caption: 'Layering essentials for golden hour',
    image:
      'https://images.unsplash.com/photo-1515562142117-1486f7ac7b56?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    caption: 'Everyday huggies, endless compliments',
    image:
      'https://images.unsplash.com/photo-1602751584552-8ba420552259?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    caption: 'The ear cuff that started it all',
    image:
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 4,
    caption: 'Gifting made unforgettable',
    image:
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 5,
    caption: 'Crystal details that catch the light',
    image:
      'https://images.unsplash.com/photo-1599643478518-17488fbbcd75?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 6,
    caption: 'Minimal, modern, magnetic',
    image:
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=600&q=80',
  },
];

export default function UGCReels() {
  return (
    <section className="py-16 md:py-24 bg-velmora-base">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-3">
            @velmorajewelry
          </p>
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-white">
            As Seen On You
          </h2>
        </div>
      </div>

      {/* Horizontal scroll row */}
      <div className="overflow-x-auto pb-4 scrollbar-hide">
        <div className="flex gap-4 px-5 md:px-8 w-max">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="relative w-[200px] md:w-[260px] aspect-[9/16] rounded-lg overflow-hidden flex-shrink-0 group"
            >
              <img
                src={reel.image}
                alt={reel.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-base/70 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 font-serif text-sm text-white/90 leading-snug">
                {reel.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
