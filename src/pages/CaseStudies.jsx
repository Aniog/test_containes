import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { StrkImage, useStrkImages } from "@/components/ui/StrkImage";
import { InquiryForm } from "@/components/ui/InquiryForm";
import { caseStudies } from "@/data/caseStudies";

function PageHero() {
  const ref = useRef(null);
  useStrkImages(ref, []);
  return (
    <Section size="lg" tone="paper">
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <span className="eyebrow text-brand-teal">Case studies</span>
          <h1
            id="cases-hero-title"
            className="mt-4 font-bold tracking-tight text-brand-navy text-4xl md:text-5xl leading-[1.08]"
          >
            Real projects. Real numbers. No marketing fluff.
          </h1>
          <p
            id="cases-hero-subtitle"
            className="mt-5 text-base md:text-lg leading-relaxed text-brand-ink-muted max-w-2xl"
          >
            A selection of sourcing projects we have run for buyers in the UK,
            EU, US and Australia. We share the brief, what we did, and the
            measured result.
          </p>
        </div>
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-brand-line bg-brand-mist">
            <StrkImage
              imgId="cases-hero-y7z8a9"
              query="[cases-hero-title] [cases-hero-subtitle] buyer reviewing QC inspection report with sourcing agent"
              ratio="4x3"
              width={1200}
              alt="Buyer reviewing a QC inspection report with a sourcing agent"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

function CaseCard({ cs, idx }) {
  const ref = useRef(null);
  useStrkImages(ref, []);
  const flipped = idx % 2 === 1;
  return (
    <article
      id={cs.slug}
      ref={ref}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-12 md:py-16 border-b border-brand-line last:border-b-0 scroll-mt-header"
    >
      <div className={flipped ? "lg:col-span-6 lg:order-2" : "lg:col-span-6"}>
        <div className="relative aspect-[5/4] w-full overflow-hidden rounded-2xl border border-brand-line bg-brand-mist">
          <StrkImage
            imgId={`case-${cs.slug}-img`}
            query={`[case-${cs.slug}-title] [case-${cs.slug}-industry] ${cs.image}`}
            ratio="5x4"
            width={1200}
            alt={cs.title}
          />
        </div>
      </div>
      <div className={flipped ? "lg:col-span-6 lg:order-1" : "lg:col-span-6"}>
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.14em]">
          <span
            id={`case-${cs.slug}-industry`}
            className="text-brand-teal font-semibold"
          >
            {cs.industry}
          </span>
          <span className="text-brand-ink-soft">·</span>
          <span className="text-brand-ink-muted">{cs.region}</span>
        </div>
        <h2
          id={`case-${cs.slug}-title`}
          className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight text-brand-navy leading-snug"
        >
          {cs.title}
        </h2>
        <p className="mt-4 text-base md:text-lg leading-relaxed text-brand-ink-muted">
          {cs.summary}
        </p>
        <ul className="mt-6 grid grid-cols-3 gap-3 max-w-lg">
          {cs.metrics.map((m) => (
            <li key={m.label} className="rounded-md bg-brand-mist px-3 py-3">
              <p className="text-base md:text-lg font-semibold text-brand-navy">
                {m.value}
              </p>
              <p className="text-[0.7rem] uppercase tracking-[0.12em] text-brand-ink-muted mt-0.5">
                {m.label}
              </p>
            </li>
          ))}
        </ul>
        <div className="mt-6 space-y-3">
          {cs.body.map((para, i) => (
            <p key={i} className="text-sm md:text-base text-brand-ink leading-relaxed">
              {para}
            </p>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-3 text-sm text-brand-ink-muted">
          <Quote className="h-4 w-4 flex-shrink-0 text-brand-red" />
          <span>{cs.client}</span>
        </div>
      </div>
    </article>
  );
}

function Testimonials() {
  const ref = useRef(null);
  useStrkImages(ref, []);
  const items = [
    {
      quote:
        "We had been working through a trading company and assumed that was normal. SSourcing traced the actual factory, ran an audit we could read in plain English, and saved us 14% on our next order — without a quality drop.",
      author: "Operations Lead",
      company: "Consumer electronics importer, US",
    },
    {
      quote:
        "The weekly production report is what changed everything for us. We used to find out about delays at the moment the ship was due to leave. Now we get an early warning and a recovery plan.",
      author: "Procurement Manager",
      company: "Independent cookware brand, UK",
    },
    {
      quote:
        "Their PSI caught a labelling compliance issue that would have stopped our container at Hamburg customs. The re-run was done in four days and the second shipment was clean.",
      author: "Co-founder",
      company: "Skincare startup, Germany",
    },
  ];
  return (
    <Section size="default" tone="mist">
      <div ref={ref} className="flex flex-col gap-12">
        <SectionHeader
          eyebrow="What buyers say"
          title="Three recent client voices"
          description="A small selection of the unsolicited feedback we receive after a project ships."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {items.map((t, idx) => (
            <figure
              key={idx}
              className="flex flex-col h-full rounded-2xl border border-brand-line bg-white p-6 md:p-7"
            >
              <Quote className="h-6 w-6 text-brand-red" />
              <blockquote className="mt-4 text-base leading-relaxed text-brand-ink flex-1">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-brand-line">
                <p className="text-sm font-semibold text-brand-navy">
                  {t.author}
                </p>
                <p className="text-xs text-brand-ink-muted mt-0.5">
                  {t.company}
                </p>
              </figcaption>
            </figure>
          ))}
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
            eyebrow="Your project next?"
            title="A similar outcome starts with a written scope"
            description="Send us a short brief about your product, target price and order profile. We will reply within one business day with a scope of work and a flat-fee quote."
          />
          <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Independent — no supplier commissions",
              "Bilingual project managers",
              "Photo and video evidence in every report",
              "NDAs available before any technical detail",
            ].map((row) => (
              <li key={row} className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-red flex-shrink-0" />
                <span className="text-sm md:text-base text-brand-ink">{row}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Button to="/services" variant="secondary" size="md">
              See our services
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="lg:col-span-6">
          <InquiryForm
            eyebrow="Get started"
            title="Get a Free Sourcing Quote"
            description="We will reply within one business day with a written scope."
            submitLabel="Get a Free Sourcing Quote"
          />
        </div>
      </div>
    </Section>
  );
}

export default function CaseStudies() {
  return (
    <>
      <PageHero />
      <Section size="default" tone="default" containerClassName="!px-0 md:!px-0">
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 md:mb-14">
            {caseStudies.map((cs) => (
              <a
                key={`nav-${cs.slug}`}
                href={`#${cs.slug}`}
                className="rounded-lg border border-brand-line bg-white px-4 py-3 text-sm font-medium text-brand-navy hover:border-brand-navy/40 hover:bg-brand-mist/40 transition-colors"
              >
                {cs.industry}
                <span className="block text-xs text-brand-ink-muted mt-0.5">
                  {cs.region}
                </span>
              </a>
            ))}
          </div>
          {caseStudies.map((cs, idx) => (
            <CaseCard key={cs.id} cs={cs} idx={idx} />
          ))}
        </div>
      </Section>
      <Testimonials />
      <FinalCTA />
    </>
  );
}
