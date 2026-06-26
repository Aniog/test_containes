import React, { useEffect, useRef } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, ChevronRight, CheckCircle2, Download } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import Container from "@/components/layout/Container";
import { findProductBySlug, productCategories } from "@/data/products";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = findProductBySlug(slug);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!product) return undefined;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [product]);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const related = productCategories.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div ref={containerRef}>
      <section className="bg-hero-mesh text-paper-50 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-precision-grid opacity-40"
        />
        <Container className="relative pt-12 pb-16 md:pt-20 md:pb-24">
          <nav
            className="flex items-center gap-1.5 text-paper-50/60 text-xs tracking-[0.18em] uppercase mb-10"
            aria-label="Breadcrumb"
          >
            <Link to="/" className="hover:text-copper-400 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/products" className="hover:text-copper-400 transition-colors">
              Products
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-paper-50">{product.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="eyebrow text-copper-400">{product.name}</span>
              <h1
                id={`detail-${product.id}-title`}
                className="mt-4 font-display font-semibold text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-paper-50 text-balance"
              >
                {product.title}
              </h1>
              <p
                id={`detail-${product.id}-desc`}
                className="mt-6 text-paper-50/75 text-lg leading-relaxed max-w-xl"
              >
                {product.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-copper-500 hover:bg-copper-600 text-paper-50 px-7 py-3.5 rounded-full text-sm font-semibold transition-colors shadow-lg shadow-copper-500/20"
                >
                  Request a quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="mailto:sales@artitectmachinery.com"
                  className="inline-flex items-center gap-2 bg-paper-50/10 hover:bg-paper-50/15 border border-paper-50/20 text-paper-50 px-7 py-3.5 rounded-full text-sm font-semibold transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download datasheet
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-navy-900 ring-1 ring-paper-50/10 shadow-2xl shadow-navy-950/40">
                <img
                  alt={product.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  data-strk-img-id={`detail-${product.id}-hero-3a8e91`}
                  data-strk-img={`[detail-${product.id}-desc] [detail-${product.id}-title] ${product.name}`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 bg-paper-50/10 backdrop-blur-sm border border-paper-50/20 rounded-2xl p-4 flex items-center justify-between">
                  <div>
                    <p className="font-display text-paper-50 font-semibold text-sm">
                      {product.specs[0].label}
                    </p>
                    <p className="text-paper-50/65 text-xs mt-0.5">
                      Verified on factory acceptance test
                    </p>
                  </div>
                  <span className="text-copper-400 font-display text-xl font-bold">
                    {product.specs[0].value}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-paper-50 py-20 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <span className="eyebrow text-copper-600">Key features</span>
              <h2
                id={`detail-${product.id}-features-title`}
                className="mt-4 font-display font-semibold text-3xl md:text-4xl text-ink-900 leading-tight text-balance"
              >
                Engineered for accuracy, built for uptime.
              </h2>
              <p
                id={`detail-${product.id}-features-subtitle`}
                className="mt-5 text-ink-700 text-base md:text-lg leading-relaxed"
              >
                Every component on the {product.name.toLowerCase()} has been
                chosen for repeatability, longevity, and ease of service.
              </p>
            </div>

            <div className="lg:col-span-7">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.features.map((feature, idx) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 bg-paper-50 border border-ink-900/8 rounded-2xl p-5"
                  >
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-copper-100 text-copper-600 shrink-0 font-display font-semibold text-sm">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span
                      id={`detail-${product.id}-feature-${idx}`}
                      className="text-ink-800 text-sm leading-relaxed"
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-mist-100 py-20 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <span className="eyebrow text-copper-600">Technical specification</span>
              <h2
                id={`detail-${product.id}-specs-title`}
                className="mt-4 font-display font-semibold text-3xl md:text-4xl text-ink-900 leading-tight text-balance"
              >
                The numbers behind the machine.
              </h2>
              <p
                id={`detail-${product.id}-specs-subtitle`}
                className="mt-5 text-ink-700 text-base md:text-lg leading-relaxed"
              >
                Verified at our in-house test lab and again at factory
                acceptance testing.
              </p>
            </div>

            <div className="lg:col-span-7">
              <dl className="bg-paper-50 border border-ink-900/8 rounded-2xl divide-y divide-ink-900/8 overflow-hidden">
                {product.specs.map((spec, idx) => (
                  <div
                    key={spec.label}
                    className="grid grid-cols-2 gap-4 px-6 py-5 hover:bg-paper-100/60 transition-colors"
                  >
                    <dt
                      id={`detail-${product.id}-spec-${idx}-label`}
                      className="text-xs font-semibold tracking-[0.18em] uppercase text-ink-500"
                    >
                      {spec.label}
                    </dt>
                    <dd
                      id={`detail-${product.id}-spec-${idx}-value`}
                      className="font-display font-semibold text-ink-900 text-right"
                    >
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-paper-50 py-20 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="eyebrow text-copper-600">Ideal for</span>
              <h2
                id={`detail-${product.id}-industries-title`}
                className="mt-4 font-display font-semibold text-3xl md:text-4xl text-ink-900 leading-tight text-balance"
              >
                Industries served by this machine.
              </h2>
              <p
                id={`detail-${product.id}-industries-subtitle`}
                className="mt-5 text-ink-700 text-base md:text-lg leading-relaxed"
              >
                ARTITECT machines earn their place in the most quality-critical
                environments. Here are a few sectors we commonly serve.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.industries.map((industry, idx) => (
                <div
                  key={industry}
                  className="flex items-center gap-3 bg-paper-100 border border-ink-900/8 rounded-2xl px-5 py-4"
                >
                  <CheckCircle2 className="w-5 h-5 text-copper-600 shrink-0" />
                  <span
                    id={`detail-${product.id}-industry-${idx}`}
                    className="font-display font-medium text-ink-900"
                  >
                    {industry}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-paper-50 py-20 md:py-24 border-t border-ink-900/8">
        <Container>
          <div className="max-w-3xl mb-12">
            <span className="eyebrow text-copper-600">Related machines</span>
            <h2
              id="related-title"
              className="mt-4 font-display font-semibold text-3xl md:text-4xl text-ink-900 leading-tight text-balance"
            >
              You may also consider
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {related.map((other) => (
              <Link
                key={other.id}
                to={`/products/${other.id}`}
                className="group bg-paper-50 border border-ink-900/8 rounded-2xl p-6 hover-lift"
              >
                <h3
                  id={`related-${other.id}-title`}
                  className="font-display font-semibold text-lg text-ink-900 group-hover:text-copper-600 transition-colors"
                >
                  {other.title}
                </h3>
                <p
                  id={`related-${other.id}-desc`}
                  className="mt-2 text-sm text-ink-700 line-clamp-2"
                >
                  {other.short}
                </p>
                <div className="mt-5 inline-flex items-center gap-2 text-copper-600 font-semibold text-sm">
                  View details
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-ink-700 hover:text-copper-600 font-semibold text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all products
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}