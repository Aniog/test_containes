import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="section-padding bg-stone-50">
      <div className="container-padding">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="serif-heading text-3xl md:text-4xl text-stone-800 mb-3">What Our Customers Say</h2>
          <div className="w-12 h-px bg-primary mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(testimonial => (
            <div
              key={testimonial.id}
              className="bg-white p-6 md:p-8 rounded shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-stone-600 leading-relaxed mb-6 italic serif-heading text-lg">
                "{testimonial.text}"
              </p>
              <p className="text-sm font-medium text-stone-800">{testimonial.name}</p>
              <p className="text-xs text-stone-400 mt-0.5">Verified Customer</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
