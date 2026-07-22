import { Link } from "react-router-dom";
import ProductCard from "@/components/home/ProductCard";
import { PRODUCTS } from "@/data/products";

export default function RelatedProducts({ currentId, category }) {
  const related = PRODUCTS
    .filter((p) => p.id !== currentId && p.category === category)
    .slice(0, 4);
  // fallback: any 4 others
  const fallback = PRODUCTS.filter((p) => p.id !== currentId).slice(0, 4);
  const items = related.length >= 3 ? related : fallback;
  if (items.length === 0) return null;

  return (
    <section className="bg-cream py-20 md:py-24 border-t border-line">
      <div className="max-w-8xl mx-auto px-5 md:px-8">
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <p className="eyebrow text-gold-deep mb-3">Pairs well with</p>
            <h2 className="display-md text-ink">You may also love</h2>
          </div>
          <Link to="/shop" className="link-underline text-ink hidden sm:inline-block">
            View all
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-7">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
