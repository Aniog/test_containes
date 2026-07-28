import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Clock } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import PageHero from "@/components/sections/PageHero.jsx";
import FAQ from "@/components/sections/FAQ.jsx";
import { processSteps, faqItems } from "@/data/content.js";

const deliverables = [
  {
    step: "01",
    title: "Written project brief",
    timeline: "Day 0",
    body: "We confirm the product spec, target price, quantity, and Incoterm in writing before any factory is contacted.",
  },
  {
    step: "02",
    title: "Shortlist report (3–5 factories)",
    timeline: "Day 2–3",
    body: "Each factory is presented with company background, certifications, capacity, sample pricing, lead time, and our recommendation.",
  },
  {
    step: "03",
    title: "Samples + negotiation notes",
    timeline: "Day 10–18",
    body: "Physical samples in your hands, plus a written comparison of payment terms, packaging, and any price pushback.",
  },
  {
    step: "04",
    title: "Purchase Order & deposit",
    timeline: "Day 18–22",
    body: "A clear PO with quality standards, AQL, packaging, lead time and shipping terms — signed by both sides.",
  },
  {
    step: "05",
    title: "Production & inspection reports",
    timeline: "Ongoing",
    body: "Weekly photo updates, plus DUPRO and PSI inspection reports with annotated images and pass/fail decisions.",
  },
  {
    step: "06",
    title: "Shipping documents",
    timeline: "On ship date",
    body: "Commercial invoice, packing list, certificate of origin, and any product-specific certificates — all before the vessel sails.",
  },
];

const HowItWorks = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    let frame;
    if (containerRef.current) {
      frame = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
    }
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="A clear, written process — from your inquiry to delivered cargo"
        subtitle="No mystery. No waiting. Every step has a written deliverable and a clear approval point. Below is the exact path a typical first order takes through our team."
        primaryCta={{ to: "/contact", label: "Start with a Free Sourcing Quote" }}
        secondaryCta={{ to: "/services", label: "See all services" }}
      />

      <section ref={containerRef} className="bg-white">
        <div className="container-page section-pad">
          <div className="max-w-3xl">
            <p className="eyebrow">The six-step path</p>
            <h2
              id="how-title"
              className="mt-3 text-3xl md:text-4xl font-bold text-ink-900 tracking-tight"
            >
              What happens, in what order, and what you receive each step
            </h2>
            <p
              id="how-sub"
              className="mt-4 text-lg text-ink-700 leading-relaxed"
            >
              Use this as a reference during your project. You will receive
              each of these documents in your inbox as we go.
            </p>
          </div>

          <ol className="mt-12 space-y-8">
            {processSteps.map((step, i) => (
              <li
                key={step.n}
                className="grid grid-cols-1 gap-6 rounded-2xl border border-ink-200 bg-white p-6 md:p-8 lg:grid-cols-12 lg:gap-10"
              >
                <div className="lg:col-span-2">
                  <div className="text-5xl font-bold text-ink-200 leading-none">
                    {step.n}
                  </div>
                  <div className="mt-2 text-xs font-semibold uppercase tracking-widest text-brand-600">
                    Step {step.n}
                  </div>
                </div>
                <div className="lg:col-span-7">
                  <h3
                    id={`how-${step.n}-title`}
                    className="text-xl md:text-2xl font-semibold text-ink-900"
                  >
                    {step.title}
                  </h3>
                  <p
                    id={`how-${step.n}-body`}
                    className="mt-3 text-base text-ink-700 leading-relaxed"
                  >
                    {step.body}
                  </p>
                </div>
                <div className="lg:col-span-3">
                  <div className="rounded-lg border border-ink-200 bg-ink-50 p-4">
                    <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-ink-500">
                      <Clock className="h-3.5 w-3.5" />
                      Typical timing
                    </div>
                    <p className="mt-1.5 text-sm font-semibold text-ink-900">
                      {deliverables[i]?.timeline}
                    </p>
                  </div>
                  <div className="mt-3 rounded-lg border border-ink-200 bg-white p-4">
                    <div className="text-xs font-semibold uppercase tracking-widest text-ink-500">
                      You receive
                    </div>
                    <p className="mt-1.5 text-sm text-ink-700 leading-relaxed">
                      {deliverables[i]?.title}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-ink-50 border-y border-ink-200">
        <div className="container-page section-pad">
          <div className="max-w-3xl">
            <p className="eyebrow">Working with us</p>
            <h2
              id="how-work-title"
              className="mt-3 text-3xl md:text-4xl font-bold text-ink-900 tracking-tight"
            >
              Three things we do that most sourcing agents don't
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              {
                title: "We send the bad news first",
                body: "If a shipment is going to be late or a sample is below standard, you hear from us before the factory has a chance to spin it. We do not hide problems to keep the relationship smooth.",
              },
              {
                title: "We show you the factory, not the showroom",
                body: "Our audits visit the actual production line, not the polished front office. We photograph license, equipment, and workforce — and we tell you when the working conditions are not what you would want.",
              },
              {
                title: "We never mark up the factory's price",
                body: "You pay the factory directly for goods. We invoice our service fee separately, in line, so you can see every dollar going to where it should go.",
              },
            ].map((it) => (
              <div key={it.title} className="card p-6">
                <CheckCircle2 className="h-5 w-5 text-success-600" />
                <h3
                  id={`how-work-${it.title.replace(/\s+/g, "-").toLowerCase()}`}
                  className="mt-3 text-lg font-semibold text-ink-900"
                >
                  {it.title}
                </h3>
                <p className="mt-2 text-sm text-ink-700 leading-relaxed">
                  {it.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-page section-pad">
          <FAQ items={faqItems.slice(0, 6)} title="Common questions about the process" eyebrow="FAQ" />
          <div className="mt-12 text-center">
            <Link to="/contact" className="btn-primary">
              Get a Free Sourcing Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
