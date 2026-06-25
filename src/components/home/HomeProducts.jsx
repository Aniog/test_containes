import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/data/products";

export default function HomeProducts() {
  const featured = products.slice(0, 3);

  return (
    <section className="bg-bone py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-brass font-medium">
              Our Machines
            </p>
            <h2
              id="home-products-title"
              className="mt-4 font-display text-4xl md:text-5xl tracking-tight text-ink"
            >
              A folder for every fabrication challenge.
            </h2>
          </div>
          <p
            id="home-products-subtitle"
            className="text-graphite max-w-md leading-relaxed"
          >
            From compact prototype folders to large-format architectural panel
            machines, every ARTITECT folder is built around the same obsession:
            a clean, repeatable bend.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {featured.map((product) => (
            <article
              key={product.id}
              className="group bg-paper border border-mist rounded-sm overflow-hidden flex flex-col"
            >
              <div className="aspect-[4/3] bg-mist overflow-hidden">
                <img
                  alt={product.name}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] [home-products-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <p className="text-xs uppercase tracking-[0.2em] text-brass">
                  {product.id.toUpperCase()}
                </p>
                <h3
                  id={product.titleId}
                  className="mt-3 font-display text-2xl text-ink"
                >
                  {product.name}
                </h3>
                <p
                  id={product.descId}
                  className="mt-3 text-graphite text-sm leading-relaxed flex-1"
                >
                  {product.tagline}
                </p>
                <div className="mt-6 pt-6 border-t border-mist">
                  <p className="text-xs text-graphite uppercase tracking-wider">
                    {product.capacity}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-ink border-b border-ink pb-1 text-sm tracking-wide hover:text-brass hover:border-brass transition-colors"
          >
            View the full range
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
