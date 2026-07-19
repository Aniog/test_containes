import { testimonials } from "@/data/products";

function Stars({ count = 5 }) {
  return (
    <div className="inline-flex items-center gap-0.5" aria-label={`${count} stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 12 12"
          className="h-3 w-3 text-gold-400"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M6 .8l1.6 3.4 3.7.4-2.8 2.5.8 3.6L6 8.9 2.7 10.7l.8-3.6L.7 4.6l3.7-.4L6 .8z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-cream-100 py-20 md:py-28">
      <div className="container-wide">
        <div className="max-w-xl mb-12 md:mb-16 text-center md:text-left">
          <p className="eyebrow">What They're Saying</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl text-espresso-300 leading-[1.05] tracking-tight">
            Five stars, on the regular.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="bg-cream-50 border border-hairline/60 p-8 md:p-10 flex flex-col"
            >
              <Stars />
              <blockquote className="mt-5 font-serif text-xl md:text-2xl text-espresso-300 leading-snug">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-hairline/60 font-sans text-[11px] uppercase tracking-widest2 text-muted">
                — {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
