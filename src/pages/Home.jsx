import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import {
  ArrowRight,
  Search,
  Building2,
  ClipboardCheck,
  LineChart,
  Ship,
  FlaskConical,
  CheckCircle2,
  Quote,
  ShieldCheck,
  FileCheck2,
  Clock4,
  BadgeCheck,
  Globe2,
  MapPin,
  Star,
} from "lucide-react";
import Section, { SectionHeader } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import IconBadge from "@/components/ui/IconBadge";
import InquiryForm from "@/components/sections/InquiryForm";
import FAQ from "@/components/sections/FAQ";
import {
  SERVICES,
  PROCESS_STEPS,
  PRODUCT_CATEGORIES,
  TRUST_POINTS,
  PROBLEMS,
  CASE_STUDIES,
  STATS,
  SITE,
} from "@/data/site";

const ICONS = {
  Search,
  Building2,
  ClipboardCheck,
  LineChart,
  Ship,
  FlaskConical,
  ShieldCheck,
  FileCheck2,
  Clock4,
  BadgeCheck,
  MapPin,
  Globe2,
};

export default function Home() {
  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* HERO */}
      <section
        id="home-hero"
        className="relative overflow-hidden bg-brand-700 text-white"
      >
        <div
          aria-hidden="true"
          data-strk-bg-id="home-hero-bg"
          data-strk-bg="[home-hero-title] [home-hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="absolute inset-0 bg-gradient-to-br from-brand-700 via-brand-700 to-brand-900 opacity-95"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 0%, rgba(255,255,255,0.4), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <p
                id="home-hero-eyebrow"
                className="text-sm font-semibold uppercase tracking-wider text-brand-200"
              >
                China Sourcing Agent · Established 2014
              </p>
              <h1
                id="home-hero-title"
                className="mt-3 text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight"
              >
                China Sourcing Agent for Global Buyers
              </h1>
              <p
                id="home-hero-subtitle"
                className="mt-5 text-lg md:text-xl text-brand-100 max-w-2xl leading-relaxed"
              >
                We help overseas buyers find reliable Chinese suppliers, verify
                factories on the ground, inspect production quality, and ship
                finished goods to your door — all in plain English.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Button as="link" to="/contact" size="lg" variant="accent" icon={ArrowRight}>
                  Get a Free Sourcing Quote
                </Button>
                <Button as="link" to="/how-it-works" size="lg" variant="outlineLight">
                  See How It Works
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-brand-100">
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-400" />
                  1 business day response
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-400" />
                  No commissions from factories
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-400" />
                  English throughout
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-lg border border-white/15 bg-white/10 backdrop-blur p-6 md:p-7 shadow-2xl">
                <div className="flex items-center justify-between text-xs uppercase tracking-wider text-brand-100">
                  <span>Sample inquiry</span>
                  <span>Replies in ~1 day</span>
                </div>
                <div className="mt-4 space-y-3 text-[15px]">
                  <div className="rounded-md bg-white/10 px-3.5 py-2.5">
                    <span className="text-brand-200 text-xs uppercase tracking-wider">Product</span>
                    <p className="mt-0.5">Stainless steel cookware set, 10 pcs</p>
                  </div>
                  <div className="rounded-md bg-white/10 px-3.5 py-2.5">
                    <span className="text-brand-200 text-xs uppercase tracking-wider">Quantity</span>
                    <p className="mt-0.5">2,000 sets / first order · USA destination</p>
                  </div>
                  <div className="rounded-md bg-white/10 px-3.5 py-2.5">
                    <span className="text-brand-200 text-xs uppercase tracking-wider">Target</span>
                    <p className="mt-0.5">FOB $14–16 / set · FDA-compliant · 30 days</p>
                  </div>
                </div>
                <div className="mt-5 border-t border-white/15 pt-4 text-sm text-brand-100">
                  <span className="font-semibold text-white">We respond with:</span>{" "}
                  3–5 pre-vetted factories, itemised quotes, MOQ & lead time, and a
                  recommended next step.
                </div>
                <Link
                  to="/contact"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-md bg-accent-500 hover:bg-accent-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors"
                >
                  Start your inquiry
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <Section bg="dark" className="!py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {STATS.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <p className="text-3xl md:text-4xl font-bold text-white">{s.value}</p>
              <p className="mt-1 text-sm text-ink-300">{s.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SERVICES */}
      <Section bg="white" id="home-services">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="Our services"
              title="Six services that cover the full China sourcing journey"
              description="Whether you need a single inspection or a full end-to-end partner, we scale to your project. Pick what you need today; add more as you grow."
            />
          </div>
          <div className="lg:col-span-5 flex lg:items-end">
            <Button as="link" to="/services" variant="secondary" icon={ArrowRight}>
              See all services
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((svc) => {
            const Icon = ICONS[svc.icon] || Search;
            return (
              <article
                key={svc.id}
                className="group rounded-lg border border-ink-200 bg-white p-6 hover:border-brand-300 hover:shadow-card transition-all"
              >
                <IconBadge icon={Icon} tone="brand" />
                <h3 className="mt-4 text-lg font-bold text-ink-900">{svc.title}</h3>
                <p className="mt-2 text-[15px] text-ink-600 leading-relaxed">{svc.summary}</p>
                <ul className="mt-4 space-y-2">
                  {svc.points.map((p, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-ink-700">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-brand-600 shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services"
                  className="mt-5 inline-flex items-center text-sm font-semibold text-brand-700 hover:text-brand-800"
                >
                  Learn more
                  <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </article>
            );
          })}
        </div>
      </Section>

      {/* SOURCING PROCESS */}
      <Section bg="ink" id="home-process">
        <SectionHeader
          align="center"
          eyebrow="Sourcing process"
          title="A clear five-step process from inquiry to delivery"
          description="No black boxes. You see every step, every report, every decision."
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.n}
              className="relative rounded-lg bg-white p-6 border border-ink-200"
            >
              <div className="text-sm font-bold text-brand-600">{step.n}</div>
              <h3 className="mt-2 text-base font-bold text-ink-900">{step.title}</h3>
              <p className="mt-2 text-sm text-ink-600 leading-relaxed">{step.desc}</p>
              {idx < PROCESS_STEPS.length - 1 && (
                <ArrowRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-ink-300" />
              )}
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button as="link" to="/how-it-works" variant="primary" icon={ArrowRight}>
            Read the full process
          </Button>
        </div>
      </Section>

      {/* PRODUCTS WE SOURCE */}
      <Section bg="white" id="home-products">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-10">
          <div className="lg:col-span-6">
            <SectionHeader
              eyebrow="Products we source"
              title="Eight product categories we work with every week"
              description="If your product is not listed, ask us anyway — chances are we already have a vetted supplier."
            />
          </div>
          <div className="lg:col-span-6 lg:pt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PRODUCT_CATEGORIES.slice(0, 4).map((cat) => (
                <div
                  key={cat.name}
                  className="rounded-md border border-ink-200 bg-white p-4"
                >
                  <h4 className="text-sm font-bold text-ink-900">{cat.name}</h4>
                  <ul className="mt-1.5 space-y-1 text-xs text-ink-600">
                    {cat.items.slice(0, 2).map((i) => (
                      <li key={i}>· {i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {PRODUCT_CATEGORIES.slice(4).map((cat) => (
            <div
              key={cat.name}
              className="rounded-md border border-ink-200 bg-white p-4"
            >
              <h4 className="text-sm font-bold text-ink-900">{cat.name}</h4>
              <ul className="mt-1.5 space-y-1 text-xs text-ink-600">
                {cat.items.slice(0, 2).map((i) => (
                  <li key={i}>· {i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button as="link" to="/products" variant="secondary" icon={ArrowRight}>
            Browse all product categories
          </Button>
        </div>
      </Section>

      {/* PROBLEMS WE SOLVE */}
      <Section bg="brandSoft" id="home-problems">
        <SectionHeader
          align="center"
          eyebrow="Problems we solve"
          title="What goes wrong without a sourcing partner — and how we fix it"
          description="These are the issues we hear about most often from new buyers. Each one is solvable with the right checks in place."
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROBLEMS.map((p, i) => (
            <div key={i} className="rounded-lg bg-white p-6 border border-brand-100">
              <div className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                Without us
              </div>
              <p className="mt-1.5 text-[15px] text-ink-700 line-through decoration-ink-300">
                {p.before}
              </p>
              <div className="my-4 h-px bg-ink-100" />
              <div className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                With SSourcing China
              </div>
              <p className="mt-1.5 text-[15px] text-ink-900 font-medium">{p.after}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* TRUST POINTS */}
      <Section bg="white" id="home-trust">
        <SectionHeader
          align="center"
          eyebrow="Why buyers choose us"
          title="Trust, transparency, and English-first communication"
          description="Six concrete reasons clients keep coming back — and refer us to other buyers."
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TRUST_POINTS.map((t) => {
            const Icon = ICONS[t.icon] || ShieldCheck;
            return (
              <div
                key={t.title}
                className="rounded-lg border border-ink-200 bg-white p-6"
              >
                <IconBadge icon={Icon} tone="brand" />
                <h3 className="mt-4 text-base font-bold text-ink-900">{t.title}</h3>
                <p className="mt-2 text-[15px] text-ink-600 leading-relaxed">{t.desc}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* CASE STUDIES */}
      <Section bg="ink" id="home-cases">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-10">
          <div className="lg:col-span-7">
            <SectionHeader
              light
              eyebrow="Case studies"
              title="Selected projects across industries and regions"
              description="A snapshot of recent buyer engagements. Full case studies available on request under NDA."
            />
          </div>
          <div className="lg:col-span-5 flex lg:items-end">
            <Button as="link" to="/case-studies" variant="secondary" icon={ArrowRight}>
              See all case studies
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CASE_STUDIES.slice(0, 3).map((cs) => (
            <article
              key={cs.id}
              className="rounded-lg bg-white border border-ink-200 p-6 hover:border-brand-300 transition-colors"
            >
              <div className="flex items-center gap-2 text-xs">
                <span className="rounded-full bg-brand-50 px-2.5 py-1 font-semibold text-brand-700">
                  {cs.industry}
                </span>
                <span className="rounded-full bg-ink-100 px-2.5 py-1 font-semibold text-ink-700">
                  {cs.region}
                </span>
              </div>
              <p className="mt-4 text-[15px] text-ink-700 leading-relaxed">{cs.summary}</p>
              <div className="mt-4 pt-4 border-t border-ink-100">
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                  Result
                </p>
                <p className="mt-1 text-sm font-semibold text-ink-900">{cs.result}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* TESTIMONIAL */}
      <Section bg="white">
        <div className="mx-auto max-w-3xl text-center">
          <Quote className="mx-auto h-10 w-10 text-brand-200" />
          <blockquote className="mt-6 text-xl md:text-2xl text-ink-900 leading-relaxed font-medium">
            “They flagged two issues in our pre-shipment inspection we would never
            have caught from the UK. Saved us a £40k return. We now use them on
            every order.”
          </blockquote>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-brand-700 font-bold">
              JM
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-ink-900">James M.</p>
              <p className="text-xs text-ink-500">Buyer, UK home goods importer</p>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-center gap-0.5 text-accent-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <FAQ />

      {/* FINAL CTA / INQUIRY */}
      <Section bg="brand" id="home-cta">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="text-white">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-200">
              Ready to start?
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold leading-tight text-white">
              Tell us what you need. We will reply within one business day.
            </h2>
            <p className="mt-4 text-brand-100 text-base md:text-lg leading-relaxed">
              Send a short description of the product, your target quantity, and
              where you want it shipped. A sourcing manager will respond with
              initial thoughts and the next step.
            </p>
            <ul className="mt-6 space-y-2 text-brand-100 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent-400" /> No obligation, no
                payment up front
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent-400" /> English throughout
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent-400" /> NDA available on
                request
              </li>
            </ul>
            <div className="mt-6 text-sm text-brand-100">
              <p>
                <span className="font-semibold text-white">Prefer email?</span>{" "}
                <a
                  href={`mailto:${SITE.email}`}
                  className="underline hover:text-white"
                >
                  {SITE.email}
                </a>
              </p>
              <p className="mt-1">
                <span className="font-semibold text-white">WeChat:</span>{" "}
                {SITE.wechat}
              </p>
            </div>
          </div>
          <InquiryForm compact />
        </div>
      </Section>
    </div>
  );
}
