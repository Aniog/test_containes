import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';
import StarRating from '@/components/common/StarRating';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-inter text-xs uppercase tracking-widest text-gold mb-3">Reviews</p>
          <h2 className="font-cormorant text-4xl md:text-5xl text-charcoal font-light tracking-wide">
            What Our Customers Say
          </h2>
          {/* Overall rating */}
          <div className="flex items-center justify-center gap-2 mt-5">
            <StarRating rating={5} size="lg" />
            <span className="font-inter text-sm text-warm-gray ml-2">4.9 out of 5 · 400+ reviews</span>
          </div>
        </div>

        {/* Testimonial cards */}
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
    <div className="bg-blush border border-linen p-8 flex flex-col gap-5">
      {/* Stars */}
      <StarRating rating={testimonial.rating} size="lg" />

      {/* Quote mark */}
      <p className="font-cormorant text-5xl text-gold/30 leading-none -mb-3">"</p>

      {/* Text */}
      <p className="font-inter text-sm text-warm-gray leading-relaxed flex-1">
        {testimonial.text}
      </p>

      {/* Author */}
      <div className="pt-4 border-t border-linen">
        <p className="font-inter text-xs uppercase tracking-widest text-charcoal">{testimonial.name}</p>
        <p className="font-inter text-[10px] text-warm-gray mt-0.5">Verified Purchase</p>
      </div>
    </div>
  );
}
