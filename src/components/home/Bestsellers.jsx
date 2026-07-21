import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { products } from "../../data/products";
import ProductCard from "../product/ProductCard";
import { useImageHelper } from "../../hooks/useImageHelper";

export default function Bestsellers() {
  const sectionRef = useRef(null);
  useImageHelper(sectionRef, []);

  return (
    <section
      ref={sectionRef}
      className="bg-ivory py-20 md:py-28 lg:py-32"
      aria-labelledby="best-sellers-title"
    >
      <div className="container-velmora">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
          <div className="max-w-xl">
            <p className="eyebrow">Bestsellers</p>
            <h2
              id="best-sellers-title"
              className="heading-display text-3xl md:text-5xl mt-3"
            >
              The pieces you keep coming back to.
            </h2>
          </div>
          <Link
            to="/shop"
            className="group inline-flex items-center gap-2 font-sans text-[11px] md:text-xs uppercase tracking-widest2 text-espresso hover:text-gold-deep transition-colors duration-300 self-start md:self-end"
          >
            View all
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-500 ease-out-soft group-hover:translate-x-1"
              strokeWidth={1.5}
            />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 md:gap-x-7 gap-y-10 md:gap-y-14">
          {products.map((product, idx) => (
            <ProductCard
              key={product.id}
              product={product}
              eager={idx < 2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
