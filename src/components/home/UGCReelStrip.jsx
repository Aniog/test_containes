import { ugcContent } from '@/data/products';

const UGCReelStrip = () => {
  return (
    <section className="py-16 bg-cream-100">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="font-serif text-2xl sm:text-3xl text-espresso-900 mb-2">
            Styled by You
          </h2>
          <p className="text-sm text-taupe">Tag @velmorajewelry to be featured</p>
        </div>
      </div>

      {/* Scrollable Container */}
      <div className="overflow-x-auto hide-scrollbar">
        <div className="flex gap-3 px-4 sm:px-6 lg:px-8 pb-4" style={{ width: 'max-content' }}>
          {ugcContent.map((item) => (
            <div
              key={item.id}
              className="relative w-[160px] sm:w-[200px] flex-shrink-0 rounded-lg overflow-hidden group"
            >
              {/* Image */}
              <div className="aspect-reel">
                <img
                  src={item.image}
                  alt={`Styled by ${item.author}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-900/80 via-transparent to-transparent" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-serif text-sm text-white/90 italic leading-snug">
                  "{item.caption}"
                </p>
                <p className="text-xs text-white/60 mt-1">— {item.author}</p>
              </div>
            </div>
          ))}

          {/* View More Card */}
          <div className="relative w-[160px] sm:w-[200px] flex-shrink-0">
            <div className="aspect-reel bg-espresso-900 rounded-lg flex flex-col items-center justify-center text-center p-6">
              <span className="text-4xl mb-3">+</span>
              <span className="text-white/80 text-sm">View All</span>
              <span className="text-white/60 text-xs mt-1">@velmorajewelry</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UGCReelStrip;
