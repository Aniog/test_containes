import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, FileCheck2, Factory } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { StrkImage, useStrkImages } from "@/components/ui/StrkImage";

const trustChips = [
  { icon: ShieldCheck, label: "Independent — no supplier commissions" },
  { icon: FileCheck2, label: "AQL-based QC, 24h reports" },
  { icon: Factory, label: "On-the-ground teams in 5 provinces" },
];

export function HomeHero() {
  const containerRef = useRef(null);
  useStrkImages(containerRef, []);

  return (
    <Section
      id="home-hero"
      size="lg"
      tone="paper"
      className="relative overflow-hidden"
      containerClassName="relative"
    >
      <div
        ref={containerRef}
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
      >
        <div className="lg:col-span-6">
          <span
            id="hero-eyebrow"
            className="eyebrow text-brand-teal"
          >
            China Sourcing Agent for Global Buyers
          </span>
          <h1
            id="hero-title"
            className="mt-4 font-bold tracking-tight text-brand-navy text-[2.4rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.6rem] leading-[1.08]"
          >
            China Sourcing Agent for Global Buyers
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 text-base md:text-lg leading-relaxed text-brand-ink-muted max-w-xl"
          >
            We help overseas buyers find reliable Chinese suppliers, verify
            factories on-site, inspect quality, follow production and ship
            consolidated orders — with weekly reports and a single point of
            contact from inquiry to delivery.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button to="/contact" variant="primary" size="xl">
              Get a Free Sourcing Quote
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button to="/services" variant="outline" size="xl">
              See our services
            </Button>
          </div>

          <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
            {trustChips.map((chip) => {
              const Icon = chip.icon;
              return (
                <li
                  key={chip.label}
                  className="flex items-center gap-3 rounded-md bg-white border border-brand-line px-3.5 py-2.5"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-md bg-brand-red/10 text-brand-red">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-brand-ink">
                    {chip.label}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="lg:col-span-6">
          <div className="relative">
            <div className="relative aspect-[5/4] w-full overflow-hidden rounded-2xl border border-brand-line bg-brand-mist shadow-sm">
              <StrkImage
                imgId="home-hero-factory-a1b2c3"
                query="[hero-eyebrow] [hero-subtitle] [hero-title] China factory production floor quality inspector walking through facility"
                ratio="5x4"
                width={1400}
                alt="Quality inspector walking through a Chinese manufacturing facility"
                className="absolute inset-0 h-full w-full"
              />
            </div>

            <div className="absolute -bottom-6 left-4 sm:-left-6 max-w-[260px] bg-white rounded-xl border border-brand-line shadow-lg p-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-teal/10 text-brand-teal">
                  <FileCheck2 className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-brand-ink-muted">
                    Inspection report
                  </p>
                  <p className="text-sm font-semibold text-brand-navy">
                    Delivered in 24 hours
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -top-5 right-4 sm:-right-5 max-w-[260px] bg-white rounded-xl border border-brand-line shadow-lg p-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                  <Factory className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-brand-ink-muted">
                    Factories visited
                  </p>
                  <p className="text-sm font-semibold text-brand-navy">
                    500+ audits since 2017
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-brand-navy">9 yrs</p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-brand-ink-muted">
                On the ground
              </p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-brand-navy">500+</p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-brand-ink-muted">
                Factory audits
              </p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-brand-navy">30+</p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-brand-ink-muted">
                Buyer countries
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
