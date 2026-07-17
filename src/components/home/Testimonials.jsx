import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-stone-lighter">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-[11px] tracking-[0.25em] uppercase text-taupe mb-4 font-medium">
            Loved by You
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl font-light tracking-wide">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-[1000px] mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="text-center">
              <div className="flex items-center justify-center gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, idx) => (
                  <Star key={idx} size={13} fill="#C7A55B" stroke="#C7A55B" strokeWidth={1} />
                ))}
              </div>
              <p className="text-espresso/80 leading-relaxed mb-5 text-sm italic font-serif">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="text-[11px] tracking-[0.15em] uppercase text-taupe font-medium">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
