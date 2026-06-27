const reels = [
  {
    id: 1,
    caption: "Everyday gold",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80",
  },
  {
    id: 2,
    caption: "Layered & loved",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80",
  },
  {
    id: 3,
    caption: "Gift-worthy",
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&q=80",
  },
  {
    id: 4,
    caption: "Ear party",
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&q=80",
  },
  {
    id: 5,
    caption: "Minimal luxe",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80",
  },
  {
    id: 6,
    caption: "Date night",
    image: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=400&q=80",
  },
];

export default function UGCReel() {
  return (
    <section className="py-16 md:py-24 bg-linen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-ink">As Seen On You</h2>
          <p className="mt-3 text-sm text-stone">Real moments, real gold</p>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 md:gap-4 px-4 md:px-8 pb-4" style={{ width: "max-content" }}>
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="relative w-40 md:w-48 aspect-[9/16] rounded-sm overflow-hidden group cursor-pointer flex-shrink-0"
            >
              <img
                src={reel.image}
                alt={reel.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 font-serif text-sm text-cream italic">
                {reel.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
