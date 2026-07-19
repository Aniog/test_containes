import { testimonials } from "@/data/products";
import { Stars } from "@/components/ui/Stars";

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">
            Kind Words
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">
            Loved by Thousands
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="bg-cream border border-sand p-8 md:p-10 flex flex-col items-center text-center"
            >
              <Stars rating={5} size={16} />
              <blockquote className="mt-5 font-serif text-xl md:text-2xl text-ink italic leading-relaxed">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-6 text-[11px] uppercase tracking-[0.2em] text-taupe">
                {t.name}
              </figcaption>
              <p className="mt-1 text-xs text-gold">{t.product}</p>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
