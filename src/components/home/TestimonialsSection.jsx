import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-[var(--velmora-ivory)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-sm tracking-widest uppercase text-[var(--velmora-taupe)] mb-3 block">
            What They're Saying
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--velmora-charcoal)]">
            Loved by Thousands
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[var(--velmora-white)] p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-[var(--velmora-gold)] text-[var(--velmora-gold)]"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-[var(--velmora-gray-600)] leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Customer Name */}
              <p className="font-medium text-[var(--velmora-charcoal)]">
                — {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
