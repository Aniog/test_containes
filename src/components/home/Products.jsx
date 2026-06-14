import { useEffect, useRef, useState } from "react";
import { ImageHelper } from "@strikingly/sdk";
import { ArrowUpRight, Check } from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";
import { products } from "@/lib/content";

export default function Products() {
  const containerRef = useRef(null);
  const [active, setActive] = useState(products[0].id);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const activeProduct = products.find((p) => p.id === active) ?? products[0];

  return (
    <section
      id="products"
      ref={containerRef}
      className="relative bg-pearl py-24 md:py-32"
    >
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-7">
            <p id="products-eyebrow" className="eyebrow mb-4">
              Product family
            </p>
            <h2
              id="products-title"
              className="font-display text-steel-deep text-4xl md:text-5xl leading-tight"
            >
              One engineering platform.
              <span className="block text-graphite/70 italic">Seven precision variants.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p
              id="products-subtitle"
              className="text-slate2 text-base md:text-lg leading-relaxed"
            >
              Every machine in the ARTITECT family is built on the same
              stress-relieved frame, the same HMI and the same service
              network — so whichever variant you choose, you inherit the same
              precision and support.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Selector list */}
          <div className="lg:col-span-4">
            <ul className="border-t border-mist">
              {products.map((p) => {
                const isActive = p.id === active;
                return (
                  <li key={p.id} className="border-b border-mist">
                    <button
                      type="button"
                      onClick={() => setActive(p.id)}
                      className={`w-full text-left flex items-center justify-between gap-4 py-5 group transition-colors ${
                        isActive ? "text-steel-deep" : "text-slate2 hover:text-steel-deep"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span
                          className={`font-display text-2xl tabular-nums w-10 ${
                            isActive ? "text-bronze" : "text-slate2/40"
                          }`}
                        >
                          {String(products.indexOf(p) + 1).padStart(2, "0")}
                        </span>
                        <span className="font-display text-lg md:text-xl leading-tight">
                          {p.name}
                        </span>
                      </div>
                      <ArrowUpRight
                        className={`w-4 h-4 transition-transform ${
                          isActive
                            ? "text-bronze translate-x-0.5 -translate-y-0.5"
                            : "text-slate2/40 group-hover:text-bronze group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        }`}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Active product detail */}
          <div className="lg:col-span-8">
            <div className="bg-white shadow-card border border-mist">
              <div className="relative aspect-[16/10] overflow-hidden bg-mist">
                <img
                  alt={activeProduct.name}
                  data-strk-img-id={`product-img-${activeProduct.id}`}
                  data-strk-img={`[product-summary-${activeProduct.id}] [product-name-${activeProduct.id}] [products-title]`}
                  data-strk-img-ratio="16x10"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 text-[10px] uppercase tracking-eyebrow text-steel-deep font-semibold">
                  Variant {String(products.indexOf(activeProduct) + 1).padStart(2, "0")} / {String(products.length).padStart(2, "0")}
                </div>
              </div>

              <div className="p-8 md:p-10">
                <h3
                  id={`product-name-${activeProduct.id}`}
                  className="font-display text-3xl md:text-4xl text-steel-deep"
                >
                  {activeProduct.name}
                </h3>
                <p
                  id={`product-summary-${activeProduct.id}`}
                  className="mt-3 text-bronze-dark text-base md:text-lg italic"
                >
                  {activeProduct.summary}
                </p>
                <p className="mt-5 text-graphite leading-relaxed">
                  {activeProduct.description}
                </p>

                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {activeProduct.specs.map((s) => (
                    <div
                      key={s.label}
                      className="flex items-baseline gap-3 border-l-2 border-bronze/40 pl-4"
                    >
                      <span className="font-display text-xl md:text-2xl text-steel-deep">
                        {s.value}
                      </span>
                      <span className="text-[11px] uppercase tracking-eyebrow text-slate2">
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 bg-steel-deep hover:bg-steel-mid text-white px-6 py-3 text-[12px] uppercase tracking-eyebrow font-semibold transition-colors"
                  >
                    Request datasheet
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 border border-steel-deep text-steel-deep hover:bg-steel-deep hover:text-white px-6 py-3 text-[12px] uppercase tracking-eyebrow font-semibold transition-colors"
                  >
                    Book a demo
                  </a>
                </div>
              </div>
            </div>

            <ul className="mt-8 grid sm:grid-cols-3 gap-4 text-sm">
              {[
                "CE / UL / CSA certified",
                "Multi-language HMI",
                "Lifetime remote diagnostics",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-graphite"
                >
                  <Check className="w-4 h-4 text-bronze flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
