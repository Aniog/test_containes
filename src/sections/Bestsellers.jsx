import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Link } from "react-router-dom";

const Bestsellers = () => {
  const bestsellers = products.slice(0, 5);

  return (
    <section className="bg-[#fbfaf9] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-amber-700">
              Most Loved
            </p>
            <h2 className="mt-2 font-serif text-3xl font-light text-stone-900 md:text-4xl">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="text-xs font-medium uppercase tracking-[0.18em] text-stone-900 underline-offset-4 hover:text-amber-700 hover:underline"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
