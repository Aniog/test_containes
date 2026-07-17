import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Testimonials = () => {
  const [revealRef, revealed] = useScrollReveal();

  return (
    <section className="py-16 md:py-24 bg-brand-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={revealRef}
          className={`text-center mb-12 md:mb-16 scroll-reveal animate-reveal-up ${revealed ? 'revealed' : ''}`}
        >
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-brand-charcoal">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 ${revealed ? 'revealed' : ''}`}>
          {testimonials.map((testimonial, idx) => (
            <div
              key={testimonial.id}
              className={`text-center px-4 py-8 md:py-10 bg-brand-cream transition-shadow duration-300 hover:shadow-lg scroll-reveal animate-reveal-up stagger-${idx + 1}`}
            >
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif text-lg md:text-xl text-brand-charcoal leading-relaxed italic mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Name */}
              <p className="text-xs font-sans font-semibold tracking-extra-wide uppercase text-brand-warm-gray">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
