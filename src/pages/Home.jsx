import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Plus,
  Minus,
  ShieldCheck,
  Search,
  Factory,
  ClipboardCheck,
  Container,
  MessagesSquare,
  FileCheck2,
  MapPin,
  BadgeCheck,
  FileSignature,
  FlaskConical,
} from "lucide-react";

import { useStrkImages } from "@/components/layout/useStrkImages";
import SectionHeader from "@/components/sections/SectionHeader";
import InquiryForm from "@/components/sections/InquiryForm";
import {
  HERO_STATS,
  SERVICES_OVERVIEW,
  PROCESS_STEPS,
  PRODUCT_CATEGORIES,
  PROBLEMS,
  TRUST_POINTS,
  CASE_STUDIES,
  FAQ,
  COMPANY,
} from "@/data/content";

const ICONS = {
  Search,
  BadgeCheck,
  ClipboardCheck,
  Factory,
  Container,
  FileSignature,
  FlaskConical,
  ShieldCheck,
  MapPin,
  FileCheck2,
  MessagesSquare,
};

export default function Home() {
  const pageRef = useStrkImages();

  return (
    <div ref={pageRef} className="bg-white">
      <Hero />
      <Stats />
      <Services />
      <Process />
      <Products />
      <Problems />
      <Trust />
      <CaseStudies />
      <FAQSection />
      <FinalCta />
    </div>
  );
}

/* ----------------------------- Hero ----------------------------- */

