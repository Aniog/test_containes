import { useEffect, useRef } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { findProduct, products } from "@/data/products";

const ProductDetail = () => {
  const { slug } = useParams();
  const product = findProduct(slug);
  const ref = useRef(null);

  useEffect(() => {
    if (!product) return;
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, [product]);

  if (!product) return <Navigate to="/products" replace />;

  const idx = products.findIndex((p) => p.slug === slug);
  const next = products[(idx + 1) % products.length];

  const specs = [
    { k: "Working Width", v: product.capacity },
    { k: "Sheet Capacity", v: product.thickness },
    { k: "Drive Power", v: product.power },
    { k: "Folding Accuracy", v: product.accuracy },
    { k: "Machine Weight", v: product.weight },
    { k: "Category", v: product.category },
  ];

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="bg-ink text-bone pt-32 pb-0 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-dark opacity-40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-12 md:pt-16">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest2 text-silver hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All machines
          </Link>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <p className="font-mono text-xs uppercase tracking-widest2 text-accent">
                {product.tagline}
              </p>
              <h1
                id={`${product.titleId}-detail`}
                className="mt-4 font-serif font-light text-5xl md:text-7xl leading-[1.02] tracking-tight"
              >
                {product.name}
              </h1>
              <p
                id={`${product.descId}-detail`}
                className="mt-8 text-silver text-lg leading-relaxed max-w-2xl"
              >
                {product.summary}
              </p>
            </div>
            <div className="lg:col-span-5 lg:pl-10 lg:border-l lg:border-white/10">
              <p className="text-xs uppercase tracking-widest2 text-accent">Quick spec</p>
              <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5">
                <div>
                  <dt className="text-[10px] uppercase tracking-widest2 text-silver">Width</dt>
                  <dd className="mt-1 font-serif text-2xl text-bone">{product.capacity}</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-widest2 text-silver">Capacity</dt>
                  <dd className="mt-1 font-serif text-2xl text-bone">{product.thickness}</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-widest2 text-silver">Power</dt>
                  <dd className="mt-1 font-serif text-2xl text-bone">{product.power}</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-widest2 text-silver">Accuracy</dt>
                  <dd className="mt-1 font-serif text-2xl text-bone">{product.accuracy}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="mt-16 md:mt-24 max-w-7xl mx-auto px-6 md:px-10">
          <div className="relative aspect-[16/9] bg-graphite overflow-hidden border border-white/10">
            <img
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover"
              data-strk-img-id={product.heroImgId}
              data-strk-img={`[${product.descId}-detail] [${product.titleId}-detail] industrial sheet metal folder machine`}
              data-strk-img-ratio="16x9"
              data-strk-img-width="1800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
        </div>
        <div className="h-20 md:h-28" />
      </section>

      {/* Features + Spec table */}
      <section className="bg-bone py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />
              <span className="text-xs uppercase tracking-widest2 text-accent font-medium">
                Highlights
              </span>
            </div>
            <h2 className="mt-5 font-serif text-3xl md:text-4xl text-ink leading-tight tracking-tight">
              Engineered for the operators who care about every fold.
            </h2>

            <ul className="mt-10 space-y-5">
              {product.features.map((f) => (
                <li key={f} className="flex gap-4 items-start border-b border-silver pb-5">
                  <Check className="w-5 h-5 mt-1 text-accent shrink-0" strokeWidth={2} />
                  <span className="text-ink text-[16px] leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:col-span-5">
            <div className="bg-mist border border-silver p-8 md:p-10 sticky top-28">
              <p className="text-xs uppercase tracking-widest2 text-accent">Specifications</p>
              <h3 className="mt-3 font-serif text-2xl text-ink">Technical data</h3>
              <dl className="mt-8 divide-y divide-silver">
                {specs.map((s) => (
                  <div key={s.k} className="py-4 flex items-center justify-between gap-4">
                    <dt className="text-sm text-steel">{s.k}</dt>
                    <dd className="font-mono text-sm text-ink text-right">{s.v}</dd>
                  </div>
                ))}
              </dl>
              <Link
                to="/contact"
                className="mt-8 inline-flex w-full items-center justify-center gap-3 bg-ink text-bone px-7 py-3.5 text-xs uppercase tracking-widest2 hover:bg-graphite transition-colors"
              >
                Request quote
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Next product */}
      <section className="bg-graphite text-bone">
        <Link
          to={`/products/${next.slug}`}
          className="block max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20 group"
        >
          <div className="flex items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-widest2 text-accent">Next machine</p>
              <h3 className="mt-3 font-serif text-3xl md:text-5xl text-bone group-hover:text-accentSoft transition-colors">
                {next.name}
              </h3>
              <p className="mt-2 text-silver text-sm">{next.tagline}</p>
            </div>
            <ArrowRight className="w-8 h-8 md:w-10 md:h-10 text-bone group-hover:text-accent group-hover:translate-x-2 transition-all" />
          </div>
        </Link>
      </section>
    </div>
  );
};

export default ProductDetail;
