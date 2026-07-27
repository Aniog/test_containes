import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import {
  ShieldCheck,
  BadgeCheck,
  Languages,
  FileSearch,
  Lock,
  Clock,
} from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";
import SectionHeader from "@/components/shared/SectionHeader";

const POINTS = [
  {
    icon: BadgeCheck,
    title: "Pre-vetted supplier network",
    desc: "Every factory in our shortlist is on-site verified. We re-audit high-risk suppliers every 12 months.",
  },
  {
    icon: ShieldCheck,
    title: "Independent QC, not the factory QC",
    desc: "Our inspectors are SSourcing employees, not subcontracted by the factory. Reports go straight to you.",
  },
  {
    icon: FileSearch,
    title: "Transparent costing",
    desc: "We itemize unit price, tooling, packaging, certificates, freight and duty so you see the real landed cost.",
  },
  {
    icon: Languages,
    title: "Native Chinese, native English",
    desc: "Our agents speak fluent English and live in China. No phone tag, no lost-in-translation RFQs.",
  },
  {
    icon: Lock,
    title: "NDA and IP protection",
    desc: "We sign NDAs before sharing your product details and control who sees your designs inside the factory.",
  },
  {
    icon: Clock,
    title: "24-hour response SLA",
    desc: "Quote requests, factory questions, status updates — we respond within one business day, every time.",
  },
];

export function TrustPoints() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} id="trust" className="section bg-white">
      <div className="container-x">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Why SSourcing"
              title="A sourcing partner you can actually audit"
              titleId="home-trust-title"
              description="We are not a marketplace. We are a Shanghai-based agent team that works on your side of the table, with one accountable point of contact for every order."
              descriptionId="home-trust-desc"
            />

            <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-muted">
              <img
                alt="SSourcing team meeting with a Chinese factory manager"
                data-strk-img-id="home-trust-team-2a8b9c"
                data-strk-img="[home-trust-desc] [home-trust-title] [home-trust-eyebrow]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="h-72 w-full object-cover"
              />
            </div>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {POINTS.map((p) => {
              const Icon = p.icon;
              return (
                <li
                  key={p.title}
                  className="rounded-xl border border-border bg-white p-5 shadow-card"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/5 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-primary">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    {p.desc}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default TrustPoints;
