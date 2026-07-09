import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest font-medium text-gold mb-3 font-sans">
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
    <div className="bg-parchment p-8 md:p-10 border border-border relative">
      {/* Quote mark */}
      <span className="absolute top-6 right-8 font-serif text-6xl text-gold/20 leading-none select-none">
        "
      </span>

      {/* Stars */}
      <div className="flex gap-1 mb-5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-gold text-gold" />
        ))}
      </div>

      {/* Text */}
      <p className="font-serif text-lg font-light text-ink leading-relaxed mb-6 italic">
        "{testimonial.text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-px bg-gold" />
        <span className="text-xs uppercase tracking-widest font-medium text-taupe font-sans">
          {testimonial.name}
        </span>
      </div>
    </div>
  );
}
