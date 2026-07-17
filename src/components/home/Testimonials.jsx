import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="section" style={{ backgroundColor: 'var(--color-cream)' }}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">What Our Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="text-center p-8 bg-[#FDFCFA] animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4"
                    style={{
                      color: i < testimonial.rating ? '#C9A962' : '#E8E4DE',
                      fill: i < testimonial.rating ? '#C9A962' : 'none'
                    }}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif text-lg italic text-[#8A8A8A] mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-serif"
                  style={{ backgroundColor: 'var(--color-gold)' }}
                >
                  {testimonial.initials}
                </div>
                <span className="font-sans text-sm tracking-wide">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}