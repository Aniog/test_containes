import { StarRating } from '@/components/ui/StarRating';
import { testimonials } from '@/data/products';

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-ultra-wide uppercase text-gold mb-3">Reviews</p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-light">What Our Customers Say</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((review) => (
            <div key={review.id} className="bg-white-warm p-8 border border-divider">
              <StarRating rating={review.rating} size="md" />
              <blockquote className="font-serif text-base md:text-lg text-charcoal font-light leading-relaxed mt-5 mb-6 italic">
                "{review.text}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-cream flex items-center justify-center">
                  <span className="font-serif text-sm text-muted-warm">{review.name[0]}</span>
                </div>
                <span className="font-sans text-xs tracking-widest uppercase text-muted-warm">{review.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust note */}
        <p className="text-center font-sans text-xs text-muted-warm mt-10">
          Over 2,400 five-star reviews · Verified purchases only
        </p>
      </div>
    </section>
  );
}
