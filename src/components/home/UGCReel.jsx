import { ugcReels } from "@/data/products";

export default function UGCReel() {
  return (
    <section className="py-16 md:py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-[10px] tracking-[0.2em] uppercase text-gold-600 font-sans font-medium">
            As Seen On You
          </p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl text-warm-900 font-light">
            Real Looks, Real Love
          </h2>
          <div className="w-12 h-px bg-gold-400 mx-auto mt-4" />
        </div>

        <div className="overflow-hidden -mx-4 sm:mx-0">
          <div className="flex gap-3 md:gap-4 overflow-x-auto hide-scrollbar px-4 sm:px-0 pb-4">
            {ugcReels.map((reel) => (
              <div
                key={reel.id}
                className="flex-shrink-0 w-44 md:w-52 group cursor-pointer relative overflow-hidden"
              >
                <div className="aspect-[9/16] bg-cream-200 overflow-hidden rounded-sm">
                  <img
                    src={reel.image}
                    alt={reel.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-warm-950/70 via-transparent to-transparent" />
                <p className="absolute bottom-3 left-3 right-3 text-[10px] md:text-xs text-cream-100 font-serif italic leading-relaxed">
                  &ldquo;{reel.caption}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}