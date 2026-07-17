import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-site">
        <div className="text-center mb-14">
          <span className="text-[11px] uppercase tracking-[0.25em] text-stone font-medium">Real Reviews</span>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mt-3 font-light">Loved by Thousands</h2>
          <div className="w-12 h-[1px] bg-gold/40 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-warm-white p-8 border border-stone/5 hover:shadow-sm transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-5">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <svg
                    key={s}
                    className="w-4 h-4 text-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-stone text-sm leading-relaxed italic">&ldquo;{t.text}&rdquo;</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                  <span className="text-xs font-serif text-gold">{t.name.charAt(0)}</span>
                </div>
                <span className="text-xs uppercase tracking-widest font-medium text-charcoal">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}