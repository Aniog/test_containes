import { Quote } from 'lucide-react';
import StarRating from '../ui-extras/StarRating';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 px-5 md:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-caption uppercase tracking-[0.2em] text-velmora-gold mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-heading-1 md:text-heading-1 text-velmora-black">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((review) => (
            <div
              key={review.id}
              className="bg-velmora-cream rounded-xl p-6 md:p-8 relative"
            >
              <Quote size={24} className="text-velmora-sand mb-4" strokeWidth={1} />
              <p className="text-body text-velmora-espresso leading-relaxed mb-6">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-sans text-body font-medium text-velmora-black">
                    {review.name}
                  </p>
                  <p className="text-body-sm text-velmora-warm-gray mt-0.5">
                    on {review.product}
                  </p>
                </div>
                <StarRating rating={review.rating} size={12} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
