import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { testimonials } from '../../data/products';

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-velmora-gold' : 'text-velmora-border'} fill-current`}
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="py-20 md:py-28 bg-velmora-cream/50">
      <div ref={ref} className="section-container">
        {/* Section Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-xs font-medium uppercase tracking-ultra-wide text-velmora-gold mb-3 block">
            What They Say
          </span>
          <h2 className="heading-section">Loved by Our Community</h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-white p-8 rounded-lg shadow-soft transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Stars */}
              <StarRating rating={testimonial.rating} />
              
              {/* Quote */}
              <p className="mt-4 text-velmora-charcoal leading-relaxed italic font-serif text-lg">
                "{testimonial.text}"
              </p>
              
              {/* Attribution */}
              <div className="mt-6 pt-6 border-t border-velmora-border">
                <p className="font-medium text-velmora-charcoal">
                  {testimonial.name}
                </p>
                <p className="mt-1 text-xs text-velmora-warm-gray uppercase tracking-wider">
                  Verified Purchase
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
