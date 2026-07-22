import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="section-padding bg-brand-bg-secondary">
      <div className="container-main">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="serif-heading text-3xl md:text-4xl text-brand-text-primary">
            What Our Community Says
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="p-8 bg-brand-bg-primary border border-brand-border-subtle rounded-sm animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-brand-gold text-brand-gold"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-serif text-lg italic text-brand-text-primary leading-relaxed mb-6">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-bg-elevated flex items-center justify-center text-brand-gold font-medium">
                  {testimonial.name.charAt(0)}
                </div>
                <span className="text-sm font-medium text-brand-text-secondary">
                  {testimonial.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
