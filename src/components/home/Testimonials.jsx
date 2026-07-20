import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-velmora-blush">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <p className="section-subhead mb-3">Reviews</p>
          <h2 className="section-heading">From Our Clients</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="text-center px-4"
            >
              <div className="flex items-center justify-center gap-0.5 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill="#B8860B"
                    stroke="#B8860B"
                    strokeWidth={1}
                  />
                ))}
              </div>
              <blockquote className="font-serif text-base md:text-lg text-velmora-espresso italic leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <p className="mt-5 font-sans text-xs text-velmora-taupe tracking-[0.15em] uppercase">
                {t.name} {t.initial}.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
