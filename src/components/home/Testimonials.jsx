import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="font-inter text-xs tracking-widest uppercase text-gold mb-3">Reviews</p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-espresso">What They're Saying</h2>
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
    <div className="flex flex-col gap-5 p-8 bg-linen border border-warm-gray-light">
      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={12} className="text-gold fill-gold" />
        ))}
      </div>

      {/* Quote mark */}
      <p className="font-cormorant text-4xl text-gold leading-none -mt-2">"</p>

      {/* Text */}
      <p className="font-inter text-sm text-warm-gray leading-relaxed -mt-4">
        {testimonial.text}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-warm-gray-light">
        <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
          <span className="font-cormorant text-sm text-gold font-medium">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <span className="font-inter text-xs tracking-widest uppercase text-espresso">
          {testimonial.name}
        </span>
      </div>
    </div>
  );
}
