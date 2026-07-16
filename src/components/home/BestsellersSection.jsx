import { Link } from "react-router-dom";
import ProductCard from "@/components/product/ProductCard";
import { products } from "@/data/products";

export default function BestsellersSection() {
  return (
    <section id="bestsellers" className="bg-velmora-ivory py-16 text-velmora-espresso md:py-24">
      <div className="velmora-container">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-kicker">Most loved</p>
            <h2 id="bestsellers-title" className="serif-heading mt-3 text-5xl md:text-7xl">
              Bestsellers
            </h2>
          </div>
          <div className="max-w-md text-sm leading-7 text-velmora-cocoa">
            The pieces customers return to for polished mornings, dinner plans,
            and gifts that feel personal.
            <Link to="/shop" className="ml-2 font-bold text-velmora-bronze underline-offset-4 hover:underline">
              View all
            </Link>
          </div>
        </div>
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
