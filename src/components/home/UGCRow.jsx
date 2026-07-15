import { Play } from "lucide-react";

const ugcItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=400&q=80",
    caption: "Golden hour with my new hoops",
    handle: "@sarah_style",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=400&q=80",
    caption: "The necklace I never take off",
    handle: "@emma_editorial",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80",
    caption: "Stacking my Velmora rings",
    handle: "@jessica_jewelry",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80",
    caption: "Perfect for everyday wear",
    handle: "@olivia_lovesgold",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=400&q=80",
    caption: "Gift for my bestie ♥",
    handle: "@maya_daily",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=400&q=80",
    caption: "Dressed up for date night",
    handle: "@chloe_glow",
  },
];

export default function UGCRow() {
  return (
    <section className="bg-cream py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-10">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-text-primary">
              As Seen On You
            </h2>
            <p className="text-text-muted text-sm font-light mt-2">
              Tag <span className="text-accent-gold">@velmora</span> for a chance to be featured
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-[11px] uppercase tracking-widest text-text-muted">
            <span className="w-8 h-[1px] bg-border-medium" />
            <span>Follow Us</span>
          </div>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="overflow-x-auto pb-4 -mx-6 md:-mx-10 px-6 md:px-10 scrollbar-hide">
        <div className="flex gap-4 md:gap-5 w-max">
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="group relative flex-shrink-0 w-[200px] md:w-[260px] aspect-[9/16] bg-cream-dark overflow-hidden cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />

              {/* Play button overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />

              {/* Caption overlay */}
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                <p className="text-white text-xs md:text-sm font-serif italic leading-relaxed">
                  {item.caption}
                </p>
                <p className="text-white/60 text-[10px] md:text-xs mt-1.5 tracking-wider">
                  {item.handle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile hint */}
      <div className="md:hidden text-center mt-6">
        <p className="text-[10px] uppercase tracking-widest text-text-muted">Scroll to explore</p>
      </div>
    </section>
  );
}