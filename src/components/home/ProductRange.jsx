import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { products } from "@/data/products";

export default function ProductRange() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      id="products"
      ref={containerRef}
      className="py-20 md:py-28 bg-cream"
    >
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <SectionHeading
            eyebrow="The Range"
            title={
              <>
                Seven machines, one philosophy of <em className="not-italic text-brass">precision</em>.
              </>
            }
            description="From our compact metal folder to our flagship double folding machine, every ARTITECT product is built around the same idea: a fold should look as good on the 800th panel as on the first."
            className="max-w-2xl"
          />
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-wider2 text-ink hover:text-brass transition-colors group"
          >
            Compare specifications
            <ArrowUpRight
              size={16}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <article
              key={product.id}
              className="group relative bg-surface border border-border rounded-sm overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-1 hover:shadow-md hover:border-ink"
            >
              <div className="aspect-[4/3] overflow-hidden bg-cream-soft relative">
                <img
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 bg-cream-soft/95 backdrop-blur-sm border border-border px-3 py-1.5">
                  <span className="text-[10px] uppercase tracking-wider2 text-ink-muted">
                    0{index + 1}
                  </span>
                </div>
              </div>

              <div className="p-7 flex flex-col flex-1">
                <p className="text-[10px] uppercase tracking-wider2 text-brass font-medium mb-2">
                  {product.tagline}
                </p>
                <h3
                  id={product.titleId}
                  className="font-serif text-2xl text-ink leading-snug"
                >
                  {product.name}
                </h3>
                <p
                  id={product.descId}
                  className="mt-3 text-sm text-ink-muted leading-relaxed flex-1"
                >
                  {product.description}
                </p>

                <ul className="mt-5 space-y-1.5">
                  {product.capabilities.map((cap) => (
                    <li
                      key={cap}
                      className="text-xs text-ink-muted flex items-start gap-2"
                    >
                      <span className="w-1 h-1 bg-brass rounded-full mt-1.5 flex-shrink-0" />
                      {cap}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-5 border-t border-border flex items-center justify-between">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider2 text-ink hover:text-brass transition-colors"
                  >
                    Request specs
                    <ArrowUpRight size={12} strokeWidth={1.5} />
                  </a>
                  <span className="text-[10px] uppercase tracking-wider2 text-ink-muted/60">
                    Series {["IX", "VIII", "VII", "VI", "V", "IV", "III"][index]}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
