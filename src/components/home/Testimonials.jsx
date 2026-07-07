import { testimonials } from '@/data/products';
import StarRating from '@/components/ui/StarRating';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-velmora-obsidian">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14 md:mb-16">
          <p className="font-inter text-[10px] tracking-[0.2em] uppercase text-velmora-gold mb-3">
            Reviews
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-velmora-text-light tracking-wide">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-velmora-gold/40 mx-auto mt-5" />
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="border border-velmora-stone/40 p-8 md:p-10 hover:border-velmora-gold/30 transition-colors duration-300"
            >
              <div className="mb-4">
                <StarRating rating={5} size={12} />
              </div>
              <blockquote className="font-cormorant text-lg md:text-xl font-light text-velmora-text-light leading-relaxed mb-6 italic">
                "{t.text}"
              </blockquote>
              <p className="font-inter text-xs tracking-[0.1em] uppercase text-velmora-mist">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
