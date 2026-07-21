import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white rounded p-8 md:p-10 shadow-sm border border-velmora-sand/50 flex flex-col h-full">
      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 fill-velmora-gold text-velmora-gold"
          />
        ))}
      </div>
      <p className="font-sans text-sm md:text-base text-velmora-espresso leading-relaxed flex-1">
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <p className="font-serif text-sm tracking-wide text-velmora-stone mt-6">
        {testimonial.name}
      </p>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="journal" className="py-20 md:py-28 bg-velmora-cream">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-velmora-gold mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-velmora-espresso">
            Loved by Thousands
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
