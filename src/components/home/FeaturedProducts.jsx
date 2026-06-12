import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { SectionHeading } from "@/components/shared/SectionHeading";

const FeaturedProducts = () => {
  const featured = PRODUCTS.slice(0, 3);

  return (
    <section className="bg-bone py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <SectionHeading
            eyebrow="Featured Machines"
            title="A folder for every workshop."
            subtitle="From compact studio folders to fully programmable CNC double folding machines, every Artitect machine is built around the same idea: precision should feel calm."
          />
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-medium text-ink border-b border-ink pb-1 hover:text-gold-deep hover:border-gold-deep transition-colors w-fit"
          >
            View all products
            <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="grid gap-8 md:gap-10 md:grid-cols-3">
          {featured.map((product) => (
            <Link
              to={`/products#${product.slug}`}
              key={product.id}
              className="group bg-paper border border-mist hover:border-gold transition-colors duration-300 flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-mist">
                <img
                  alt={product.name}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] sheet metal folding machine industrial`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-7 flex-1 flex flex-col">
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold-deep">
                  {product.category}
                </p>
                <h3
                  id={product.titleId}
                  className="mt-3 font-serif text-xl md:text-2xl text-ink"
                >
                  {product.name}
                </h3>
                <p
                  id={product.descId}
                  className="mt-3 text-sm leading-relaxed text-steel flex-1"
                >
                  {product.tagline}
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-ink group-hover:text-gold-deep transition-colors">
                  Discover
                  <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
