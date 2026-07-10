import { testimonials } from "@/data/products";

function StarRow() {
  return (
    <div className="flex items-center gap-1 text-gold-500" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <span key={i} className="text-base leading-none">★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-editorial">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="eyebrow mb-4">Loved by our community</div>
          <h2 className="font-serif text-4xl md:text-5xl text-ink leading-[1.1] text-balance">
            What our wearers say.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="bg-surface border border-hairline p-8 md:p-10 flex flex-col"
            >
              <StarRow />
              <blockquote className="mt-6 font-serif text-lg md:text-xl text-ink leading-relaxed text-pretty flex-1">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-hairline flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gold-100 text-gold-700 flex items-center justify-center font-serif text-base">
                  {t.name.charAt(0)}
                </div>
                <div className="text-[11px] uppercase tracking-widest2 text-taupe">
                  {t.name} · Verified
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
