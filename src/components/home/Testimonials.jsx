import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

function TestimonialCard({ t }) {
  return (
    <div className="flex flex-col gap-5 px-8 py-10 bg-ivory border border-stone-pale">
      {/* Stars */}
      <div className="flex gap-1">
        {[...Array(t.rating)].map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 text-gold fill-gold" strokeWidth={0} />
        ))}
      </div>

      {/* Quote */}
      <p className="font-serif text-charcoal text-base lg:text-lg font-light leading-relaxed italic flex-1">
        "{t.text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-px bg-gold" />
        <p className="text-xs uppercase tracking-widest font-sans text-stone">
          {t.name}
        </p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest font-sans text-gold mb-3">
            What They Say
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-charcoal font-light">
            Loved by Thousands
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {testimonials.map(t => (
            <TestimonialCard key={t.id} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
