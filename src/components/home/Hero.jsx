import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import { ArrowRight, ShieldCheck, Star, Globe2 } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import strkImgConfig from "@/strk-img-config.json";

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden bg-primary text-white"
    >
      <div
        className="absolute inset-0 -z-10 opacity-25"
        data-strk-bg-id="hero-bg-7a4f12"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-primary via-primary to-primary-700"
        aria-hidden="true"
      />

      <Container>
        <div className="grid items-center gap-12 py-20 md:py-28 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              China Sourcing Agent
            </span>

            <h1
              id="hero-title"
              className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl"
            >
              China Sourcing Agent
              <br />
              for Global Buyers
            </h1>

            <p
              id="hero-subtitle"
              className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl"
            >
              We help overseas importers find reliable Chinese suppliers,
              verify factories on the ground, inspect production quality, and
              coordinate shipping — so you can focus on selling, not chasing.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                to="/contact#inquiry-form"
                variant="accent"
                size="lg"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                to="/how-it-works"
                variant="outlineLight"
                size="lg"
              >
                See How It Works
              </Button>
            </div>

            <dl className="mt-10 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-6 border-t border-white/10 pt-8 sm:grid-cols-4">
              <Stat value="10+" label="Years sourcing" />
              <Stat value="1,200+" label="Suppliers vetted" />
              <Stat value="40+" label="Countries served" />
              <Stat value="<24h" label="Reply time" />
            </dl>
          </div>

          <div className="relative lg:col-span-5">
            <div className="relative overflow-hidden rounded-lg border border-white/15 bg-white/5 shadow-card-hover">
              <img
                id="hero-image"
                alt="QC inspector checking products in a Chinese factory"
                className="aspect-[4/3] w-full object-cover"
                data-strk-img-id="hero-image-1d2c8b"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
              />
            </div>

            <div className="absolute -bottom-6 -left-4 hidden w-64 rounded-lg border border-white/15 bg-white/95 p-4 text-ink shadow-card-hover sm:block">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-100 text-accent">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm font-semibold text-primary">
                    Verified Supplier
                  </div>
                  <div className="text-xs text-muted">
                    On-site audit passed
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 top-6 hidden w-56 rounded-lg border border-white/15 bg-white/95 p-4 text-ink shadow-card-hover sm:block">
              <div className="flex items-center gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-2 text-sm font-medium text-primary">
                "Clear reports, on-time shipments, no surprises."
              </p>
              <p className="mt-1 text-xs text-muted">— Buyer, USA</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/10 py-6 text-sm text-white/70">
          <span className="inline-flex items-center gap-2">
            <Globe2 className="h-4 w-4 text-accent" />
            Buyers in 40+ countries
          </span>
          <span className="hidden h-4 w-px bg-white/20 sm:block" />
          <span>English · 中文 · Español</span>
          <span className="hidden h-4 w-px bg-white/20 sm:block" />
          <span>FOB · CIF · DDP shipping</span>
          <span className="hidden h-4 w-px bg-white/20 sm:block" />
          <span>Shenzhen · Yiwu · Ningbo · Guangzhou</span>
        </div>
      </Container>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <dt className="text-2xl font-bold text-white md:text-3xl">{value}</dt>
      <dd className="mt-1 text-xs uppercase tracking-wider text-white/60">
        {label}
      </dd>
    </div>
  );
}
