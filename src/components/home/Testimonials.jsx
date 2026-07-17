import { testimonials } from '@/data/products';
import { StarRating } from '@/components/ui/StarRating';

export default function Testimonials() {
  return (
    <section className="bg-velmora-obsidian py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="font-inter text-[10px] tracking-[0.3em] uppercase text-velmora-gold mb-3">Reviews</p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-velmora-linen tracking-wide">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(t => (
            <div
              key={t.id}
              className="bg-velmora-charcoal border border-velmora-stone/30 p-8 rounded-sm relative"
            >
              {/* Quote mark */}
              <div className="font-cormorant text-6xl text-velmora-gold/20 leading-none absolute top-4 left-6 select-none">
                "
              </div>

              <div className="relative z-10 space-y-4">
                <StarRating rating={t.rating} size={13} />
                <p className="font-cormorant text-lg italic text-velmora-linen/90 leading-relaxed">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3 pt-2 border-t border-velmora-stone/30">
                  <div className="w-8 h-8 rounded-full bg-velmora-gold/20 flex items-center justify-center">
                    <span className="font-cormorant text-sm text-velmora-gold">
                      {t.name.charAt(0)}
                    </span>
                  </div>
                  <span className="font-inter text-xs tracking-wider text-velmora-ash uppercase">
                    {t.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