function Hero() {
  const ref = useStrkImages();
  return (
    <section
      ref={ref}
      className="relative bg-navy text-white overflow-hidden"
    >
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-1f3a9c"
        data-strk-bg="[hero-eyebrow] [hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/70" />
      <div className="relative container-x py-20 md:py-28 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p id="hero-eyebrow" className="eyebrow">
              China-based sourcing agent · Est. {COMPANY.foundedYear}
            </p>
            <h1
              id="hero-title"
              className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-white text-balance"
            >
              China Sourcing Agent for Global Buyers
            </h1>
            <p
              id="hero-subtitle"
              className="mt-6 text-lg md:text-xl leading-8 text-white/80 max-w-2xl"
            >
              We help overseas importers find reliable Chinese suppliers, verify factories on the ground, run quality inspections, and ship finished goods to your port — with one English-speaking point of contact.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
              <Link to="/contact" className="btn-primary">
                Get a Free Sourcing Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/how-it-works" className="btn-secondary">
                See how it works
              </Link>
            </div>
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-white/80 max-w-2xl">
              {[
                "Replies within 24 hours, Mon–Fri",
                "No charge until you decide to work with a factory",
                "On-site audits, not just desktop checks",
                "AQL-based inspection reports",
              ].map((line) => (
                <li key={line} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-brand shrink-0" />
                  {line}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
              <img
                alt="Container ship loading at a Chinese port"
                data-strk-img-id="hero-side-img-7b21de"
                data-strk-img="[hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-72 md:h-80 object-cover"
              />
              <div className="p-5 bg-white text-ink">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">Live brief</p>
                <p className="mt-1.5 text-sm font-semibold">Skincare launch · EU market</p>
                <dl className="mt-3 grid grid-cols-3 gap-3 text-xs">
                  <div>
                    <dt className="text-ink-soft">Shortlist</dt>
                    <dd className="font-semibold text-ink">9 days</dd>
                  </div>
                  <div>
                    <dt className="text-ink-soft">Factories audited</dt>
                    <dd className="font-semibold text-ink">3</dd>
                  </div>
                  <div>
                    <dt className="text-ink-soft">First PO</dt>
                    <dd className="font-semibold text-ink">30 days</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Stats ----------------------------- */

function Stats() {
  const ref = useStrkImages();
  return (
    <section ref={ref} className="bg-white border-b border-border">
      <div className="container-x py-10 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {HERO_STATS.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <p className="text-3xl md:text-4xl font-bold text-navy tracking-tight">
                {s.value}
              </p>
              <p className="mt-1.5 text-sm text-ink-soft">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Services ---------------------------- */

function Services() {
  const ref = useStrkImages();
  return (
    <section ref={ref} className="bg-muted">
      <div className="container-x py-16 md:py-24">
        <SectionHeader
          eyebrow="What we do"
          title="End-to-end sourcing, handled in one place"
          subtitle="Six core services, one accountable team. Pick the ones you need — you do not pay for what you do not."
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES_OVERVIEW.map((svc) => {
            const Icon = ICONS[svc.icon] || Search;
            return (
              <article key={svc.title} className="card p-6 md:p-7 flex flex-col">
                <div className="icon-tile">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-lg md:text-xl font-semibold text-ink">{svc.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-soft">{svc.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-ink">
                  {svc.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-success shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <Link to="/services" className="btn-ghost">
            See the full service list
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- Process ---------------------------- */

function Process() {
  const ref = useStrkImages();
  return (
    <section ref={ref} className="bg-white">
      <div className="container-x py-16 md:py-24">
        <SectionHeader
          eyebrow="How it works"
          title="From brief to shipped goods, in six clear steps"
          subtitle="Each step has a written deliverable. You always know what we are doing, what the factory is doing, and what comes next."
        />
        <ol className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROCESS_STEPS.map((step) => (
            <li key={step.step} className="card p-6 md:p-7 relative">
              <span className="absolute top-5 right-5 text-4xl font-bold text-navy/10 leading-none">
                {step.step}
              </span>
              <div className="icon-tile-navy">
                <span className="text-sm font-bold text-navy">{step.step}</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{step.description}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 text-center">
          <Link to="/how-it-works" className="btn-outline">
            Read the full process
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Products ---------------------------- */

function Products() {
  const ref = useStrkImages();
  return (
    <section ref={ref} className="bg-muted">
      <div className="container-x py-16 md:py-24">
        <SectionHeader
          eyebrow="What we source"
          title="Products we source, across the categories importers ask about most"
          subtitle="If your product is not listed, ask us anyway. We work with a broader network than this page suggests."
        />
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {PRODUCT_CATEGORIES.map((cat, i) => (
            <Link
              key={cat.id}
              to="/products"
              className="group relative overflow-hidden rounded-lg bg-white border border-border shadow-card hover:shadow-md transition"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
                <img
                  alt={cat.label}
                  data-strk-img-id={`cat-img-${cat.id}-${i.toString().padStart(2, "0")}`}
                  data-strk-img={`[${cat.id}-label] [products-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <p id={`${cat.id}-label`} className="text-sm font-semibold text-ink group-hover:text-brand transition">
                  {cat.label}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/products" className="btn-ghost">
            See all categories and what we look for
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Problems ---------------------------- */

function Problems() {
  const ref = useStrkImages();
  return (
    <section ref={ref} className="bg-white">
      <div className="container-x py-16 md:py-24">
        <SectionHeader
          eyebrow="Problems we solve"
          title="The recurring issues importers hit when sourcing from China — and how we handle them"
          subtitle="We do not promise everything will be perfect. We do promise you will hear about problems early, with a written plan to address them."
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROBLEMS.map((p, i) => (
            <article
              key={p.title}
              className="card p-6 md:p-7 flex gap-4"
              data-problem-index={i}
            >
              <div className="icon-tile-navy shrink-0">
                <ShieldCheck className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-soft">{p.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Trust points --------------------------- */

function Trust() {
  const ref = useStrkImages();
  return (
    <section ref={ref} className="bg-navy text-white">
      <div className="container-x py-16 md:py-24">
        <SectionHeader
          eyebrow="Why importers stay with us"
          title="Built for overseas buyers who need certainty, not surprises"
          subtitle="Four things that make working with us different from a typical trading company or freelance agent."
          inverse
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {TRUST_POINTS.map((t) => {
            const Icon = ICONS[t.icon] || ShieldCheck;
            return (
              <div key={t.title} className="rounded-lg border border-white/10 bg-white/5 p-6">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-brand/15 text-brand">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{t.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/75">{t.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Case studies --------------------------- */

function CaseStudies() {
  const ref = useStrkImages();
  return (
    <section ref={ref} className="bg-muted">
      <div className="container-x py-16 md:py-24">
        <SectionHeader
          eyebrow="Case studies"
          title="Outcomes from recent client projects"
          subtitle="A few examples that show what the work actually looks like in practice. Numbers are from real engagements, anonymised where the client asked for it."
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {CASE_STUDIES.map((cs) => (
            <article key={cs.slug} className="card overflow-hidden flex flex-col">
              <div className="aspect-[4/3] w-full overflow-hidden bg-navy/5">
                <img
                  alt={`${cs.industry} sourcing case study`}
                  data-strk-img-id={`case-img-${cs.slug}`}
                  data-strk-img={`[case-title-${cs.slug}] [case-industry-${cs.slug}] [case-studies-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-xs">
                  <span className="rounded-full bg-brand/10 text-brand font-semibold px-2.5 py-1">
                    {cs.industry}
                  </span>
                  <span className="text-ink-soft">{cs.region}</span>
                </div>
                <h3 id={`case-title-${cs.slug}`} className="mt-3 text-lg font-semibold text-ink leading-snug">
                  {cs.headline}
                </h3>
                <p id={`case-industry-${cs.slug}`} className="sr-only">
                  {cs.industry} case study
                </p>
                <p className="mt-2 text-sm leading-6 text-ink-soft">{cs.summary}</p>
                <dl className="mt-4 grid grid-cols-3 gap-3 pt-4 border-t border-border">
                  {cs.outcomes.map((o) => (
                    <div key={o.label}>
                      <dt className="text-[11px] text-ink-soft uppercase tracking-wider">{o.label}</dt>
                      <dd className="text-base font-semibold text-navy">{o.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/case-studies" className="btn-outline">
            See all case studies
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- FAQ ----------------------------- */

function FAQSection() {
  const ref = useRef(null);
  useStrkImages([], [ref]);
  const [open, setOpen] = useState(0);

  return (
    <section ref={ref} className="bg-white">
      <div className="container-x py-16 md:py-24">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <SectionHeader
              align="left"
              eyebrow="FAQ"
              title="Questions importers ask before they start"
              subtitle="If your question is not here, send us a brief and we will reply within 24 hours."
            />
            <div className="mt-6 card p-5 bg-muted border-border">
              <p className="text-sm font-semibold text-ink">Still scoping your project?</p>
              <p className="mt-1.5 text-sm text-ink-soft">
                A 20-minute call usually answers the rest. We work in your time zone.
              </p>
              <Link to="/contact" className="btn-primary mt-4 w-full sm:w-auto">
                Book a call
              </Link>
            </div>
          </div>
          <div className="lg:col-span-8">
            <ul className="divide-y divide-border border border-border rounded-lg overflow-hidden bg-white">
              {FAQ.map((item, i) => {
                const isOpen = open === i;
                return (
                  <li key={item.q}>
                    <button
                      type="button"
                      className="w-full flex items-start justify-between gap-4 text-left px-5 py-5 hover:bg-muted transition"
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                    >
                      <span className="text-base font-semibold text-ink">{item.q}</span>
                      <span className="icon-tile-navy shrink-0 !h-9 !w-9">
                        {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 -mt-1 text-sm leading-7 text-ink-soft">
                        {item.a}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------- Final CTA --------------------------- */

function FinalCta() {
  const ref = useStrkImages();
  return (
    <section ref={ref} className="bg-muted">
      <div className="container-x py-16 md:py-24">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <p className="eyebrow">Get a Free Sourcing Quote</p>
            <h2 className="section-title mt-3 text-balance">
              Send us your brief. We reply within 24 hours with a shortlist and pricing.
            </h2>
            <p className="section-subtitle">
              The form takes about three minutes. The more specific you can be — product type, quantity, target market, and any compliance requirements — the faster we can match you with the right factories.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-ink">
              {[
                "No charge for the shortlist and indicative pricing",
                "One English-speaking account manager end-to-end",
                "You only commit once you pick a factory and approve a sample",
              ].map((line) => (
                <li key={line} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-success shrink-0" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7">
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
