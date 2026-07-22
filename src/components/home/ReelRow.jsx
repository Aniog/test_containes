const reels = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80",
    caption: "Golden hour glow.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80",
    caption: "Layered necklaces, effortless style.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80",
    caption: "Details that speak softly.",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80",
    caption: "Wear it your way.",
  },
];

const ReelRow = () => {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-serif text-2xl text-stone-900">As Worn By You</h2>
          <span className="text-xs tracking-[0.2em] uppercase text-stone-500">@velmora</span>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="relative flex-shrink-0 w-40 sm:w-48 aspect-[9/16] snap-start overflow-hidden rounded-sm"
            >
              <img
                src={reel.image}
                alt={reel.caption}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                <p className="font-serif text-xs text-white leading-snug">{reel.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReelRow;
