import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-velmora-obsidian">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-velmora-gold mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-velmora-cream">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(t => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-velmora-charcoal border border-velmora-stone/40 p-8 flex flex-col gap-5">
      {/* Stars */}
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-velmora-gold text-velmora-gold" />
        ))}
      </div>

      {/* Quote */}
      <p className="font-serif text-base md:text-lg text-velmora-cream/90 leading-relaxed italic flex-1">
        "{testimonial.text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-velmora-stone/40">
        <div className="w-8 h-8 rounded-full bg-velmora-gold/20 flex items-center justify-center">
          <span className="font-serif text-sm text-velmora-gold">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <span className="font-sans text-xs tracking-[0.1em] text-velmora-text-muted">
          {testimonial.name}
        </span>
      </div>
    </div>
  );
}
