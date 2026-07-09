import { testimonials } from '@/data/products';

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4">
      {[1, 2, 3, 4, 5].map(s => (
        <svg key={s} className="w-3 h-3 text-gold" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-cream border-t border-stone/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-gold mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-espresso">
            What They're Saying
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map(t => (
            <div key={t.id} className="flex flex-col">
              <Stars />
              <blockquote className="font-serif text-lg md:text-xl font-light text-espresso leading-relaxed mb-5 flex-1">
                "{t.text}"
              </blockquote>
              <p className="font-sans text-xs uppercase tracking-[0.15em] text-stone">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
