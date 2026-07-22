import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/products";

function Stars({ n = 5 }) {
  return (
    <div className="flex gap-0.5 text-gold" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} strokeWidth={0} fill="currentColor" className="w-3.5 h-3.5" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-ivory py-20 md:py-28 border-y border-line/70">
      <div className="max-w-8xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16 max-w-xl mx-auto">
          <p className="eyebrow text-gold-deep mb-3">From our community</p>
          <h2 className="display-md text-ink">Loved by 12,000+ women</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.id}
              className="bg-cream border border-line/70 p-7 md:p-8 flex flex-col"
            >
              <Stars n={t.rating} />
              <blockquote className="mt-5 font-serif text-[19px] md:text-[20px] leading-snug text-ink flex-1">
                <span aria-hidden="true" className="text-gold text-3xl leading-none mr-1 align-top">“</span>
                {t.text}
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-line/70 text-[11px] uppercase tracking-wider-3 font-sans font-medium text-ink">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
