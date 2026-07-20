import { ugcImages } from '../../data/products';

export default function UGCRow() {
  return (
    <section className="py-16 bg-velmora-warm overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center">
          <span className="text-xs font-sans font-medium tracking-ultra-wide text-velmora-gold mb-3 block">
            COMMUNITY LOVE
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-charcoal">
            Styled by You
          </h2>
        </div>
      </div>

      {/* Horizontal scroll container */}
      <div className="relative">
        <div className="flex gap-4 px-4 sm:px-6 lg:px-8 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory">
          {ugcImages.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-48 sm:w-56 md:w-64 snap-start"
            >
              <div className="relative aspect-[9/16] overflow-hidden group">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/60 via-transparent to-transparent" />
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-serif text-sm text-white italic">
                    "{item.caption}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-4 w-8 bg-gradient-to-r from-velmora-warm to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-4 w-8 bg-gradient-to-l from-velmora-warm to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
