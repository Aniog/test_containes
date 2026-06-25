import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import PageHeader from "@/components/shared/PageHeader";
import { products } from "@/data/products";

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <PageHeader
        eyebrow="Products"
        title="Folders, in four sizes of precision."
        description="From compact sheet metal folders to bi-directional heavy double folders, every ARTITECT machine shares the same DNA: servo-precise drives, hand-calibrated frames, and controls that disappear into the work."
      />

      <section className="bg-bone py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-24">
          {products.map((p, idx) => {
            const reverse = idx % 2 === 1;
            return (
              <article
                key={p.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                <div
                  className={`lg:col-span-7 ${
                    reverse ? "lg:order-2" : ""
                  } aspect-[4/3] overflow-hidden bg-bone-soft`}
                >
                  <img
                    alt={p.name}
                    className="w-full h-full object-cover"
                    data-strk-img-id={p.imgId}
                    data-strk-img={`[${p.descId}] [${p.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="1100"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>

                <div className={`lg:col-span-5 ${reverse ? "lg:order-1" : ""}`}>
                  <p className="text-xs uppercase tracking-[0.3em] text-accent mb-5">
                    {p.id.includes("double")
                      ? "Double Folding Machine"
                      : p.id.includes("sheet")
                      ? "Sheet Metal Folder"
                      : "Metal Folder Machine"}
                  </p>
                  <h2 id={p.titleId} className="font-serif text-3xl md:text-4xl text-ink tracking-tight">
                    {p.name}
                  </h2>
                  <p id={p.descId} className="mt-5 text-base text-steel leading-relaxed">
                    {p.description}
                  </p>

                  <dl className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-ink/10 pt-6">
                    <div>
                      <dt className="text-[11px] uppercase tracking-[0.2em] text-steel-soft">Capacity</dt>
                      <dd className="mt-2 text-sm text-ink font-medium">{p.capacity}</dd>
                    </div>
                    <div>
                      <dt className="text-[11px] uppercase tracking-[0.2em] text-steel-soft">Folds</dt>
                      <dd className="mt-2 text-sm text-ink font-medium">{p.folds}</dd>
                    </div>
                    <div>
                      <dt className="text-[11px] uppercase tracking-[0.2em] text-steel-soft">Drive</dt>
                      <dd className="mt-2 text-sm text-ink font-medium">{p.drive}</dd>
                    </div>
                  </dl>

                  <ul className="mt-8 space-y-3">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-sm text-steel">
                        <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" strokeWidth={1.75} />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="mt-10 inline-flex items-center gap-3 bg-ink text-bone hover:bg-accent transition px-7 py-3.5 text-xs uppercase tracking-[0.25em]"
                  >
                    Request specifications
                    <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-paper border-t border-bone-soft py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <h2 className="font-serif text-3xl md:text-4xl text-ink tracking-tight">
              Need a configuration that is not listed here?
            </h2>
            <p className="mt-4 text-steel leading-relaxed max-w-2xl">
              Every ARTITECT folder can be tailored — bending length, tooling,
              automation, and finish. Tell us about the panel you want to make
              and we will configure the folder.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 border border-ink text-ink hover:bg-ink hover:text-bone transition px-7 py-3.5 text-xs uppercase tracking-[0.25em]"
            >
              Start a custom build
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
