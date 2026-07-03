import { testimonials } from "@/data/products";
import StarRating from "@/components/ui/StarRating";

export default function Testimonials() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-editorial px-5 md:px-10">
        <div className="mb-12 text-center">
          <p className="font-sans text-[11px] uppercase tracking-widest3 text-gold">Loved By Thousands</p>
          <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">What Our Customers Say</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3 md:gap-6">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col items-center border border-hairline bg-cream px-8 py-10 text-center"
            >
              <StarRating rating={t.rating} size={16} />
              <blockquote className="mt-5 flex-1 font-serif text-lg italic leading-relaxed text-ink">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-6 font-sans text-[11px] uppercase tracking-widest2 text-stone">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
