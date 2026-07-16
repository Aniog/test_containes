import { Heart } from "lucide-react";
import { ugcItems } from "@/data/products";

export default function UGCRow() {
  return (
    <section className="py-16 lg:py-20 bg-velmora-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10">
          <p className="text-velmora-gold text-xs tracking-[0.25em] uppercase font-sans font-medium mb-3">
            As Seen On
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-velmora-charcoal font-light">
            Worn by You
          </h2>
          <p className="text-sm text-velmora-taupe mt-3 font-sans max-w-md mx-auto">
            Tag <span className="text-velmora-gold font-medium">@velmorajewelry</span> for a
            chance to be featured.
          </p>
        </div>
      </div>

      {/* Horizontal scrolling reel */}
      <div className="overflow-x-auto ugc-scroll pb-2">
        <div className="flex gap-4 px-4 sm:px-6 lg:px-8 w-max">
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-[200px] sm:w-[240px] aspect-[9/16] bg-velmora-cream rounded-sm overflow-hidden group"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white text-xs font-sans leading-relaxed italic">
                  &ldquo;{item.caption}&rdquo;
                </p>
              </div>
              <button
                className="absolute top-3 right-3 text-white/80 hover:text-velmora-rose transition-colors"
                aria-label="Like"
              >
                <Heart className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}