import { Container } from "@/components/ui/Container";
import { StarRating } from "@/components/ui/StarRating";
import { testimonials } from "@/data/site";

export default function Testimonials() {
  return (
    <section
      id="testimonials-section"
      className="bg-cocoa text-ivory py-20 md:py-28"
    >
      <Container>
        <div className="text-center mb-12 md:mb-16">
          <p id="testimonials-section-eyebrow" className="eyebrow !text-gold-soft">
            Loved by 12,000+
          </p>
          <h2
            id="testimonials-section-title"
            className="mt-3 font-serif text-3xl md:text-5xl font-light text-ivory"
          >
            What they say.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t, i) => (
            <figure
              key={t.id}
              className="border border-ivory/15 p-8 md:p-10 bg-ivory/[0.02] hover:bg-ivory/[0.04] transition-colors"
            >
              <StarRating value={5} showCount={false} size={14} className="[&_svg]:text-gold" />
              <blockquote className="mt-6 font-serif text-xl md:text-2xl italic text-ivory leading-snug text-balance">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-ivory/15">
                <p className="text-[11px] uppercase tracking-ui text-ivory/80">
                  {t.name}
                </p>
                <p className="mt-1 text-[12px] text-ivory/55">
                  On the {t.product}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
