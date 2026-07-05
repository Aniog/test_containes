import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function TestimonialsSection() {
  return (
    <section className="section-spacing bg-espresso">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3">
            Love Letters
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-ivory">
            What Our Customers Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-walnut/30 p-8 md:p-10"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-gold fill-gold"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-champagne/90 leading-relaxed mb-6">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
                  <span className="text-gold font-medium">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <p className="text-sm text-champagne/70">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
