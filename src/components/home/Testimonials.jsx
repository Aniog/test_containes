import { Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/products";

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <Container>
        <SectionHeading
          eyebrow="In the words of our customers"
          title={
            <>
              Trusted by people who <em className="not-italic text-brass">measure</em> twice.
            </>
          }
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="bg-surface border border-border p-9 flex flex-col"
            >
              <Quote
                size={28}
                strokeWidth={1.2}
                className="text-brass"
              />
              <blockquote className="mt-6 font-serif text-xl md:text-2xl text-ink leading-snug flex-1">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-border">
                <p className="text-sm font-semibold text-ink">{t.name}</p>
                <p className="text-xs uppercase tracking-wider2 text-ink-muted mt-1">
                  {t.role}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
