import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-cream-dark)]">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide mb-4">
            What Our Customers Say
          </h2>
          <div className="hairline max-w-[100px] mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="bg-[var(--color-cream)] p-8 text-center animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < testimonial.rating ? 'fill-[var(--color-gold)] text-[var(--color-gold)]' : 'text-gray-300'}`} 
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[var(--color-muted)] leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--color-gold)] text-white flex items-center justify-center font-serif">
                  {testimonial.initials}
                </div>
                <span className="font-sans text-sm tracking-wide">
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
