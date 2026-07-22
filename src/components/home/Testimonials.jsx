import { Quote } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import StarRating from "@/components/ui/StarRating";
import Reveal from "@/components/ui/Reveal";
import { testimonials } from "@/data/products";

export default function Testimonials() {
  return (
    <section className="bg-ivory py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-container px-5 md:px-10 lg:px-16">
        <div className="mb-12 md:mb-16">
          <SectionTitle
            eyebrow="Loved"
            title="What Our Community Says"
            italicWord="Says"
            align="center"
          />
        </div>

        <ul className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 100} as="li">
              <figure className="flex h-full flex-col gap-5 border-t border-cream pt-8">
                <Quote
                  size={26}
                  strokeWidth={1.2}
                  className="text-gold"
                  aria-hidden="true"
                />
                <blockquote className="font-serif text-2xl font-light leading-snug text-espresso md:text-[26px]">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-auto flex items-center justify-between border-t border-cream pt-5">
                  <div>
                    <p className="text-[12px] font-medium uppercase tracking-editorial text-espresso">
                      {t.name}
                    </p>
                    <p className="mt-0.5 text-[10.5px] uppercase tracking-widest2 text-muted">
                      Verified Customer
                    </p>
                  </div>
                  <StarRating rating={t.rating} size={13} />
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
