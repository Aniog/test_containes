import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import { ArrowRight, Shield, CheckCircle, TrendingUp } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/5"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 sm:pb-20 sm:pt-24 lg:px-8 lg:pb-28 lg:pt-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border bg-white px-4 py-1.5 text-xs font-medium text-muted-foreground shadow-sm">
              <Shield className="h-3.5 w-3.5 text-primary" />
              Verified by SSourcing China
            </div>
            <h1
              id="hero-title"
              className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              China Sourcing Agent for{" "}
              <span className="text-primary">Global Buyers</span>
            </h1>
            <p
              id="hero-subtitle"
              className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground"
            >
              We help overseas buyers find reliable suppliers, verify factories,
              inspect quality, follow production, and coordinate shipping — all
              from our base in Shenzhen, China.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-lg border bg-white px-7 py-3.5 text-base font-semibold text-foreground shadow-sm transition-colors hover:bg-accent"
              >
                See How It Works
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>500+ factories vetted</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>200+ buyers served</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>98% on-time delivery</span>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative grid grid-cols-2 gap-4">
              {[
                {
                  id: "hero-img-1",
                  title: "Factory Visit",
                  desc: "On-site supplier verification",
                  ratio: "4x3",
                  width: "600",
                },
                {
                  id: "hero-img-2",
                  title: "Quality Control",
                  desc: "Product inspection in progress",
                  ratio: "4x3",
                  width: "600",
                },
                {
                  id: "hero-img-3",
                  title: "Shipping",
                  desc: "Container loading supervision",
                  ratio: "4x3",
                  width: "600",
                },
                {
                  id: "hero-img-4",
                  title: "Team",
                  desc: "Professional sourcing team",
                  ratio: "4x3",
                  width: "600",
                },
              ].map((img) => (
                <div
                  key={img.id}
                  className="overflow-hidden rounded-xl border bg-white shadow-sm"
                >
                  <img
                    data-strk-img-id={img.id}
                    data-strk-img={`[hero-img-desc-${img.id}] [hero-img-title-${img.id}] [hero-subtitle] [hero-title]`}
                    data-strk-img-ratio={img.ratio}
                    data-strk-img-width={img.width}
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={img.title}
                    className="h-full w-full object-cover"
                  />
                  <span
                    id={`hero-img-title-${img.id}`}
                    className="hidden"
                  >
                    {img.title}
                  </span>
                  <span
                    id={`hero-img-desc-${img.id}`}
                    className="hidden"
                  >
                    {img.desc}
                  </span>
                </div>
              ))}
              <div className="absolute -inset-4 rounded-2xl border-2 border-dashed border-primary/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}