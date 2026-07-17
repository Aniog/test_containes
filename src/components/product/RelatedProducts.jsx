import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import ProductCard from "@/components/home/ProductCard";
import { getRelated } from "@/data/products";
import { useStrkImageLoader } from "@/components/ui/StrkImage";

export default function RelatedProducts({ product }) {
  const items = getRelated(product, 4);
  const ref = useStrkImageLoader([product.id, items.length]);

  if (items.length === 0) return null;

  return (
    <section
      ref={ref}
      aria-labelledby="related-title"
      className="bg-cream-soft border-t border-line py-20 md:py-24"
    >
      <div className="mx-auto max-w-editorial px-5 md:px-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">You may also love</p>
            <h2
              id="related-title"
              className="mt-3 font-display text-3xl md:text-4xl leading-tight"
            >
              Styled with <em className="text-gold">{product.name}</em>
            </h2>
          </div>
          <Link to="/shop" className="btn-ghost">
            View All
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-7">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
