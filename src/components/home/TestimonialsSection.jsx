import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function TestimonialsSection() {
  return (
    <section className="bg-velmora-obsidian py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-velmora-gold mb-3">Customer Love</p>
          <h2 className="font-serif text-4xl md:text-5xl text-velmora-cream font-light">
            What They're Saying
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((review) => (
            <div
              key={review.id}
              className="bg-velmora-charcoal p-8 border border-velmora-stone/30 relative"
            >
              {/* Quote mark */}
              <div className="font-serif text-6xl text-velmora-gold/20 leading-none absolute top-4 left-6 select-none">
                "
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-5">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-velmora-gold text-velmora-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="font-serif text-lg text-velmora-cream/90 leading-relaxed italic mb-6">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-velmora-gold/20 flex items-center justify-center">
                  <span className="font-serif text-sm text-velmora-gold">{review.name[0]}</span>
                </div>
                <span className="font-sans text-xs uppercase tracking-widest text-velmora-mist">
                  {review.name}
                </span>
              </div>

              {/* Verified badge */}
              <div className="mt-4 flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-velmora-gold" />
                <span className="font-sans text-[10px] uppercase tracking-widest text-velmora-gold/70">Verified Purchase</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
