import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import { ArrowUpRight } from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";
import Eyebrow from "../site/Eyebrow";
import Section from "../site/Section";
import { products } from "@/lib/site-data";

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <Section id="products" tone="default" ref={null}>
      <div ref={containerRef}>
        {/* Section header */}
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-14 md:mb-20">
          <div className="lg:col-span-7">
            <Eyebrow>The product range</Eyebrow>
            <h2
              id="products-headline"
              className="mt-5 font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground leading-[1.08]"
            >
              Seven machines.
              <br />
              One standard of precision.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p
              id="products-sub"
              className="text-base md:text-lg text-muted-foreground leading-relaxed"
            >
              Whether you need a compact metal folder for a boutique shop or a
              6-metre automated bending cell, the ARTITECT range scales with the
              same control platform, the same forged geometry and the same
              service commitment.
            </p>
          </div>
        </div>

        {/* Product grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {products.map((p, idx) => (
            <ProductCard key={p.id} product={p} featured={idx === 0} />
          ))}
        </div>
      </div>
    </Section>
  );
}

function ProductCard({ product, featured }) {
  return (
    <article
      className={
        "group relative flex flex-col rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-primary/40 hover:-translate-y-0.5 " +
        (featured ? "md:col-span-2 lg:col-span-2 lg:row-span-1" : "")
      }
    >
      {/* Image */}
      <div
        className={
          "relative overflow-hidden bg-muted " +
          (featured ? "aspect-[16/9]" : "aspect-[4/3]")
        }
      >
        <img
          alt={product.title}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] [products-sub] [products-headline] ${product.imgQuery}`}
          data-strk-img-ratio={featured ? "16x9" : "4x3"}
          data-strk-img-width={featured ? "1200" : "800"}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/15 via-transparent to-transparent" />

        {/* Floating eyebrow tag */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center rounded-full bg-background/90 backdrop-blur px-3 py-1.5 text-[10px] font-mono tracking-[0.18em] uppercase text-foreground">
            {product.eyebrow}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 flex flex-col p-7 md:p-8">
        <h3
          id={product.titleId}
          className="font-display text-xl md:text-2xl font-semibold text-foreground leading-snug"
        >
          {product.title}
        </h3>

        <p
          id={product.descId}
          className="mt-3 text-sm md:text-[15px] text-muted-foreground leading-relaxed"
        >
          {product.summary}
        </p>

        {/* Spec strip */}
        <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-5">
          {product.specs.map((s) => (
            <div key={s.k} className="flex flex-col gap-0.5">
              <dt className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
                {s.k}
              </dt>
              <dd className="text-sm font-medium text-foreground">{s.v}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary">
          <span>View specifications</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </article>
  );
}