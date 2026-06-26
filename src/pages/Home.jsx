import React, { useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  ShieldCheck,
  Factory,
  Truck,
  ClipboardList,
  Quote,
} from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import InquiryForm from "@/components/ui/InquiryForm";
import ServiceCard from "@/components/home/ServiceCard";
import FaqList from "@/components/home/FaqList";
import { SERVICES, PROCESS, PROBLEMS, TRUST, CASES, FAQ } from "@/data/site";

const placeholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3C/svg%3E";

const Home = () => {
  const quoteRef = useRef(null);

  return (
    <>
      {/* Hero */}
      <section className="bg-paper-soft border-b border-line">
        <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 py-14 md:py-20">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p
              id="hero-eyebrow"
              className="inline-flex w-fit items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-ink-600 bg-white border border-line px-3 py-1.5 rounded-full"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-trust" /> China Sourcing Agent for Global Buyers
            </p>
            <h1
              id="hero-title"
              className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-ink-900"
            >
              China Sourcing Agent for Global Buyers
            </h1>
            <p
              id="hero-subtitle"
              className="mt-5 text-lg md:text-xl text-ink-700 leading-relaxed max-w-2xl"
            >
              From supplier shortlists and factory verification to quality
              inspections and shipping, we help overseas buyers source from
              China with confidence — clearly and practically.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Button as={Link} to="/contact#quote" size="lg">
                Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
              </Button>
              <Button as={Link} to="/how-it-works" variant="outline" size="lg">
                See How It Works
              </Button>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-4 max-w-xl">
              {TRUST.slice(0, 3).map((t) => (
                <div key={t.label}>
                  <dt className="text-2xl md:text-3xl font-bold text-ink-900">{t.metric}</dt>
                  <dd className="mt-1 text-xs text-ink-700 leading-snug">{t.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden border border-line bg-paper-muted shadow-card">
              <img
                alt="Sourcing manager inspecting a Chinese factory production line"
                data-strk-img-id="hero-portrait-7f3a91"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src={placeholder}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>

            <div className="hidden md:block absolute -bottom-6 -left-6 bg-white border border-line rounded-lg shadow-card p-4 w-64">
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-trust-soft text-trust">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink-900">AQL Inspection</p>
                  <p className="text-xs text-ink-700">Report within 24h</p>
                </div>
              </div>
            </div>

            <div className="hidden md:block absolute -top-5 -right-5 bg-ink-900 text-white rounded-lg shadow-card-strong p-4 w-60">
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-white/10">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Shanghai HQ</p>
                  <p className="text-xs text-ink-100/80">Inspectors in 5 regions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo strip / trust bar */}
      <section className="bg-white border-b border-line">
        <div className="container-x py-8 md:py-10 grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          {[
            "Consumer Brands",
            "Retail & Wholesale",
            "E-commerce Sellers",
            "Industrial Buyers",
          ].map((label) => (
            <div
              key={label}
              className="text-center text-xs md:text-sm uppercase tracking-[0.16em] text-ink-600"
            >
              {label}
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white">
        <div className="container-x py-16 md:py-24">
          <SectionHeading
            eyebrow="What We Do"
            title="A complete sourcing team on the ground in China"
            subtitle="Six core services, used independently or together. You pay only for what your project needs."
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="bg-paper-soft border-y border-line">
        <div className="container-x py-16 md:py-24">
          <SectionHeading
            eyebrow="Sourcing Process"
            title="A clear six-step path from inquiry to delivery"
            subtitle="Each step has a written record. You always know what is happening and what is next."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROCESS.map((step) => (
              <div
                key={step.step}
                className="relative bg-white border border-line rounded-lg p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-ink-900 text-white text-sm font-bold">
                    {step.step}
                  </span>
                  <h3 className="text-base font-semibold text-ink-900">{step.title}</h3>
                </div>
                <p className="text-sm text-ink-700 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button as={Link} to="/how-it-works" variant="outline">
              Read the full process <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-white">
        <div className="container-x py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Products We Source"
                title="Across consumer, industrial, and custom OEM"
                subtitle="If it is made in China at scale, we can source it. Here are the categories we work in most often."
              />
              <div className="mt-6 aspect-[4/3] rounded-lg overflow-hidden border border-line bg-paper-muted">
                <img
                  alt="Assorted consumer and industrial products sourced from China"
                  data-strk-img-id="products-banner-9b21fe"
                  data-strk-img="[products-heading]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src={placeholder}
                  className="w-full h-full object-cover"
                />
              </div>
              <p id="products-heading" className="sr-only">
                Across consumer, industrial, and custom OEM
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Consumer Products",
                "Home & Garden",
                "Industrial & Hardware",
                "Apparel & Textiles",
                "Packaging & Print",
                "Custom OEM / ODM",
              ].map((cat) => (
                <div
                  key={cat}
                  className="border border-line rounded-lg p-5 bg-white hover:border-ink-700 transition-colors"
                >
                  <h4 className="text-sm font-semibold text-ink-900">{cat}</h4>
                  <p className="mt-1 text-xs text-ink-700 leading-relaxed">
                    Verified factories and full sourcing support across this
                    category, including OEM development.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problems we solve */}
      <section className="bg-ink-900 text-white">
        <div className="container-x py-16 md:py-24">
          <SectionHeading
            light
            eyebrow="Problems We Solve"
            title="The risks every overseas buyer worries about"
            subtitle="Common pain points we address for first-time and experienced buyers alike."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROBLEMS.map((p, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent text-white text-xs font-bold">
                    {i + 1}
                  </span>
                  <h3 className="text-base font-semibold text-white">{p.title}</h3>
                </div>
                <p className="text-sm text-ink-100/85 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / numbers */}
      <section className="bg-white border-y border-line">
        <div className="container-x py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Why Buyers Trust Us"
                title="Practical, transparent, on-the-ground sourcing"
                subtitle="We do not promise what we cannot measure. Here are the numbers behind our work."
              />
            </div>
            <div className="lg:col-span-7 grid grid-cols-2 gap-5">
              {TRUST.map((t) => (
                <div
                  key={t.label}
                  className="border border-line rounded-lg p-6 bg-paper-soft"
                >
                  <p className="text-3xl md:text-4xl font-bold text-ink-900">{t.metric}</p>
                  <p className="mt-2 text-sm font-semibold text-ink-900">{t.label}</p>
                  <p className="mt-1 text-xs text-ink-700 leading-relaxed">{t.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="bg-paper-soft">
        <div className="container-x py-16 md:py-24">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <SectionHeading
              eyebrow="Case Studies"
              title="Selected work for buyers around the world"
              subtitle="Real projects across product categories. Names kept confidential at buyer request."
            />
            <Button as={Link} to="/case-studies" variant="outline">
              View all case studies <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {CASES.map((c) => (
              <article
                key={c.id}
                className="bg-white border border-line rounded-lg p-6 hover:border-ink-700 transition-colors"
              >
                <div className="flex items-center gap-2 text-xs">
                  <span className="px-2 py-1 bg-ink-100 text-ink-900 rounded-full font-semibold">
                    {c.industry}
                  </span>
                  <span className="text-ink-600">{c.region}</span>
                </div>
                <h3 className="mt-3 text-lg font-bold text-ink-900">{c.title}</h3>
                <p className="mt-2 text-sm text-ink-700 leading-relaxed">{c.summary}</p>
                <p className="mt-3 text-sm font-semibold text-trust">
                  <CheckCircle2 className="inline w-4 h-4 mr-1 -mt-0.5" />
                  {c.result}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quote band */}
      <section className="bg-white border-y border-line">
        <div className="container-x py-14 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <Quote className="w-7 h-7 text-accent" />
            <p className="mt-4 text-xl md:text-2xl font-medium text-ink-900 leading-snug">
              &ldquo;SSourcing China gave us a clear shortlist, ran every
              inspection we asked for, and our containers landed on time. They
              feel like an extension of our own team.&rdquo;
            </p>
            <p className="mt-4 text-sm text-ink-700">
              — Head of Sourcing, homeware brand (USA)
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="border border-line rounded-lg p-5 bg-paper-soft">
              <div className="flex items-center gap-3">
                <Factory className="w-5 h-5 text-ink-900" />
                <p className="text-sm font-semibold text-ink-900">Need suppliers?</p>
              </div>
              <p className="mt-2 text-sm text-ink-700">
                Send your product specs and we will return a shortlist within
                three working days.
              </p>
            </div>
            <div className="border border-line rounded-lg p-5 bg-paper-soft">
              <div className="flex items-center gap-3">
                <ClipboardList className="w-5 h-5 text-ink-900" />
                <p className="text-sm font-semibold text-ink-900">Already have a supplier?</p>
              </div>
              <p className="mt-2 text-sm text-ink-700">
                We can verify them, run inspections, or handle shipping only.
              </p>
            </div>
            <div className="border border-line rounded-lg p-5 bg-paper-soft">
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-ink-900" />
                <p className="text-sm font-semibold text-ink-900">Cargo already in production?</p>
              </div>
              <p className="mt-2 text-sm text-ink-700">
                Book a pre-shipment inspection to catch issues before they ship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="container-x py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="FAQ"
              title="Questions buyers ask before they start"
              subtitle="Short, practical answers. If you have a question that is not here, just send us a message."
            />
            <div className="mt-6">
              <Button as={Link} to="/contact#quote" variant="outline">
                Ask a sourcing question <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="lg:col-span-7">
            <FaqList items={FAQ} />
          </div>
        </div>
      </section>

      {/* Inquiry form */}
      <section id="quote" className="bg-paper-soft border-t border-line">
        <div className="container-x py-16 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-4xl font-bold text-ink-900">
              Start your sourcing project
            </h2>
            <p className="mt-4 text-base md:text-lg text-ink-700 leading-relaxed">
              Tell us about your product, target quantity, and destination. A
              sourcing manager will reply within one working day with a shortlist
              of factories and the next steps.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-ink-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5 text-trust" />
                No commitment. No upfront fee for the first shortlist.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5 text-trust" />
                Your inquiry goes directly to a sourcing manager, not a chatbot.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5 text-trust" />
                All communication is in clear written English.
              </li>
            </ul>
          </div>
          <div className="lg:col-span-7">
            <InquiryForm ref={quoteRef} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;