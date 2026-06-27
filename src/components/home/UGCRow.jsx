import { ugcReels } from '@/data/products';

const UGCRow = () => {
  return (
    <section className="py-16 md:py-24 bg-velmora-warm overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-velmora-black text-center">
          As Seen On
        </h2>
        <p className="text-sm text-velmora-muted text-center mt-2">
          Tag @velmora.jewelry to be featured
        </p>
      </div>

      {/* Horizontal scroll container */}
      <div className="relative">
        <div className="flex gap-4 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {ugcReels.map((reel) => (
            <div
              key={reel.id}
              className="flex-shrink-0 w-[160px] sm:w-[200px] md:w-[240px] snap-start"
            >
              {/* Reel card */}
              <div className="relative aspect-[9/16] rounded-lg overflow-hidden bg-velmora-charcoal group cursor-pointer">
                <img
                  src={reel.image}
                  alt={`${reel.user} wearing Velmora jewelry`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-black/70 via-transparent to-transparent" />

                {/* Caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                  <p className="font-serif text-sm sm:text-base text-white italic mb-1">
                    {reel.caption}
                  </p>
                  <p className="text-[10px] sm:text-xs text-white/70 font-sans">
                    {reel.user}
                  </p>
                </div>

                {/* Play icon */}
                <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[6px] border-l-white border-y-[4px] border-y-transparent ml-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCRow;
