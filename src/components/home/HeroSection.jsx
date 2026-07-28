import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const trustBadges = [
  "No factory ownership — we work for you",
  "Bilingual project managers",
  "Transparent quotes & reporting",
];

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            China Sourcing Agent for Global Buyers
          </p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
            Source from China with clarity and control.
          </h1>
          <p className="mt-5 text-lg text-slate-600 md:text-xl">
            We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping — end to end.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="min-w-[200px]">
              <Link to="/contact?quote=true">Get a Free Sourcing Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="min-w-[160px]">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
          <ul className="mt-8 space-y-2">
            {trustBadges.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                <CheckCircle className="h-4 w-4 text-amber-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div ref={containerRef} className="relative">
          <img
            data-strk-img-id="hero-factory-overview-8f2a9c"
            data-strk-img="[hero-subtitle] [hero-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Factory production line in China"
            className="rounded-2xl border border-slate-200 shadow-lg"
          />
          <p id="hero-title" className="sr-only">
            China Sourcing Agent for Global Buyers
          </p>
          <p id="hero-subtitle" className="sr-only">
            Reliable supplier verification, quality control, and shipping coordination
          </p>
        </div>
      </div>
    </section>
  );
}
