import { ugcReels } from '../../data/products';

export default function UGCSection() {
  return (
    <section className="py-16 md:py-20 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-10">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-gold font-medium mb-2">As Seen On</p>
            <h2 className="text-2xl md:text-3xl font-serif text-charcoal">Worn by You</h2>
          </div>
          <p className="hidden md:block text-xs text-charcoal-muted tracking-wider uppercase">
            Tag @Velmora to be featured
          </p>
        </div>
      </div>

      <div className="overflow-x-auto pb-4 -mx-4 px-4">
        <div className="flex gap-4 md:gap-6 w-max">
          {ugcReels.map((reel) => (
            <div
              key={reel.id}
              className="relative w-44 md:w-52 aspect-[9/16] flex-shrink-0 overflow-hidden rounded-sm group cursor-pointer"
            >
              <img
                src={reel.image}
                alt=""
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white text-xs md:text-sm font-serif italic leading-relaxed">
                  &ldquo;{reel.caption}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}