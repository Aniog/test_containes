import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white p-8 md:p-10 rounded-sm text-center">
      <div className="flex items-center justify-center gap-0.5 mb-5">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-velmora-accent text-velmora-accent" />
        ))}
      </div>
      <p className="font-sans text-sm md:text-base text-velmora-text leading-relaxed mb-6 italic">
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <p className="font-sans text-xs uppercase tracking-widest text-velmora-muted">
        {testimonial.name}
      </p>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-velmora-accent-light">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-velmora-muted mb-3">Reviews</p>
          <h2 className="section-title">What Our Customers Say</h2>
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
