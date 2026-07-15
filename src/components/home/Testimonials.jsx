import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/products';

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-14">
          <h2 className="font-serif text-2xl md:text-3xl tracking-wider uppercase text-brand-charcoal">
            What They Say
          </h2>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {testimonials.map((t) => (
            <div key={t.id} className="text-center relative">
              <Quote className="w-8 h-8 text-brand-sand/60 mx-auto mb-4" />
              <div className="flex items-center justify-center gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <p className="font-serif text-base md:text-lg text-brand-charcoal leading-relaxed italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-6">
                <div className="w-6 h-px bg-brand-gold mx-auto mb-4" />
                <p className="font-sans text-[11px] tracking-super-wide uppercase text-brand-warm-gray">
                  {t.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
