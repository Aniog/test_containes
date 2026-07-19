import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 lg:py-28">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-xs text-gold tracking-widest uppercase mb-3 font-sans">
            Loved by You
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-espresso tracking-wide">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 max-w-4xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.id} className="text-center">
              <div className="flex items-center justify-center gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-sm text-taupe leading-relaxed italic mb-4">
                "{t.text}"
              </p>
              <p className="text-xs font-medium text-espresso tracking-wide">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}