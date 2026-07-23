import { Quote } from "lucide-react";
import { testimonials } from "@/data/products";
import Container from "@/components/ui/Container";
import StarRating from "@/components/ui/StarRating";

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-24 bg-ivory">
      <Container>
        <div className="text-center mb-14">
          <p className="eyebrow mb-4">From Our Community</p>
          <h2 id="testimonials-title" className="font-serif text-4xl sm:text-5xl text-espresso font-light">
            What they say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="flex flex-col text-center md:text-left bg-ivory-50 border border-line/60 p-8 lg:p-10"
            >
              <Quote size={20} strokeWidth={1.5} className="text-gold mb-5 mx-auto md:mx-0" />
              <p className="font-serif text-lg sm:text-xl leading-relaxed text-espresso font-light flex-1">
                "{t.text}"
              </p>
              <div className="mt-6 pt-6 border-t border-line">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                  <StarRating value={t.rating} size={13} />
                </div>
                <p className="text-[12px] uppercase tracking-widest font-medium text-espresso">
                  {t.name}
                </p>
                <p className="text-[11px] uppercase tracking-widest text-taupe mt-0.5">
                  {t.location}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
