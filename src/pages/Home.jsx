import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Ruler, Wrench, Cpu, ShieldCheck } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products, features, stats } from "@/data/catalog";

const featureIcons = {
  precision: Ruler,
  longevity: ShieldCheck,
  intuitive: Cpu,
  support: Wrench,
};

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const featured = products.slice(0, 3);

  return (
    <div ref={containerRef}>
      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-end overflow-hidden bg-neutral-900">
        <div
          className="absolute inset-0"
          data-strk-bg-id="home-hero-bg-8f2a9c"
          data-strk-bg="[home-hero-subtitle] [home-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/70 to-neutral-900/30" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pb-20 md:pb-28 pt-32 w-full">
          <div className="max-w-3xl">
            <p className="eyebrow text-amber-500 mb-6">
              Precision sheet metal folding
            </p>
            <h1
              id="home-hero-title"
              className="font-display text-5xl md:text-7xl font-light text-white leading-[1.05]"
            >
              Folds engineered
              <br />
              <span className="italic text-stone-200">to the hundredth.</span>
            </h1>
            <p
              id="home-hero-subtitle"
              className="mt-8 text-lg md:text-xl text-stone-300 max-w-2xl leading-relaxed"
            >
              Artitect Machinery designs and builds double folding machines and
              sheet metal folders for fabricators who measure quality in microns
              and equipment life in decades.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-3 bg-amber-600 text-white px-8 py-4 text-xs uppercase tracking-[0.25em] hover:bg-amber-700 transition-colors"
              >
                Explore machines
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 border border-stone-300/40 text-white px-8 py-4 text-xs uppercase tracking-[0.25em] hover:bg-white hover:text-neutral-900 transition-colors"
              >
                Talk to engineering
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-4xl md:text-5xl text-neutral-900 font-light">
                {s.value}
                <span className="text-amber-600">{s.suffix}</span>
              </div>
              <div className="eyebrow text-neutral-500 mt-3">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="eyebrow text-neutral-500 mb-5">The studio</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-neutral-900 leading-tight">
              A workshop, refined.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
              For more than three decades, our engineers have shaped a single
              category of machine: the metal folder. We design every beam,
              servo, and console with one goal — to give fabricators a tool
              they can trust on the hundredth fold of the day, and on the
              hundred-thousandth.
            </p>
            <p className="mt-6 text-base text-neutral-600 leading-relaxed">
              From manual benchtop folders to fully automated CNC folding
              systems, the Artitect range is built around a shared belief:
              precision should feel effortless.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-20 md:py-28 bg-white border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between gap-8 flex-wrap mb-14">
            <div>
              <p className="eyebrow text-neutral-500 mb-4">Featured machines</p>
              <h2 className="font-display text-4xl md:text-5xl font-light text-neutral-900">
                The Artitect range.
              </h2>
            </div>
            <Link
              to="/products"
              className="text-sm tracking-wide uppercase text-neutral-900 border-b border-neutral-900 pb-1 hover:text-amber-700 hover:border-amber-700 transition-colors"
            >
              View all machines
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featured.map((p) => (
              <article
                key={p.id}
                className="group bg-stone-50 border border-neutral-200 hover:border-neutral-900 transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden bg-neutral-200">
                  <img
                    alt={p.name}
                    data-strk-img-id={p.imgId}
                    data-strk-img={`[${p.descId}] [${p.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <p className="eyebrow text-amber-700 mb-3">{p.category}</p>
                  <h3
                    id={p.titleId}
                    className="font-display text-2xl font-normal text-neutral-900"
                  >
                    {p.name}
                  </h3>
                  <p
                    id={p.descId}
                    className="mt-3 text-sm text-neutral-600 leading-relaxed line-clamp-3"
                  >
                    {p.description}
                  </p>
                  <Link
                    to="/products"
                    className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-neutral-900 hover:text-amber-700 transition-colors"
                  >
                    Specifications
                    <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-16">
            <p className="eyebrow text-neutral-500 mb-4">Why Artitect</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-neutral-900 leading-tight">
              Built around the operator.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f) => {
              const Icon = featureIcons[f.id] || Ruler;
              return (
                <div
                  key={f.id}
                  className="bg-white border border-neutral-200 p-8 hover:border-neutral-900 transition-all duration-300"
                >
                  <Icon
                    className="w-7 h-7 text-amber-600 mb-6"
                    strokeWidth={1.25}
                  />
                  <h3 className="font-display text-xl text-neutral-900 mb-3">
                    {f.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow text-amber-500 mb-5">Specify your machine</p>
            <h2 className="font-display text-4xl md:text-5xl font-light leading-tight">
              Tell us what you fold.
              <br />
              <span className="italic text-stone-300">
                We'll engineer the rest.
              </span>
            </h2>
          </div>
          <div className="md:text-right">
            <p className="text-stone-300 text-lg leading-relaxed mb-8 md:ml-auto md:max-w-md">
              Every Artitect machine is configured with the operator and
              workpiece in mind. Share your specifications and our engineering
              team will return a tailored quote within two business days.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-amber-600 text-white px-8 py-4 text-xs uppercase tracking-[0.25em] hover:bg-amber-700 transition-colors"
            >
              Request a quote
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
