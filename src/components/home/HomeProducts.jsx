import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products } from "@/data/products";
import SectionHeader from "@/components/ui/SectionHeader";

const HomeProducts = () => {
  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} id="machines" className="bg-bone py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <SectionHeader
            eyebrow="The Collection"
            title="A folder for every fabricator."
            subtitle="From compact workshop folders to fully automated CNC double-folding cells — each ARTITECT machine is built around the same principles of rigidity, repeatability, and quiet confidence."
          />
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest2 text-ink hover:text-accent transition-colors group"
          >
            View all
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {products.map((p, i) => (
            <Link
              key={p.slug}
              to={`/products/${p.slug}`}
              className="group block bg-mist border border-silver hover:border-ink transition-colors"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                <img
                  alt={p.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  data-strk-img-id={p.imgId}
                  data-strk-img={`[${p.descId}] [${p.titleId}] sheet metal folding machine`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute top-4 left-4 bg-bone/95 text-ink px-3 py-1.5 text-[10px] uppercase tracking-widest2 font-medium">
                  {p.category}
                </div>
                <div className="absolute bottom-4 right-4 font-mono text-[11px] uppercase tracking-widest2 text-bone/80">
                  No. 0{i + 1}
                </div>
              </div>
              <div className="p-7 md:p-8">
                <h3
                  id={p.titleId}
                  className="font-serif text-2xl md:text-[28px] text-ink leading-tight"
                >
                  {p.name}
                </h3>
                <p
                  id={p.descId}
                  className="mt-3 text-steel text-[15px] leading-relaxed line-clamp-2"
                >
                  {p.summary}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-silver pt-5">
                  <dl className="flex gap-6">
                    <div>
                      <dt className="text-[10px] uppercase tracking-widest2 text-steel">Width</dt>
                      <dd className="mt-1 font-mono text-sm text-ink">{p.capacity}</dd>
                    </div>
                    <div>
                      <dt className="text-[10px] uppercase tracking-widest2 text-steel">Accuracy</dt>
                      <dd className="mt-1 font-mono text-sm text-ink">{p.accuracy}</dd>
                    </div>
                  </dl>
                  <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest2 text-ink group-hover:text-accent transition-colors">
                    Detail
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeProducts;
