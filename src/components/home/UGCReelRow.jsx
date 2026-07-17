import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const ugcItems = [
  {
    id: 1,
    image: "https://placehold.co/400x711/FFF5EB/8B6914?text=Golden+Hour&font=playfair-display",
    caption: "Golden hour glow",
  },
  {
    id: 2,
    image: "https://placehold.co/400x711/FFF5EB/8B6914?text=Everyday+Elegance&font=playfair-display",
    caption: "Everyday elegance",
  },
  {
    id: 3,
    image: "https://placehold.co/400x711/FFF5EB/8B6914?text=Stacked+Styled&font=playfair-display",
    caption: "Stacked & styled",
  },
  {
    id: 4,
    image: "https://placehold.co/400x711/FFF5EB/8B6914?text=Gifted+With+Love&font=playfair-display",
    caption: "Gifted with love",
  },
  {
    id: 5,
    image: "https://placehold.co/400x711/FFF5EB/8B6914?text=Morning+Light&font=playfair-display",
    caption: "Morning light",
  },
  {
    id: 6,
    image: "https://placehold.co/400x711/FFF5EB/8B6914?text=Timeless+Pieces&font=playfair-display",
    caption: "Timeless pieces",
  },
];

export default function UGCReelRow() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-velmora-cream">
      <div className="container-velmora">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl text-velmora-charcoal">
              #VelmoraStyle
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              See how our community wears their pieces.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 border border-border hover:border-accent hover:text-accent transition-colors"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 border border-border hover:border-accent hover:text-accent transition-colors"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-none w-48 sm:w-56 md:w-64"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="relative aspect-[9/16] overflow-hidden bg-muted">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                  <p className="text-white text-sm font-serif italic">
                    "{item.caption}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
