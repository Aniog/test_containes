import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, Cpu, Settings2, Factory, Wrench, ShieldCheck, Ruler } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import Container from "@/components/layout/Container";
import { capabilities } from "@/data/content";
import { process } from "@/data/content";

const iconMap = {
  engineering: Ruler,
  cnc: Cpu,
  automation: Factory,
  service: ShieldCheck,
};

export default function Capabilities() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-hero-mesh text-paper-50 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-precision-grid opacity-40"
        />
        <Container className="relative pt-16 pb-20 md:pt-24 md:pb-28">
          <nav
            className="flex items-center gap-1.5 text-paper-50/60 text-xs tracking-[0.18em] uppercase mb-10"
            aria-label="Breadcrumb"
          >
            <Link to="/" className="hover:text-copper-400 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-paper-50">Capabilities</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <span className="eyebrow text-copper-400">What we do, in depth</span>
              <h1
                id="capabilities-hero-title"
                className="mt-4 font-display font-semibold text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-paper-50 text-balance"
              >
                Precision engineering, smart control, lifetime service.
              </h1>
            </div>
            <p
              id="capabilities-hero-subtitle"
              className="lg:col-span-4 text-paper-50/75 text-base md:text-lg leading-relaxed"
            >
              From initial consultation to after-sales support, ARTITECT owns
              every step of your machine's life.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-paper-50 py-20 md:py-24">
        <Container>
          <div className="space-y-6">
            {capabilities.map((cap, idx) => {
              const Icon = iconMap[cap.id] ?? Settings2;
              const reverse = idx % 2 === 1;
              return (
                <article
                  key={cap.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-paper-100 border border-ink-900/8 rounded-3xl p-8 md:p-12`}
                >
                  <div className={`lg:col-span-5 ${reverse ? "lg:order-2" : ""}`}>
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-navy-900 relative">
                      <img
                        alt={cap.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        data-strk-img-id={`capability-${cap.id}-img-2f9a31`}
                        data-strk-img={`[capability-${cap.id}-points] [capability-${cap.id}-desc] [capability-${cap.id}-title] [capabilities-hero-subtitle] [capabilities-hero-title]`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="1000"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" />
                      <div className="absolute top-5 left-5 inline-flex items-center gap-2 bg-paper-50/15 backdrop-blur-sm border border-paper-50/20 text-paper-50 text-xs font-semibold px-3 py-1.5 rounded-full">
                        <Icon className="w-3.5 h-3.5 text-copper-400" />
                        Capability {String(idx + 1).padStart(2, "0")}
                      </div>
                    </div>
                  </div>

                  <div className={`lg:col-span-7 ${reverse ? "lg:order-1" : ""}`}>
                    <h2
                      id={`capability-${cap.id}-title`}
                      className="font-display font-semibold text-3xl md:text-4xl text-ink-900 leading-tight text-balance"
                    >
                      {cap.title}
                    </h2>
                    <p
                      id={`capability-${cap.id}-desc`}
                      className="mt-5 text-ink-700 text-base md:text-lg leading-relaxed"
                    >
                      {cap.description}
                    </p>
                    <ul
                      id={`capability-${cap.id}-points`}
                      className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3"
                    >
                      {cap.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 bg-paper-50 border border-ink-900/8 rounded-xl px-4 py-3 text-sm text-ink-800"
                        >
                          <span className="mt-1 w-1.5 h-1.5 rounded-full bg-copper-500 shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-mist-100 py-20 md:py-24">
        <Container>
          <div className="max-w-3xl mb-14">
            <span className="eyebrow text-copper-600">Process</span>
            <h2
              id="cap-process-title"
              className="mt-4 font-display font-semibold text-3xl md:text-4xl text-ink-900 leading-tight text-balance"
            >
              From first call to commissioning — four steps, transparent pricing.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map((step) => (
              <div
                key={step.step}
                className="bg-paper-50 border border-ink-900/8 rounded-2xl p-7"
              >
                <span className="font-display text-4xl font-bold text-copper-200">
                  {step.step}
                </span>
                <h3
                  id={`cap-process-${step.step}-title`}
                  className="mt-4 font-display font-semibold text-lg text-ink-900"
                >
                  {step.title}
                </h3>
                <p
                  id={`cap-process-${step.step}-text`}
                  className="mt-3 text-sm text-ink-700 leading-relaxed"
                >
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper-50 py-20 md:py-24">
        <Container>
          <div className="relative rounded-3xl bg-navy-950 text-paper-50 overflow-hidden p-10 md:p-16">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-precision-grid opacity-30"
            />
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3
                  id="cap-cta-title"
                  className="font-display font-semibold text-3xl md:text-4xl leading-tight text-paper-50 text-balance"
                >
                  Discuss your application with our engineers.
                </h3>
                <p
                  id="cap-cta-subtitle"
                  className="mt-4 text-paper-50/75 leading-relaxed max-w-md"
                >
                  Tell us about your parts and we'll walk through which
                  capabilities make sense for your shop.
                </p>
              </div>
              <div className="flex md:justify-end">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-copper-500 hover:bg-copper-600 text-paper-50 px-7 py-3.5 rounded-full text-sm font-semibold transition-colors"
                >
                  Start a conversation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}