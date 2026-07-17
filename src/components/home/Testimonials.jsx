import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

const Testimonials = () => {
  return (
    <section className="section-padding bg-cream">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-ivory p-8 text-center"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    strokeWidth={1.5}
                    className={i < testimonial.rating ? 'text-gold fill-gold' : 'text-border'}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="font-sans text-warm-gray leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 bg-gold-light rounded-full flex items-center justify-center">
                  <span className="font-serif text-gold-dark">
                    {testimonial.initials}
                  </span>
                </div>
                <span className="font-sans text-sm text-charcoal">
                  {testimonial.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;