import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="bg-parchment py-20 md:py-28 border-t border-linen">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-14">
          <p className="font-sans text-xs font-medium tracking-widest uppercase text-gold mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-ink">
            What They're Saying
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
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
    <div className="bg-cream p-8 md:p-10 flex flex-col">
      {/* Stars */}
      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={12} className="text-gold fill-gold" />
        ))}
      </div>

      {/* Quote mark */}
      <p className="font-serif text-5xl text-gold/30 leading-none mb-2 -mt-2">"</p>

      {/* Text */}
      <p className="font-serif text-lg font-light text-ink leading-relaxed flex-1 -mt-4">
        {testimonial.text}
      </p>

      {/* Author */}
      <div className="mt-6 pt-6 border-t border-linen">
        <p className="font-sans text-xs font-medium tracking-widest uppercase text-mist">
          — {testimonial.name}
        </p>
        <p className="font-sans text-[10px] text-whisper mt-0.5">Verified Purchase</p>
      </div>
    </div>
  );
}
