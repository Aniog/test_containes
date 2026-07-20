import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-3 h-3 ${i < rating ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-linen'}`}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-velmora-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-manrope text-xs uppercase tracking-widest text-velmora-gold mb-3">
            Customer Love
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl text-velmora-obsidian">
            What They're Saying
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((review, i) => (
            <div
              key={review.id}
              className="bg-velmora-cream p-8 md:p-10 border border-velmora-linen relative"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Quote mark */}
              <div className="font-cormorant text-6xl text-velmora-gold/20 leading-none absolute top-4 left-6 select-none">
                "
              </div>

              <StarRating rating={review.rating} />

              <p className="font-cormorant text-lg md:text-xl text-velmora-obsidian leading-relaxed mt-5 mb-6 italic">
                "{review.text}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-velmora-linen">
                <div className="w-8 h-8 rounded-full bg-velmora-gold/20 flex items-center justify-center">
                  <span className="font-cormorant text-sm text-velmora-gold">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <span className="font-manrope text-xs uppercase tracking-widest text-velmora-muted">
                  {review.name}
                </span>
                <span className="font-manrope text-[10px] text-velmora-subtle ml-auto">
                  Verified Purchase
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
