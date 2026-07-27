import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Section, SectionHeader, Bullet } from "../components/ui/Primitives.jsx";
import InquiryForm from "../components/ui/InquiryForm.jsx";
import CTABanner from "../components/sections/CTABanner.jsx";
import { services, processSteps } from "../data/site.js";
import { iconMap } from "../data/icons.js";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "../strk-img-config.json";

export default function Services() {
  const heroRef = useRef(null);

  useEffect(() => {
    if (!strkImgConfig || Object.keys(strkImgConfig).length === 0) return;
    return ImageHelper.loadImages(strkImgConfig, heroRef.current);
  }, []);

  return (
    <>
      <section ref={heroRef} className="bg-navy text-white">
        <div className="container-content py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <p className="kicker text-accent mb-3">Services</p>
              <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
                Sourcing services built for serious buyers
              </h1>
              <p className="mt-5 text-lg text-white/80 max-w-2xl">
                From the first supplier shortlist to the final container landing at your
                warehouse, we cover the steps that are hard to do well from outside China.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary">
                  Get a Free Sourcing Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/how-it-works" className="btn-secondary-light">
                  See the workflow
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-lg overflow-hidden border border-white/10">
                <img
                  alt="Sourcing agent reviewing a supplier sample on a factory floor"
                  data-strk-img-id="services-hero-img-d4e5f6"
                  data-strk-img="[services-hero-title] [services-hero-subtitle]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 id="services-hero-title" className="sr-only">Sourcing services</h2>
              <p id="services-hero-subtitle" className="sr-only">
                We cover the full journey from supplier shortlist to delivery
              </p>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <SectionHeader
          kicker="Full service list"
          title="Eight core services, with the option to bundle"
          subtitle="You can hire us for a single step (a factory audit, an inspection) or for the full project. There is no minimum commitment."
        />
        <div className="space-y-5">
          {services.map((s) => {
            const Icon = iconMap[s.icon] || iconMap.Briefcase;
            return (
              <article
                key={s.slug}
                id={s.slug}
                className="card card-hover grid grid-cols-1 lg:grid-cols-12 gap-6 scroll-mt-24"
              >
                <div className="lg:col-span-3">
                  <div className="w-12 h-12 rounded-md bg-navy text-white flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-navy font-semibold text-lg leading-snug">{s.title}</h3>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-ink/80 leading-relaxed">{s.summary}</p>
                  <ul className="mt-4 space-y-2 text-sm">
                    {s.bullets.map((b, i) => (
                      <Bullet key={i}>{b}</Bullet>
                    ))}
                  </ul>
                </div>
                <div className="lg:col-span-4 rounded-md bg-steel p-5 border border-hairline">
                  <div className="text-xs uppercase tracking-widest text-muted font-semibold">
                    Typical deliverable
                  </div>
                  <p className="mt-2 text-sm text-ink/80">
                    A written report with photos, scorecards, and clear pass/fail outcomes —
                    shared with you within 48 hours of completion.
                  </p>
                  <Link
                    to="/contact"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-accent"
                  >
                    Request this service <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      <Section className="surface-steel">
        <SectionHeader
          kicker="How it fits together"
          title="The services combine into a 5-step workflow"
          subtitle="Each service above is a stage of one connected project. The full process is documented in our 'How it works' page."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {processSteps.map((step) => (
            <div key={step.step} className="rounded-lg border border-hairline bg-white p-5">
              <div className="text-accent font-bold text-sm mb-2">Step {step.step}</div>
              <h3 className="text-navy font-semibold text-base">{step.title}</h3>
              <p className="mt-2 text-sm text-ink/75 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/how-it-works" className="btn-secondary-dark">
            See the full workflow
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>

      <Section id="inquiry">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <SectionHeader
              kicker="Get a quote"
              title="Tell us which services you need"
              subtitle="We'll send a written scope and a clear fee structure within 1 business day."
            />
            <ul className="mt-6 space-y-3 text-sm text-ink/80">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-accent flex-shrink-0" strokeWidth={2.5} />
                <span>Fixed, written scope — no open-ended billing</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-accent flex-shrink-0" strokeWidth={2.5} />
                <span>You only pay for the services you actually use</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-accent flex-shrink-0" strokeWidth={2.5} />
                <span>Cancel any single service without affecting the rest</span>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-7">
            <InquiryForm />
          </div>
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
