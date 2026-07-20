import { Star } from 'lucide-react';
import { testimonials } from '@/lib/data';

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28">
      <div className="text-center mb-14">
        <h2 className="serif-heading text-3xl md:text-4xl text-espresso mb-4">
          What Our Customers Say
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {testimonials.map((t) => (
          <div key={t.id} className="text-center">
            {/* Stars */}
            <div className="flex items-center justify-center gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
              ))}
            </div>

            {/* Text */}
            <p className="text-umber text-sm leading-relaxed mb-5 italic">
              &ldquo;{t.text}&rdquo;
            </p>

            {/* Name */}
            <div className="w-8 h-8 rounded-full bg-clay mx-auto mb-2 flex items-center justify-center">
              <span className="text-espresso text-xs font-medium">
                {t.name.charAt(0)}
              </span>
            </div>
            <p className="text-espresso text-xs tracking-widest uppercase font-medium">
              {t.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
