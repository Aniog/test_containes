import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { StrkImage, useStrkImages } from "@/components/ui/StrkImage";
import { InquiryForm } from "@/components/ui/InquiryForm";
import { productCategories } from "@/data/products";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

function PageHero() {
  const ref = useRef(null);
  useStrkImages(ref, []);
  return (
    <Section size="lg" tone="paper">
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <span className="eyebrow text-brand-teal">Products we source</span>
          <h1
            id="products-hero-title"
            className="mt-4 font-bold tracking-tight text-brand-navy text-4xl md:text-5xl leading-[1.08]"
          >
            Eight categories we cover well — and a long tail we can build for you
          </h1>
          <p
            id="products-hero-subtitle"
            className="mt-5 text-base md:text-lg leading-relaxed text-brand-ink-muted max-w-2xl"
          >
            We focus on categories where we have pre-qualified factories and
            deep QC experience. If your product is not listed here, ask — most
            of our work falls outside the list too.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <Button to="/contact" variant="primary" size="lg">
              Get a Free Sourcing Quote
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button to="/services" variant="outline" size="lg">
              See services
            </Button>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-brand-line bg-brand-mist">
            <StrkImage
              imgId="products-hero-s1t2u3"
              query="[products-hero-title] [products-hero-subtitle] variety of consumer products arranged on factory table"
              ratio="4x3"
              width={1200}
              alt="Variety of consumer products arranged on a factory table"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

function CategoryBlock({ category, idx }) {
  const ref = useRef(null);
  useStrkImages(ref, []);
  const flipped = idx % 2 === 1;
  return (
    <article
      id={category.id}
      ref={ref}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-12 md:py-16 border-b border-brand-line last:border-b-0 scroll-mt-header"
    >
      <div className={cn("lg:col-span-6", flipped && "lg:order-2")}>
        <div className="relative aspect-[5/4] w-full overflow-hidden rounded-2xl border border-brand-line bg-brand-mist">
          <StrkImage
            imgId={`product-${category.id}-img`}
            query={`[product-${category.id}-title] [product-${category.id}-summary] ${category.image}`}
            ratio="5x4"
            width={1200}
            alt={category.title}
          />
        </div>
      </div>
      <div className={cn("lg:col-span-6", flipped && "lg:order-1")}>
        <span className="text-xs font-semibold tracking-[0.18em] text-brand-ink-muted">
          Category {String(idx + 1).padStart(2, "0")}
        </span>
        <h2
          id={`product-${category.id}-title`}
          className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight text-brand-navy"
        >
          {category.title}
        </h2>
        <p
          id={`product-${category.id}-summary`}
          className="mt-4 text-base md:text-lg leading-relaxed text-brand-ink-muted"
        >
          {category.summary}
        </p>
        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {category.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0 text-brand-teal" />
              <span className="text-sm md:text-base text-brand-ink">{b}</span>
            </li>
          ))}
        </ul>
        <div className="mt-7">
          <Button to="/contact" variant="primary" size="md">
            Source in this category
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </article>
  );
}

function CategoryGrid() {
  return (
    <Section size="default" tone="default" containerClassName="!px-0 md:!px-0">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-10 md:mb-14">
          {productCategories.map((c) => (
            <a
              key={`nav-${c.id}`}
              href={`#${c.id}`}
              className="rounded-lg border border-brand-line bg-white px-4 py-3 text-sm font-medium text-brand-navy hover:border-brand-navy/40 hover:bg-brand-mist/40 transition-colors"
            >
              {c.title}
            </a>
          ))}
        </div>
        {productCategories.map((c, idx) => (
          <CategoryBlock key={c.id} category={c} idx={idx} />
        ))}
      </div>
    </Section>
  );
}

function RelatedServices() {
  const ref = useRef(null);
  useStrkImages(ref, []);
  return (
    <Section size="default" tone="navy">
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <SectionHeader
            eyebrow="Related services"
            title="Whatever you source, we run the same quality checks"
            description="The product changes; the workflow does not. Every category we cover follows the same six-stage process with the same deliverables and SLAs."
            invert
          />
          <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "AQL 2.5 / 1.5 / 4.0 sampling",
              "Pre-shipment + during-production inspections",
              "Compliance testing (CE, FCC, RoHS, FDA, CPNP, EN71, CPSIA)",
              "Weekly written production reports",
            ].map((r) => (
              <li
                key={r}
                className="flex items-start gap-3 rounded-xl border border-white/15 bg-white/[0.04] p-4"
              >
                <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0 text-brand-amber" />
                <span className="text-sm md:text-base text-white">{r}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-5">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/15 bg-white/5">
            <StrkImage
              imgId="products-related-v4w5x6"
              query="China factory production line quality inspection with measurement tools"
              ratio="4x3"
              width={1100}
              alt="Quality inspection on a Chinese factory production line"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

function FinalCTA() {
  return (
    <Section size="default" tone="paper">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-6">
          <SectionHeader
            eyebrow="Don't see your category?"
            title="If it is made in China, we can probably source it"
            description="The list above covers categories where we have repeat work and pre-qualified factories. Send a brief describing your product, materials, target price and order profile, and we will confirm whether we can help within one business day."
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { label: "Categories covered", value: "8 core" },
              { label: "Pre-qualified factories", value: "1,200+" },
              { label: "Buyer countries served", value: "30+" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-brand-line bg-white p-4 text-center"
              >
                <p className="text-xl md:text-2xl font-bold text-brand-navy">
                  {s.value}
                </p>
                <p className="mt-1 text-[0.7rem] uppercase tracking-[0.14em] text-brand-ink-muted">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-6">
          <InquiryForm
            eyebrow="Get a quote"
            title="Tell us what you need to source"
            description="We will reply within one business day with a written scope and flat-fee quote."
            submitLabel="Get a Free Sourcing Quote"
          />
        </div>
      </div>
    </Section>
  );
}

export default function Products() {
  return (
    <>
      <PageHero />
      <CategoryGrid />
      <RelatedServices />
      <FinalCTA />
    </>
  );
}
