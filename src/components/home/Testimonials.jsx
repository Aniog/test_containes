import { Star } from "lucide-react";
import { testimonials } from "@/data/products";

function Stars({ count = 5 }) {
  return (
    <div className="flex items-center gap-1 text-gold-300" aria-label={`${count} stars`}>
      {Array.from({ length: count }).map((_, idx) => (
        <Star
          key={idx}
          className="h-3.5 w-3.5 fill-current"
          strokeWidth={0}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      className="bg-cream-100 py-20 md:py-28"
      aria-labelledby="testimonials-title"
    >
      <div className="mx-auto max-w-editorial px-5 md:px-10 lg:px-14">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow eyebrow-gold">From Our Customers</p>
          <h2
            id="testimonials-title"
            className="mt-3 font-serif text-3xl text-ink-300 md:text-4xl"
          >
            Quietly loved, repeatedly worn
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="flex h-full flex-col justify-between border border-hairline bg-cream-50 p-7 md:p-8"
            >
              <div>
                <Stars count={t.rating} />
                <blockquote className="mt-5 font-serif text-xl leading-snug text-ink-300 md:text-[22px]">
                  <span aria-hidden>“</span>
                  {t.quote}
                  <span aria-hidden>”</span>
                </blockquote>
              </div>
              <figcaption className="mt-6 eyebrow text-ink-50">
                — {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
