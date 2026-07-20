import { Star } from 'lucide-react';
import { TESTIMONIALS } from '@/data/reviews';
import { useReveal } from '@/hooks/useReveal';

function Stars({ count = 5 }) {
  return (
    <div className="flex">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" strokeWidth={0} />
      ))}
    </div>
  );
}

function Testimonial({ t }) {
  return (
    <figure className="flex h-full flex-col border border-sand bg-bone p-7 sm:p-8">
      <Stars />
      <blockquote className="mt-5 flex-1 font-serif text-xl italic leading-snug text-espresso sm:text-2xl">
        “{t.body}”
      </blockquote>
      <figcaption className="mt-6 border-t border-sand pt-5">
        <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-espresso">
          {t.name}
        </div>
        <div className="mt-1 text-[11px] text-mink">on the {t.product}</div>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  const headerRef = useReveal();
  return (
    <section className="bg-bone py-20 md:py-28">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
        <div ref={headerRef} className="mx-auto max-w-2xl text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-gold-deep">
            The verdict
          </p>
          <h2 className="mt-3 font-serif text-4xl font-light tracking-tight text-espresso sm:text-5xl">
            What they're saying
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {TESTIMONIALS.map((t) => (
            <Testimonial key={t.id} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
