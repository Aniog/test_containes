import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ShieldCheck, ClipboardCheck, Ship } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-brand-navy text-white"
    >
      {/* Background image */}
      <div
        data-strk-bg-id="hero-bg-7c2b9a"
        data-strk-bg="[hero-eyebrow] [hero-headline] [hero-subheadline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="2000"
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{
          background:
            "linear-gradient(115deg, rgba(14,42,71,0.96) 0%, rgba(14,42,71,0.85) 45%, rgba(14,42,71,0.55) 100%)",
        }}
      />
      {/* Stock image of a port / container yard underneath the gradient overlay */}
      <img
        alt=""
        data-strk-img-id="hero-port-3f1c8d"
        data-strk-img="[hero-eyebrow] [hero-headline]"
        data-strk-img-ratio="16x9"
        data-strk-img-width="2000"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
        className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity"
      />

      <div className="relative max-w-container mx-auto container-px pt-16 md:pt-24 pb-20 md:pb-28">
        <div className="max-w-3xl">
          <p
            id="hero-eyebrow"
            className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-white/80"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
            China Sourcing Agent
          </p>
          <h1
            id="hero-headline"
            className="mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.05]"
          >
            China Sourcing Agent for Global Buyers
          </h1>
          <p
            id="hero-subheadline"
            className="mt-5 text-base md:text-lg text-white/80 leading-relaxed max-w-2xl"
          >
            We help overseas buyers find reliable suppliers, verify factories,
            inspect quality, follow production, and coordinate shipping — from
            a single brief to a delivered container.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-red text-white font-semibold rounded-md px-7 py-3.5 hover:bg-brand-redDark transition-colors shadow-sm"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold rounded-md px-7 py-3.5 hover:bg-white/10 transition-colors"
            >
              See how it works
            </Link>
          </div>

          <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-white/85 max-w-2xl">
            {[
              "Reply within one business day",
              "Transparent, line-item cost sheets",
              "AQL-aligned QC inspections",
              "Bilingual team in Shanghai",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 mt-0.5 text-white/80 shrink-0" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Trust strip */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 border-t border-white/15 pt-8 max-w-4xl">
          {[
            { v: "2014", k: "Operating since" },
            { v: "1,200+", k: "Sourcing projects" },
            { v: "320+", k: "Vetted factories" },
            { v: "98%", k: "On-time PSI rate" },
          ].map((s) => (
            <div key={s.k}>
              <div className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
                {s.v}
              </div>
              <div className="text-xs md:text-sm text-white/65 mt-1">
                {s.k}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
