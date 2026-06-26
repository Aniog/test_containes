import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import Container from "@/components/layout/Container";
import { productCategories } from "@/data/products";

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      <PageHeader />

      <section className="bg-paper-50 py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {productCategories.map((product, idx) => (
              <ProductCard key={product.id} product={product} index={idx} />
            ))}
          </div>
        </Container>
      </section>

      <CompareSection />

      <CTABanner />
    </div>
  );
}

function PageHeader() {
  return (
    <section className="bg-hero-mesh text-paper-50 relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-precision-grid opacity-40"
      />
      <Container className="relative pt-16 pb-20 md:pt-24 md:pb-28">
        <nav
          className="flex items-center gap-1.5 text-paper-50/60 text-xs tracking-[0.18em] uppercase mb-10"
          aria-label="Breadcrumb"
        >
          <Link to="/" className="hover:text-copper-400 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-paper-50">Products</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <span className="eyebrow text-copper-400">Complete product family</span>
            <h1
              id="products-hero-title"
              className="mt-4 font-display font-semibold text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-paper-50 text-balance"
            >
              Seven product lines, one obsession with precision.
            </h1>
          </div>
          <p
            id="products-hero-subtitle"
            className="lg:col-span-4 text-paper-50/75 text-base md:text-lg leading-relaxed"
          >
            Whether you need a compact workshop folder or a fully automated
            bending cell, every ARTITECT machine shares the same engineering DNA.
          </p>
        </div>
      </Container>
    </section>
  );
}

function ProductCard({ product, index }) {
  return (
    <Link
      to={`/products/${product.id}`}
      className="group relative overflow-hidden rounded-3xl bg-paper-50 border border-ink-900/8 hover-lift"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-navy-900">
        <img
          alt={product.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          data-strk-img-id={`product-list-${product.id}-${index}a-77e21f`}
          data-strk-img={`[${product.id}-desc] [${product.id}-title] [products-hero-subtitle] [products-hero-title]`}
          data-strk-img-ratio="16x10"
          data-strk-img-width="1200"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/30 to-transparent" />
        <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-paper-50/15 backdrop-blur-sm border border-paper-50/20 text-paper-50 text-xs font-medium px-3 py-1.5 rounded-full">
          {product.name}
        </div>
      </div>

      <div className="p-7 md:p-8">
        <div className="flex items-baseline justify-between gap-4">
          <h2
            id={`${product.id}-title`}
            className="font-display font-semibold text-2xl text-ink-900 group-hover:text-copper-600 transition-colors"
          >
            {product.title}
          </h2>
          <span className="font-display text-xs font-semibold tracking-[0.18em] uppercase text-copper-600">
            Line {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <p
          id={`${product.id}-desc`}
          className="mt-3 text-ink-700 text-sm md:text-base leading-relaxed"
        >
          {product.description}
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3">
          {product.specs.slice(0, 4).map((spec) => (
            <div key={spec.label} className="bg-paper-100 rounded-xl px-4 py-3">
              <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-ink-500">
                {spec.label}
              </p>
              <p className="mt-1 font-display font-semibold text-ink-900 text-sm">
                {spec.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 inline-flex items-center gap-2 text-copper-600 font-semibold text-sm">
          Read full specification
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}

function CompareSection() {
  const rows = [
    { label: "Sheet length", values: ["1.25 m", "6 m", "8 m"] },
    { label: "Mild steel", values: ["1.0 mm", "3.0 mm", "8.0 mm"] },
    { label: "Industries", values: ["Workshops", "HVAC", "Shipbuilding"] },
    { label: "Automation", values: ["Manual", "Optional", "Full cell"] },
  ];

  return (
    <section className="bg-mist-100 py-24 md:py-28">
      <Container>
        <div className="max-w-3xl mb-14">
          <span className="eyebrow text-copper-600">Compare at a glance</span>
          <h2
            id="compare-title"
            className="mt-4 font-display font-semibold text-3xl md:text-4xl text-ink-900 leading-tight text-balance"
          >
            From the smallest workshop folder to the largest fabrication cell.
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-[640px] w-full bg-paper-50 border border-ink-900/8 rounded-2xl overflow-hidden">
            <thead className="bg-paper-100">
              <tr>
                <th className="text-left px-6 py-4 text-xs font-semibold tracking-[0.18em] uppercase text-ink-500">
                  Specification
                </th>
                <th className="text-left px-6 py-4 font-display font-semibold text-ink-900">
                  Workshop
                </th>
                <th className="text-left px-6 py-4 font-display font-semibold text-ink-900">
                  Production
                </th>
                <th className="text-left px-6 py-4 font-display font-semibold text-ink-900">
                  Heavy Industry
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, r) => (
                <tr key={row.label} className={r % 2 ? "bg-paper-50" : "bg-paper-50/60"}>
                  <td className="px-6 py-4 text-sm font-medium text-ink-700">
                    {row.label}
                  </td>
                  {row.values.map((v, i) => (
                    <td key={i} className="px-6 py-4 text-sm text-ink-900">
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}

function CTABanner() {
  return (
    <section className="bg-paper-50 py-24 md:py-28">
      <Container>
        <div className="relative rounded-3xl bg-navy-950 text-paper-50 overflow-hidden p-10 md:p-16">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-precision-grid opacity-30"
          />
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3
                id="products-cta-title"
                className="font-display font-semibold text-3xl md:text-4xl leading-tight text-paper-50 text-balance"
              >
                Not sure which machine fits your parts?
              </h3>
              <p
                id="products-cta-subtitle"
                className="mt-4 text-paper-50/75 leading-relaxed max-w-md"
              >
                Send us a sample drawing and we'll recommend the right folder —
                no obligation.
              </p>
            </div>
            <div className="flex flex-col md:items-end gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-copper-500 hover:bg-copper-600 text-paper-50 px-7 py-3.5 rounded-full text-sm font-semibold transition-colors"
              >
                Talk to an engineer
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="mailto:sales@artitectmachinery.com"
                className="text-paper-50/75 hover:text-copper-400 text-sm"
              >
                sales@artitectmachinery.com
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}