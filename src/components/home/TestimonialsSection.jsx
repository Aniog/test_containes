import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="text-center mb-12">
          <p className="text-amber-700 text-sm tracking-[0.3em] uppercase mb-3">Kind Words</p>
          <h2 className="serif-heading text-4xl md:text-5xl text-stone-900">What They Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="text-center">
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-amber-600 fill-amber-600" />
                ))}
              </div>
              <blockquote className="serif-heading text-xl md:text-2xl text-stone-800 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </blockquote>
              <p className="text-sm text-stone-500 tracking-wide">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
