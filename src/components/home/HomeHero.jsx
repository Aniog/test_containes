import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Wrench } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function HomeHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-stone-50"
    >
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.18]"
          data-strk-bg-id="home-hero-bg-7c2e1a"
          data-strk-bg="[home-hero-subtitle] [home-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
          style={{ backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-50 via-stone-50/70 to-stone-50" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-amber-700 font-medium">
              <Wrench className="h-3.5 w-3.5" />
              <span>Precision folding machinery</span>
            </div>

            <h1
              id="home-hero-title"
              className="mt-6 font-serif font-medium tracking-tight text-slate-900 text-5xl md:text-6xl lg:text-7xl leading-[1.05]"
            >
              The art of the fold,
              <span className="block text-amber-700 italic">
                engineered to last.
              </span>
            </h1>

            <p
              id="home-hero-subtitle"
              className="mt-6 max-w-xl text-lg text-slate-600 leading-relaxed"
            >
              ARTITECT MACHINERY designs and manufactures double folding
              machines, sheet metal folders and metal folder machines for
              workshops that take pride in every bend.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full bg-amber-600 px-7 py-3.5 text-sm font-medium text-white hover:bg-amber-700 transition-colors"
              >
                Explore the machines
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-medium text-slate-900 hover:bg-slate-100 transition-colors"
              >
                Request a quote
              </Link>
            </div>

            <dl className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-slate-500">
                  Years building
                </dt>
                <dd className="mt-2 font-serif text-3xl text-slate-900">30+</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-slate-500">
                  Countries served
                </dt>
                <dd className="mt-2 font-serif text-3xl text-slate-900">42</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-slate-500">
                  Machines shipped
                </dt>
                <dd className="mt-2 font-serif text-3xl text-slate-900">5,800</dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-6 bg-amber-600/5 rounded-3xl -z-10" />
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_30px_80px_-30px_rgba(15,23,42,0.25)]">
                <img
                  alt="Precision sheet metal folding machine on workshop floor"
                  className="w-full h-full object-cover aspect-[4/5]"
                  data-strk-img-id="home-hero-machine-3f8b2c"
                  data-strk-img="[home-hero-subtitle] [home-hero-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
