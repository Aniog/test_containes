import { testimonials } from '@/data/products';
import StarRating from '@/components/ui/StarRating';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-widest-xl text-velmora-gold mb-3">
            From Our Customers
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-espresso">
            Loved & Treasured
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-velmora-sand p-8 md:p-10 flex flex-col"
            >
              <StarRating rating={testimonial.rating} size={14} />
              <blockquote className="mt-5 font-serif text-lg md:text-xl italic text-velmora-espresso leading-relaxed flex-1">
                "{testimonial.text}"
              </blockquote>
              <div className="mt-6 pt-6 border-t border-velmora-taupe/40">
                <p className="text-sm font-medium text-velmora-espresso uppercase tracking-wider">
                  {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
