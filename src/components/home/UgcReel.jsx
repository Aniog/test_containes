import { ugcItems } from '@/data/products';

const ugcImages = [
  'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=711&fit=crop&q=80',
  'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=711&fit=crop&q=80',
  'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=711&fit=crop&q=80',
  'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=711&fit=crop&q=80',
  'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=711&fit=crop&q=80',
  'https://images.unsplash.com/photo-1603974372039-adc49044b6bd?w=400&h=711&fit=crop&q=80',
];

export default function UgcReel() {
  return (
    <section className="py-16 md:py-24 bg-velmora-ivory">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-caption uppercase tracking-widest-2xl text-velmora-gold mb-3">
            Styled by You
          </p>
          <h2 className="font-serif text-heading-xl md:text-[3.5rem] text-velmora-charcoal">
            @velmora
          </h2>
          <p className="text-body text-velmora-muted mt-3">
            Tag us to be featured
          </p>
        </div>

        {/* Horizontal scroll reel */}
        <div className="relative">
          <div className="flex gap-4 md:gap-5 overflow-x-auto scrollbar-hide pb-4 px-1 snap-x snap-mandatory">
            {ugcItems.map((item, index) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-[180px] sm:w-[200px] md:w-[220px] snap-start group"
              >
                <div className="relative aspect-[9/16] rounded-lg overflow-hidden bg-velmora-dark">
                  <img
                    src={ugcImages[index % ugcImages.length]}
                    alt={item.caption}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-velmora-black/70 via-transparent to-transparent" />

                  {/* Caption overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="font-serif text-body text-velmora-white/90 italic">
                      {item.caption}
                    </p>
                    <p className="text-[10px] text-velmora-gold-light mt-1 uppercase tracking-wider">
                      {item.product}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Fade edges */}
          <div className="absolute top-0 left-0 bottom-4 w-8 bg-gradient-to-r from-velmora-ivory to-transparent pointer-events-none z-10" />
          <div className="absolute top-0 right-0 bottom-4 w-8 bg-gradient-to-l from-velmora-ivory to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
}
