import { ugcReels } from '../../data/products';

export default function UGCRow() {
  return (
    <section className="py-20 md:py-28 bg-[#F5F0EB] overflow-hidden">
      <div className="max-w-8xl mx-auto px-4 md:px-8 mb-10">
        <div className="text-center">
          <span className="text-xs uppercase tracking-[0.15em] text-stone">As seen on</span>
          <h2 className="font-serif text-3xl md:text-4xl mt-2 text-foreground">Worn Your Way</h2>
          <div className="w-12 h-px bg-accent mx-auto mt-4" />
        </div>
      </div>

      {/* Horizontal scroll container */}
      <div className="relative">
        <div className="flex gap-4 md:gap-6 overflow-x-auto px-4 md:px-8 pb-4 scrollbar-hide snap-x snap-mandatory">
          {ugcReels.map((reel) => (
            <div
              key={reel.id}
              className="flex-shrink-0 w-[220px] md:w-[260px] snap-start group cursor-pointer"
            >
              <div className="relative aspect-[9/16] rounded-lg overflow-hidden bg-ivory shadow-md">
                <img
                  src={reel.image}
                  alt=""
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-serif text-sm text-white italic leading-snug">
                    &ldquo;{reel.caption}&rdquo;
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