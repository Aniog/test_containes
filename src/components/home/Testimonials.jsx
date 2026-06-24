import { testimonials } from "@/data/products";
import RatingStars from "@/components/ui/RatingStars";

export default function Testimonials() {
  return (
    <section className="bg-bone py-20 md:py-28 border-t border-hairline">
      <div className="container-x">
        <div className="max-w-xl mb-12 md:mb-16 text-center md:text-left">
          <p className="eyebrow eyebrow-gold">Words From You</p>
          <h2 className="section-title mt-3">
            Loved, kept, <span className="section-title-italic">worn</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="reveal flex flex-col items-start"
              id={`testimonial-${t.id}`}
            >
              <RatingStars value={t.rating} size={14} />
              <blockquote className="mt-5 font-display text-[22px] md:text-[24px] leading-[1.4] text-espresso">
                <span className="font-display-italic text-gold mr-1">"</span>
                {t.body}
                <span className="font-display-italic text-gold ml-1">"</span>
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-hairline w-full">
                <p className="text-[12px] tracking-widest2 uppercase text-espresso">
                  — {t.name}
                </p>
                <p className="mt-1 text-[11px] text-muted">
                  On the {t.product}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}