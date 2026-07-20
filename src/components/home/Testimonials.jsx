import { Star, Quote } from 'lucide-react';
import { reviews } from '../../data/products';

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-ivory-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-sans text-xs tracking-widest-2xl uppercase text-gold-500 mb-3">
            Testimonials
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal-800">
            What Our Customers Say
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-8 md:p-10 border border-ivory-300 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Quote icon */}
              <Quote size={32} className="text-gold-400/40 mb-4" />

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < review.rating
                        ? 'text-gold-500 fill-gold-500'
                        : 'text-charcoal-300'
                    }
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-charcoal-600 leading-relaxed mb-6">
                "{review.text}"
              </p>

              {/* Reviewer */}
              <div className="border-t border-ivory-300 pt-4">
                <p className="font-sans text-sm font-medium text-charcoal-800">
                  {review.name}
                </p>
                <p className="text-xs text-charcoal-400 mt-1">
                  Verified Buyer · {review.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
