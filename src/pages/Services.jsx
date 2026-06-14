import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useStrkImages } from "@/components/layout/useStrkImages";
import SectionHeader from "@/components/sections/SectionHeader";
import InquiryForm from "@/components/sections/InquiryForm";
import { SERVICES_DETAIL, SERVICES_OVERVIEW } from "@/data/content";
import * as Icons from "lucide-react";

export default function Services() {
  const ref = useStrkImages();
  return (
    <div ref={ref} className="bg-white">
      <PageHero
        eyebrow="Services"
        title="A complete B2B sourcing service, from supplier search to delivery"
        subtitle="Pick the services you need. Most importers start with sourcing and verification, then add inspection and shipping as they grow."
        image="[services-title]"
        imageRatio="21x9"
        imageWidth="1600"
        imageId="services-hero-12ab34"
      />
      <ServiceGrid />
      <Pricing />
      <Cta />
    </div>
  );
}

function PageHero({ eyebrow, title, subtitle, image, imageRatio, imageWidth, imageId }) {
  const ref = useStrkImages();
  return (
    <section ref={ref} className="relative bg-navy text-white">
      <div
        className="absolute inset-0"
        data-strk-bg-id={`${imageId}-bg`}
        data-strk-bg={image}
        data-strk-bg-ratio={imageRatio}
        data-strk-bg-width={imageWidth}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/85 via-navy/80 to-navy" />
      <div className="relative container-x py-20 md:py-24">
        <div className="max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 id={`${eyebrow.toLowerCase()}-title`} className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-white text-balance">
            {title}
          </h1>
          <p className="mt-5 text-lg text-white/80 max-w-2xl">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}

function ServiceGrid() {
  return (
    <section className="bg-white">
      <div className="container-x py-16 md:py-24">
        <SectionHeader
          eyebrow="Full service list"
          title="Eight services, billed only when you use them"
          subtitle="We do not bundle services into a fixed package. You choose what you need; we quote it clearly before we start."
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
          {SERVICES_DETAIL.map((svc) => {
            const Icon = Icons[svc.icon] || Icons.Search;
            return (
              <article key={svc.id} className="card p-6 md:p-7 flex flex-col">
                <div className="flex items-start gap-4">
                  <div className="icon-tile">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold text-ink">{svc.title}</h3>
                    <p className="mt-1.5 text-sm leading-6 text-ink-soft">{svc.summary}</p>
                  </div>
                </div>
                <ul className="mt-5 pt-5 border-t border-border space-y-2.5 text-sm text-ink">
                  {svc.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-success shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="bg-muted">
      <div className="container-x py-16 md:py-24">
        <SectionHeader
          eyebrow="How fees work"
          title="Transparent pricing, itemised per service"
          subtitle="Three categories of cost. You see each one as its own line on the quote — no bundled mark-ups."
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="card p-6 md:p-7">
            <p className="eyebrow">1 · Sourcing fee</p>
            <h3 className="mt-3 text-lg font-semibold text-ink">Per project</h3>
            <p className="mt-2 text-sm leading-6 text-ink-soft">
              Flat fee for supplier search, capability review, and quotation comparison. Quoted up front. Refunded if we cannot find a viable factory.
            </p>
          </div>
          <div className="card p-6 md:p-7">
            <p className="eyebrow">2 · Verification & QC</p>
            <h3 className="mt-3 text-lg font-semibold text-ink">Per visit</h3>
            <p className="mt-2 text-sm leading-6 text-ink-soft">
              Billed per on-site visit — factory audit, sampling, DUPRO, or pre-shipment inspection. Each visit produces a written, photo-rich report.
            </p>
          </div>
          <div className="card p-6 md:p-7">
            <p className="eyebrow">3 · Goods & freight</p>
            <h3 className="mt-3 text-lg font-semibold text-ink">At cost</h3>
            <p className="mt-2 text-sm leading-6 text-ink-soft">
              Factory unit price and freight charged at cost. We invoice the same amount the factory or carrier bills us — no spread, no mark-up.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className="bg-white">
      <div className="container-x py-16 md:py-24">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <p className="eyebrow">Start a project</p>
            <h2 className="section-title mt-3 text-balance">
              Tell us what you want to source. We will reply with a shortlist.
            </h2>
            <p className="section-subtitle">
              Most projects are scoped within 3–5 working days. There is no cost to receive the shortlist and indicative pricing.
            </p>
            <Link to="/how-it-works" className="btn-ghost mt-4">
              See the full process
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="lg:col-span-7">
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
