const ugcItems = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&q=80",
    caption: "Gold hoops for every occasion",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&q=80",
    caption: "Stacking my favorites",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&q=80",
    caption: "A touch of gold",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&q=80",
    caption: "Necklace layering inspo",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&q=80",
    caption: "Ear cuff love",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=400&q=80",
    caption: "Gift-ready packaging",
  },
];

export default function UGCRow() {
  return (
    <section className="py-16 md:py-20 bg-velmora-muted overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-velmora-text-secondary mb-3">
            As Seen On
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-text font-light">
            Worn by You
          </h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-4" />
        </div>
      </div>

      {/* Auto-scroll reel */}
      <div className="relative">
        <div className="flex gap-4 scroll-reel-track" style={{ width: "max-content" }}>
          {/* Double the items for seamless loop */}
          {[...ugcItems, ...ugcItems].map((item, i) => (
            <div
              key={`${item.id}-${i}`}
              className="relative w-44 md:w-52 aspect-[9/16] shrink-0 overflow-hidden group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-3 right-3 font-serif text-sm text-white leading-tight">
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}