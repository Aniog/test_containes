import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function Testimonials() {
  return (
    <section className="section-padding py-20 md:py-28">
      <ScrollReveal>
        <div className="text-center mb-14">
          <p className="text-[11px] tracking-[0.2em] uppercase text-taupe mb-4">Reviews</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso tracking-wider">
            What Our Customers Say
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <div key={i} className={`text-center ${i === 0 ? 'animate-stagger-1' : i === 1 ? 'animate-stagger-3' : 'animate-stagger-5'}`}>
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(t.rating)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-sm text-taupe leading-relaxed italic mb-5 font-serif">
              &ldquo;{t.text}&rdquo;
            </p>
            <p className="text-xs tracking-[0.15em] uppercase text-espresso font-medium">
              {t.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}