import { Star } from 'lucide-react';
import testimonials from '@/data/testimonials';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 section-padding">
      <div className="max-w-[900px] mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.2em] uppercase text-velmora-gold mb-4 font-medium">
            Loved by You
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-ink tracking-wide">
            Customer Reviews
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <div key={t.name} className="text-center">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={15} className="fill-velmora-gold text-velmora-gold" />
                ))}
              </div>
              <p className="text-velmora-smoke/80 text-sm leading-relaxed italic mb-5">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="text-xs tracking-[0.12em] uppercase text-velmora-ink font-semibold">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
