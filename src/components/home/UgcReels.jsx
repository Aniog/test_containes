import { ugcReels } from '@/data/products';

export default function UgcReels() {
  return (
    <section className="py-16 lg:py-24 bg-cream-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center">
          <p className="text-gold-600 text-xs tracking-widest uppercase font-medium mb-3">
            As Seen On You
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-ink-900 font-light">
            Worn in Real Life
          </h2>
          <div className="w-12 h-px bg-gold-400/50 mx-auto mt-4" />
        </div>
      </div>

      {/* Horizontal scroll container */}
      <div className="overflow-x-auto hide-scrollbar">
        <div className="flex gap-4 px-4 sm:px-6 lg:px-8 pb-4" style={{ minWidth: 'max-content' }}>
          {ugcReels.map((reel) => (
            <div
              key={reel.id}
              className="relative flex-shrink-0 w-[200px] sm:w-[240px] aspect-[9/16] rounded-lg overflow-hidden group cursor-pointer"
            >
              <img
                src={reel.image}
                alt={reel.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-3 right-3 text-white text-xs font-serif italic leading-relaxed">
                &ldquo;{reel.caption}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}