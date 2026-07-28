import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, CheckCircle2 } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const HomeHero = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    if (!containerRef.current) return undefined;
    const frame = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden border-b border-ink-200 bg-white"
    >
      <div className="container-page grid grid-cols-1 gap-12 py-14 md:py-20 lg:grid-cols-12 lg:gap-16 lg:py-24">
        <div className="lg:col-span-6">
          <p className="eyebrow">China Sourcing Agent</p>
          <h1
            id="hero-headline"
            className="mt-4 text-4xl font-bold tracking-tight text-ink-900 leading-[1.05] md:text-5xl lg:text-6xl"
          >
            China Sourcing Agent for Global Buyers
          </h1>
          <p
            id="hero-subline"
            className="mt-5 max-w-xl text-lg text-ink-700 leading-relaxed"
          >
            We help overseas buyers find reliable Chinese suppliers, verify
            factories, inspect quality, follow production and coordinate
            shipping — so you can source from China with confidence, not
            guesswork.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/contact" className="btn-primary">
              Get a Free Sourcing Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/how-it-works" className="btn-secondary">
              See How It Works
            </Link>
          </div>

          <ul className="mt-8 grid grid-cols-1 gap-3 text-sm text-ink-700 sm:grid-cols-2">
            {[
              "12+ years on the ground in China",
              "English-speaking project managers",
              "Ningbo & Yiwu sourcing hubs",
              "No markup on factory prices",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success-600" />
                <span>{t}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex items-center gap-2 text-xs text-ink-500">
            <MapPin className="h-3.5 w-3.5" />
            <span>
              Headquartered in Ningbo · Sourcing teams in Yiwu, Shenzhen,
              Guangzhou, Foshan and Hangzhou
            </span>
          </div>
        </div>

        <div className="relative lg:col-span-6">
          <div className="relative overflow-hidden rounded-2xl border border-ink-200 bg-ink-100 shadow-card-hover">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              data-strk-img-id="hero-port-7b3f2a"
              data-strk-img="[hero-headline] [hero-subline] China container shipping port aerial cranes"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1200"
              alt="Container port in China at golden hour"
              loading="eager"
              className="block aspect-[4/3] h-full w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-6 left-6 right-6 grid grid-cols-3 gap-3 rounded-xl border border-ink-200 bg-white p-4 shadow-card-hover md:left-10 md:right-10">
            {[
              { v: "1,200+", l: "Audits done" },
              { v: "60+", l: "Countries served" },
              { v: "98%", l: "On-time shipping" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-xl font-bold text-ink-900 md:text-2xl">
                  {s.v}
                </div>
                <div className="text-[11px] uppercase tracking-wider text-ink-500">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;

