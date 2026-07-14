import { testimonials } from "@/data/products";
import StarRating from "@/components/ui/StarRating";

export default function Testimonials() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-editorial">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Loved by</p>
          <h2
            id="testimonials-title"
            className="mt-3 font-serif text-4xl leading-[1.05] text-charcoal md:text-5xl"
          >
            12,000+ women, kept in rotation.
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-3 md:gap-10">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="flex flex-col border border-mist bg-ivory p-8 transition-shadow duration-300 hover:shadow-editorial"
            >
              <StarRating value={t.rating} size={14} />
              <blockquote className="mt-6 flex-1 font-serif text-lg italic leading-relaxed text-charcoal">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3 border-t border-mist pt-5">
                <span className="inline-flex h-9 w-9 items-center justify-center bg-bone font-sans text-[12px] uppercase tracking-product text-charcoal">
                  {t.name.charAt(0)}
                </span>
                <span className="font-sans text-[12px] uppercase tracking-product text-charcoal">
                  {t.name}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
