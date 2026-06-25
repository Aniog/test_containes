import { useEffect, useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const TRUST_POINTS = [
  "Based in China, with team members in Yiwu, Shenzhen and Guangzhou",
  "10+ years of combined sourcing and QC experience",
  "Supplier network of 850+ pre-vetted factories",
  "Bilingual contracts and clear, fixed service pricing",
  "AQL-based inspections aligned with ISO 2859",
  "Reference customers across the US, EU, UK, and Australia",
];

export default function TrustPoints() {
  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-bg" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-line bg-surface shadow-sm">
              <img
                alt="China sourcing team in office reviewing supplier quotations"
                className="w-full h-auto object-cover aspect-[4/3]"
                data-strk-img-id="trust-team-img-5e9b2c"
                data-strk-img="[trust-title] [trust-description]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden md:block w-44 rounded-2xl bg-brand text-white p-5 shadow-lg">
              <p className="text-3xl font-semibold">98%</p>
              <p className="mt-1 text-xs text-white/80 leading-snug">
                On-time shipment rate across 2024 orders
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Why Buyers Trust Us
            </p>
            <h2
              id="trust-title"
              className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-ink"
            >
              A local team that actually goes to the factory
            </h2>
            <p
              id="trust-description"
              className="mt-4 text-base leading-relaxed text-muted"
            >
              We are a sourcing agency, not a marketplace. Every supplier we recommend has
              been visited in person, and every order is followed by a real human until the
              container leaves the port.
            </p>

            <ul className="mt-7 grid gap-3">
              {TRUST_POINTS.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-verified/10 text-verified">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                  <span className="text-sm leading-relaxed text-ink">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
