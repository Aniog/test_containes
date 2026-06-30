import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-velmora-obsidian">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-widest uppercase text-velmora-gold mb-3">
            What They Say
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-velmora-ivory tracking-wide">
            Loved by Thousands
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(t => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>

        {/* Trust indicators */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mt-14 pt-10 border-t border-velmora-charcoal">
          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="text-velmora-gold fill-velmora-gold" strokeWidth={1} />
            ))}
            <span className="font-sans text-xs text-velmora-subtle ml-2">4.9 out of 5</span>
          </div>
          <div className="w-px h-6 bg-velmora-charcoal hidden md:block" />
          <p className="font-sans text-xs text-velmora-subtle">Based on 567 verified reviews</p>
          <div className="w-px h-6 bg-velmora-charcoal hidden md:block" />
          <p className="font-sans text-xs text-velmora-subtle">Verified Purchases Only</p>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-velmora-charcoal p-8 flex flex-col gap-5">
      {/* Stars */}
      <div className="flex items-center gap-1">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={12} className="text-velmora-gold fill-velmora-gold" strokeWidth={1} />
        ))}
      </div>

      {/* Quote mark */}
      <span className="font-serif text-5xl text-velmora-gold/30 leading-none -mb-2">"</span>

      {/* Text */}
      <p className="font-serif text-lg font-light text-velmora-ivory/90 leading-relaxed italic">
        {testimonial.text}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-velmora-obsidian">
        <div className="w-8 h-8 rounded-full bg-velmora-gold/20 flex items-center justify-center">
          <span className="font-serif text-sm text-velmora-gold">{testimonial.author[0]}</span>
        </div>
        <p className="font-sans text-xs tracking-widest uppercase text-velmora-subtle">
          {testimonial.author}
        </p>
      </div>
    </div>
  );
}
