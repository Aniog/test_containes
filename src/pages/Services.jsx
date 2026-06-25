import { useRef } from "react";
import {
  Search,
  Building2,
  ClipboardCheck,
  TrendingUp,
  Ship,
  DraftingCompass,
  CheckCircle2,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { StrkImage, useStrkImages } from "@/components/ui/StrkImage";
import { InquiryForm } from "@/components/ui/InquiryForm";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const iconMap = {
  Search,
  Building2,
  ClipboardCheck,
  TrendingUp,
  Ship,
  DraftingCompass,
};

function PageHero() {
  const ref = useRef(null);
  useStrkImages(ref, []);
  return (
    <Section size="lg" tone="paper" className="relative overflow-hidden">
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <span className="eyebrow text-brand-teal">Our services</span>
          <h1
            id="services-hero-title"
            className="mt-4 font-bold tracking-tight text-brand-navy text-4xl md:text-5xl leading-[1.08]"
          >
            Six services. One accountable partner.
          </h1>
          <p
            id="services-hero-subtitle"
            className="mt-5 text-base md:text-lg leading-relaxed text-brand-ink-muted max-w-2xl"
          >
            Pick the stage where you need help, or hand us the whole journey.
            Every service is delivered by a named project manager with weekly
            written reporting, photo evidence and a clear scope of work.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <Button to="/contact" variant="primary" size="lg">
              Get a Free Sourcing Quote
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button to="/how-it-works" variant="outline" size="lg">
              See the full process
            </Button>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-brand-line bg-brand-mist">
            <StrkImage
              imgId="services-hero-m4n5o6"
              query="[services-hero-title] [services-hero-subtitle] quality inspection factory production line checking samples"
              ratio="4x3"
              width={1200}
              alt="Quality inspection on a Chinese factory production line"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

function ServiceDetail({ service, idx }) {
  const ref = useRef(null);
  useStrkImages(ref, []);
  const Icon = iconMap[service.icon] || Search;
  const flipped = idx % 2 === 1;
  return (
    <article
      id={service.slug}
      ref={ref}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-12 md:py-16 border-b border-brand-line last:border-b-0 scroll-mt-header"
    >
      <div className={cn("lg:col-span-6", flipped && "lg:order-2")}>
        <div className="relative aspect-[5/4] w-full overflow-hidden rounded-2xl border border-brand-line bg-brand-mist">
          <StrkImage
            imgId={`service-${service.slug}-img`}
            query={`[service-${service.slug}-title] [service-${service.slug}-desc] ${service.image}`}
            ratio="5x4"
            width={1200}
            alt={service.title}
          />
        </div>
      </div>
      <div className={cn("lg:col-span-6", flipped && "lg:order-1")}>
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-md bg-brand-red/10 text-brand-red">
            <Icon className="h-5 w-5" strokeWidth={1.75} />
          </span>
          <span className="text-xs font-semibold tracking-[0.16em] text-brand-ink-muted">
            Service {String(idx + 1).padStart(2, "0")}
          </span>
        </div>
        <h2
          id={`service-${service.slug}-title`}
          className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight text-brand-navy"
        >
          {service.title}
        </h2>
        <p
          id={`service-${service.slug}-desc`}
          className="mt-4 text-base md:text-lg leading-relaxed text-brand-ink-muted"
        >
          {service.description}
        </p>
        <ul className="mt-6 space-y-3">
          {service.deliverables.map((d) => (
            <li key={d} className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0 text-brand-teal" />
              <span className="text-sm md:text-base text-brand-ink">{d}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Button to="/contact" variant="primary" size="md">
            Request this service
          </Button>
          <Button to="/how-it-works" variant="ghost" size="md">
            How we deliver it →
          </Button>
        </div>
      </div>
    </article>
  );
}

function ServiceGroups() {
  return (
    <Section size="default" tone="navy">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-6">
          <SectionHeader
            eyebrow="Service packages"
            title="Four ways to engage us, depending on where you are in the journey"
            description="If you are not sure which package fits, send a brief and we will recommend one."
            invert
          />
        </div>
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { title: "Find", body: "Supplier shortlist and sample round." },
            { title: "Verify", body: "On-site factory audit, written report." },
            { title: "Produce", body: "Production follow-up and QC inspections." },
            { title: "Ship", body: "Freight booking and export paperwork." },
          ].map((g) => (
            <div
              key={g.title}
              className="rounded-xl border border-white/15 bg-white/[0.04] p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-amber">
                {g.title}
              </p>
              <p className="mt-2 text-base font-semibold text-white">{g.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function PricingNote() {
  return (
    <Section size="default" tone="paper">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7">
          <SectionHeader
            eyebrow="Engagement & pricing"
            title="Flat fees by scope, not by commission"
            description="Our only revenue is your service fee. We do not mark up product pricing and we do not take commissions from factories. The numbers below are typical ranges — your quote will be in writing before any work begins."
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                title: "Supplier sourcing project",
                body: "Flat fee per project. Includes shortlist of 3–5 factories, quotation comparison and recommendation. Sample coordination billed at cost.",
              },
              {
                title: "Factory verification",
                body: "Per-visit fee, fixed scope. Includes on-site walk, license check, written audit report with photos and pass/conditional/fail verdict.",
              },
              {
                title: "Quality inspections",
                body: "Per-inspection fee, quoted against SKU count, lot size and AQL level. Reports delivered within 24 hours of the visit.",
              },
              {
                title: "Production follow-up",
                body: "Monthly retainer or per-milestone fee. Includes weekly written reports, photo evidence and escalation handling.",
              },
              {
                title: "Shipping coordination",
                body: "Per-shipment fee on FCL / LCL / air / rail. Optional add-on for export documentation and customs paperwork support.",
              },
              {
                title: "Sampling & development",
                body: "Per-sample fees plus prototype iteration rounds. Tooling and mould coordination quoted case by case.",
              },
            ].map((row) => (
              <div
                key={row.title}
                className="rounded-xl border border-brand-line bg-white p-5"
              >
                <p className="text-base font-semibold text-brand-navy">
                  {row.title}
                </p>
                <p className="mt-1.5 text-sm text-brand-ink-muted leading-relaxed">
                  {row.body}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5">
          <InquiryForm
            eyebrow="Get a quote"
            title="Request a written quote"
            description="Tell us which services you need and we will respond with a scope and flat-fee quote within one business day."
            submitLabel="Request a written quote"
          />
        </div>
      </div>
    </Section>
  );
}

export default function Services() {
  return (
    <>
      <PageHero />
      <Section size="default" tone="default" containerClassName="!px-0 md:!px-0">
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8 lg:px-10">
          {services.map((service, idx) => (
            <ServiceDetail key={service.id} service={service} idx={idx} />
          ))}
        </div>
      </Section>
      <ServiceGroups />
      <PricingNote />
    </>
  );
}
