import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Cog, Ruler, ShieldCheck, Layers } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { PRODUCTS } from "@/lib/products";

const FEATURED = PRODUCTS.slice(0, 3);

const VALUES = [
  {
    icon: Ruler,
    title: "Engineered precision",
    desc: "Hand-scraped beams and laser-aligned tooling deliver bend tolerances measured in tenths of a millimeter.",
  },
  {
    icon: Cog,
    title: "Servo-driven control",
    desc: "Quiet, energy-efficient drives with intuitive touchscreen programming for repeatable results.",
  },
  {
    icon: ShieldCheck,
    title: "Built to last",
    desc: "Every machine is assembled, calibrated, and life-tested in our own facility before it ships.",
  },
  {
    icon: Layers,
    title: "Versatile capacity",
    desc: "From thin gauge studio panels to 2.5mm structural plate — one platform, many materials.",
  },
];

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-end overflow-hidden bg-ink">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          data-strk-bg-id="home-hero-bg-3a8f17"
          data-strk-bg="[home-hero-eyebrow] [home-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/55" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-20 md:pb-28 pt-32 w-full">
          <p
            id="home-hero-eyebrow"
            className="text-xs uppercase tracking-[0.3em] text-accent mb-6"
          >
            Sheet Metal Folding Machines
          </p>
          <h1
            id="home-hero-title"
            className="font-serif text-paper text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] max-w-4xl"
          >
            The art of the perfect bend.
          </h1>
          <p className="mt-8 max-w-2xl text-base md:text-lg text-mist/85 leading-relaxed">
            Artitect Machinery builds elegant, precision sheet metal folders
            and double folding machines for fabricators who measure their work
            in millimeters and craftsmanship.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/products"
              className="bg-paper text-ink px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-bone transition inline-flex items-center gap-3"
            >
              Discover Machines
              <ArrowRight size={14} />
            </Link>
            <Link
              to="/contact"
              className="border border-paper/60 text-paper px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-paper hover:text-ink transition"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-20 md:py-28 lg:py-32 bg-paper">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5">
            <p
              id="home-intro-eyebrow"
              className="text-xs uppercase tracking-[0.3em] text-accent mb-5"
            >
              Studio of Precision
            </p>
            <h2
              id="home-intro-title"
              className="font-serif text-4xl md:text-5xl text-ink leading-tight"
            >
              A folding machine should feel as considered as the work it makes.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-base md:text-lg text-steel leading-relaxed">
              For more than two decades, Artitect Machinery has refined a
              single discipline: the bending of sheet metal. Our double
              folders, sheet metal folders, and metal folding machines are the
              result of an obsession with quiet operation, geometric purity,
              and the kind of long service life that turns equipment into
              heritage.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm text-ink border-b border-accent pb-1 hover:text-accent-dark hover:border-accent-dark transition"
            >
              Our philosophy
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-20 md:py-28 lg:py-32 bg-bone">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p
                id="home-featured-eyebrow"
                className="text-xs uppercase tracking-[0.3em] text-accent mb-4"
              >
                The Collection
              </p>
              <h2
                id="home-featured-title"
                className="font-serif text-4xl md:text-5xl text-ink leading-tight max-w-2xl"
              >
                Machines for fabricators who notice the details.
              </h2>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm text-ink border-b border-ink pb-1 hover:text-accent hover:border-accent transition self-start md:self-end"
            >
              View all machines
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {FEATURED.map((product) => (
              <article
                key={product.id}
                className="group bg-paper border border-mist hover:border-ink/40 transition flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden bg-mist">
                  <img
                    alt={product.name}
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[${product.descId}] [${product.titleId}] [home-featured-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-7 md:p-8 flex flex-col flex-1">
                  <p className="text-xs uppercase tracking-[0.25em] text-accent">
                    {product.category}
                  </p>
                  <h3
                    id={product.titleId}
                    className="mt-3 font-serif text-2xl md:text-3xl text-ink leading-snug"
                  >
                    {product.name}
                  </h3>
                  <p
                    id={product.descId}
                    className="mt-3 text-sm text-steel leading-relaxed flex-1"
                  >
                    {product.tagline}
                  </p>
                  <Link
                    to="/products"
                    className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ink hover:text-accent transition"
                  >
                    Specifications
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 md:py-28 bg-paper">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">
              What sets us apart
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight">
              Quiet engineering. Disciplined execution.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {VALUES.map((v) => (
              <div key={v.title} className="border-t border-ink pt-6">
                <v.icon size={22} className="text-accent" strokeWidth={1.5} />
                <h3 className="mt-5 font-serif text-2xl text-ink leading-snug">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm text-steel leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <div
          className="absolute inset-0 opacity-25"
          data-strk-bg-id="home-cta-bg-d2f88e"
          data-strk-bg="[home-cta-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-5">
              Begin a conversation
            </p>
            <h2
              id="home-cta-title"
              className="font-serif text-4xl md:text-6xl leading-tight"
            >
              Tell us about the work, and we'll specify the machine.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <p className="text-mist/80 text-base leading-relaxed mb-8 max-w-md lg:ml-auto">
              Whether you need a compact studio folder or a wide-format double
              folding machine, our engineers will help you specify the right
              configuration.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-paper text-ink px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-bone transition"
            >
              Request a Quote
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
