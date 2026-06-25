import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products } from "@/data/products";

const FeaturedProducts = () => {
  const containerRef = useRef(null);
  const featured = products.slice(0, 3);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-bone py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <p id="featured-eyebrow" className="text-xs uppercase tracking-[0.3em] text-accent mb-5">
              The Collection
            </p>
            <h2 id="featured-title" className="font-serif text-4xl md:text-5xl text-ink tracking-tight max-w-2xl">
              Double folders, sheet metal folders, and everyday workhorses.
            </h2>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-ink hover:text-accent transition border-b border-ink hover:border-accent pb-2 w-fit"
          >
            View all machines
            <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {featured.map((p) => (
            <article key={p.id} className="group bg-paper border border-bone-soft">
              <div className="aspect-[4/3] overflow-hidden bg-bone-soft">
                <img
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  data-strk-img-id={p.imgId}
                  data-strk-img={`[${p.descId}] [${p.titleId}] [featured-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-8">
                <p className="text-[11px] uppercase tracking-[0.25em] text-steel-soft mb-3">
                  {p.capacity.split("·")[0].trim()}
                </p>
                <h3
                  id={p.titleId}
                  className="font-serif text-2xl text-ink mb-3 group-hover:text-accent transition"
                >
                  {p.name}
                </h3>
                <p id={p.descId} className="text-sm text-steel leading-relaxed mb-6">
                  {p.tagline}
                </p>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-ink border-b border-ink/40 pb-1 hover:border-accent hover:text-accent transition"
                >
                  Discover
                  <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
