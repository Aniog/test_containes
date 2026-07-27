import { Star, Quote } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const TESTIMONIALS = [
  {
    quote:
      "We used to spend 3 weeks vetting factories on Alibaba. SSourcing sent us three verified options within 48 hours and saved us roughly 14% on landed cost.",
    name: "Head of Supply Chain",
    company: "US home goods brand",
    country: "USA",
    countryId: "testimonial-usa-country",
    quoteId: "testimonial-usa-quote",
    nameId: "testimonial-usa-name",
    companyId: "testimonial-usa-company",
  },
  {
    quote:
      "Their pre-shipment inspection caught a packaging defect that would have lost us a Black Friday launch. The supplier fixed it before shipment at no cost.",
    name: "Founder & CEO",
    company: "EU cosmetics importer",
    country: "Netherlands",
    countryId: "testimonial-eu-country",
    quoteId: "testimonial-eu-quote",
    nameId: "testimonial-eu-name",
    companyId: "testimonial-eu-company",
  },
  {
    quote:
      "We needed a hardware supplier that could scale from 500 to 50,000 units. The team found two factories, audited both, and ran combined shipments while we grew.",
    name: "Operations Director",
    company: "AU outdoor retailer",
    country: "Australia",
    countryId: "testimonial-au-country",
    quoteId: "testimonial-au-quote",
    nameId: "testimonial-au-name",
    companyId: "testimonial-au-company",
  },
];

export function Testimonials() {
  return (
    <section className="section bg-white">
      <div className="container-x">
        <SectionHeader
          eyebrow="Buyer feedback"
          title="What our clients say after their first order"
          titleId="home-testimonials-title"
          description="Most of our new clients come from referrals. Here is what a few of them said after their first container landed."
          descriptionId="home-testimonials-desc"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.nameId}
              className="flex h-full flex-col gap-5 rounded-xl border border-border bg-white p-6 shadow-card"
            >
              <div className="flex items-center gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <Quote className="h-7 w-7 text-primary/15" />
              <blockquote
                id={t.quoteId}
                className="text-sm leading-relaxed text-ink"
              >
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-auto border-t border-border pt-4">
                <p id={t.nameId} className="text-sm font-semibold text-primary">
                  {t.name}
                </p>
                <p
                  id={t.companyId}
                  className="text-xs text-muted-foreground"
                >
                  {t.company}
                </p>
                <p
                  id={t.countryId}
                  className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground"
                >
                  {t.country}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
