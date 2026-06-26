import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Star,
  MapPin,
} from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";
import {
  SERVICES,
  PROCESS_STEPS,
  PRODUCT_CATEGORIES,
  PROBLEMS,
  TRUST_POINTS,
  CASE_STUDIES,
  FAQS,
} from "@/lib/site-data";
import SectionHeader from "@/components/site/SectionHeader";
import InquiryForm from "@/components/site/InquiryForm";
import FaqList from "@/components/site/FaqList";
import Icon from "@/components/site/Icon";

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-9c4a2b"
          data-strk-bg="[hero-subtitle] [hero-title] container shipping port china export"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/95 to-navy-900/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-500">
                Based in Shenzhen — serving 40+ countries
              </p>
              <h1
                id="hero-title"
                className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white"
              >
                China Sourcing Agent for Global Buyers
              </h1>
              <p
                id="hero-subtitle"
                className="mt-5 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl"
              >
                We help overseas buyers find reliable suppliers, verify factories,
                inspect quality, follow production, and coordinate shipping —
                so you can import from China with confidence.
              </p>

              <ul className="mt-7 grid sm:grid-cols-2 gap-3 max-w-xl">
                {[
                  "On-site factory verification",
                  "AQL quality inspections",
                  "Transparent pricing, no hidden commission",
                  "FOB, CIF and DDP shipping",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-sm text-slate-200">
                    <CheckCircle2 className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3.5 transition shadow-sm"
                >
                  Get a Free Sourcing Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/how-it-works"
                  className="inline-flex items-center justify-center rounded-md bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-6 py-3.5 transition"
                >
                  See how it works
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-amber-500" />
                  <span>NDA on request</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-amber-500" />
                  <span>Office in Shenzhen, Guangdong</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-amber-500" />
                  <span>12+ years sourcing experience</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  alt="Factory inspection in China"
                  className="w-full h-full object-cover"
                  data-strk-img-id="hero-img-3f8b2a"
                  data-strk-img="[hero-subtitle] [hero-title] factory inspection quality control china"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-900/90 to-transparent p-5">
                  <p className="text-xs uppercase tracking-wider text-amber-500 font-semibold">On the ground</p>
                  <p className="mt-1 text-white text-sm">
                    Live factory audit in Dongguan, Guangdong
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STATS */}
      <section className="border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {TRUST_POINTS.map((t) => (
              <div key={t.label} className="text-center md:text-left">
                <p className="text-3xl md:text-4xl font-bold text-navy-700 tracking-tight">
                  {t.stat}
                </p>
                <p className="mt-1 text-sm text-slate-600">{t.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Services"
            title="Everything you need to source from China"
            description="End-to-end services from finding the right supplier to delivering inspected goods to your warehouse — handled by one local team."
            align="center"
            titleId="services-title"
            descId="services-desc"
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {SERVICES.map((s) => (
              <div
                key={s.id}
                className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md transition"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
                  <Icon name={s.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-navy-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {s.summary}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-navy-700 hover:text-navy-900 font-semibold text-sm"
            >
              See all services in detail
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SOURCING PROCESS */}
      <section className="py-16 md:py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Sourcing Process"
            title="A clear path from inquiry to delivery"
            description="We follow a structured 7-step process so you always know what is happening and what is next."
            align="center"
            titleId="process-title"
            descId="process-desc"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.n}
                className="relative rounded-xl border border-slate-200 bg-slate-50 p-6"
              >
                <span className="text-xs font-semibold tracking-widest text-amber-600">
                  STEP {step.n}
                </span>
                <h3 className="mt-2 text-base font-semibold text-navy-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS WE SOURCE */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Products We Source"
            title="Categories we know inside out"
            description="With supplier networks across Guangdong, Zhejiang and Fujian, we source across consumer and light-industrial product categories."
            titleId="products-section-title"
            descId="products-section-desc"
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCT_CATEGORIES.slice(0, 6).map((p) => (
              <article
                key={p.id}
                className="group rounded-xl overflow-hidden border border-slate-200 bg-white hover:shadow-md transition"
              >
                <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    alt={p.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-strk-img-id={p.imgId}
                    data-strk-img={`[prod-${p.id}-desc] [prod-${p.id}-title] [products-section-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                  />
                </div>
                <div className="p-5">
                  <h3
                    id={`prod-${p.id}-title`}
                    className="text-lg font-semibold text-navy-900"
                  >
                    {p.name}
                  </h3>
                  <p
                    id={`prod-${p.id}-desc`}
                    className="mt-1.5 text-sm text-slate-600 leading-relaxed"
                  >
                    {p.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 text-navy-700 hover:text-navy-900 font-semibold text-sm"
            >
              View all product categories
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PROBLEMS WE SOLVE */}
      <section className="py-16 md:py-24 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-500">
              Problems we solve
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-white">
              The risks of sourcing alone — and how we remove them
            </h2>
            <p className="mt-4 text-base md:text-lg text-slate-300 leading-relaxed">
              Most buyers can find suppliers online. What they cannot easily do
              from abroad is verify them, hold them accountable, and protect quality.
              That is exactly what we do for you on the ground.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {PROBLEMS.map((p) => (
              <div
                key={p.title}
                className="rounded-xl border border-white/10 bg-white/5 p-6"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-amber-600/20 text-amber-500">
                  <Icon name={p.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Case Studies"
            title="Selected client projects"
            description="A snapshot of recent sourcing programs we have managed for brands and retailers around the world."
            titleId="case-section-title"
            descId="case-section-desc"
          />
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {CASE_STUDIES.slice(0, 2).map((c) => (
              <article
                key={c.id}
                className="rounded-xl overflow-hidden border border-slate-200 bg-white hover:shadow-md transition"
              >
                <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                  <img
                    alt={c.title}
                    className="h-full w-full object-cover"
                    data-strk-img-id={c.imgId}
                    data-strk-img={`[${c.descId}] [${c.titleId}] [case-section-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="1000"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                  />
                </div>
                <div className="p-6 md:p-7">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="inline-flex items-center rounded-full bg-navy-50 text-navy-700 font-semibold px-2.5 py-1">
                      {c.industry}
                    </span>
                    <span className="text-slate-500">Client in {c.country}</span>
                  </div>
                  <h3
                    id={c.titleId}
                    className="mt-4 text-xl md:text-2xl font-bold text-navy-900"
                  >
                    {c.title}
                  </h3>
                  <p id={c.descId} className="mt-2 text-slate-600 leading-relaxed">
                    {c.summary}
                  </p>
                  <dl className="mt-5 grid grid-cols-3 gap-4 border-t border-slate-200 pt-5">
                    {c.metrics.map((m) => (
                      <div key={m.k}>
                        <dt className="text-xs text-slate-500">{m.k}</dt>
                        <dd className="mt-1 text-base md:text-lg font-bold text-navy-700">
                          {m.v}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-1.5 text-navy-700 hover:text-navy-900 font-semibold text-sm"
            >
              View all case studies
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-1">
              <SectionHeader
                eyebrow="FAQ"
                title="Frequently asked questions"
                description="Answers to the questions we hear most often from buyers exploring sourcing from China."
              />
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-1.5 text-navy-700 hover:text-navy-900 font-semibold text-sm"
              >
                Have another question? Talk to us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="lg:col-span-2">
              <FaqList items={FAQS} />
            </div>
          </div>
        </div>
      </section>

      {/* INQUIRY FORM */}
      <section className="py-16 md:py-24 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-2">
              <SectionHeader
                eyebrow="Get a Free Sourcing Quote"
                title="Tell us what you want to source"
                description="Share a few details about your project. A sourcing specialist will reply within 1 working day with next steps and an indicative quote."
              />
              <ul className="mt-6 space-y-3">
                {[
                  "Free initial consultation",
                  "NDA available on request",
                  "Reply within 1 working day",
                  "Vetted supplier shortlist in 5–7 days",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-3">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
