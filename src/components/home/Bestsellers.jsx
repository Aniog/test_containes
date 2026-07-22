import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { PRODUCTS } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";

export default function Bestsellers() {
  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="bg-cream py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-screen-2xl px-6 md:px-10 lg:px-16">
        <div className="flex flex-col items-end justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p
              id="bestsellers-eyebrow"
              className="eyebrow"
            >
              The Edit
            </p>
            <h2
              id="bestsellers-title"
              className="display-lg mt-4 text-ink"
            >
              Bestsellers
            </h2>
          </div>
          <Link to="/shop" className="link-underline self-start md:self-end">
            View All
          </Link>
        </div>

        <div
          id="bestsellers-subtitle"
          className="mt-3 max-w-md font-serif text-[15px] italic text-taupe"
        >
          Pieces our community reaches for again and again.
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-12 md:mt-16 md:grid-cols-3 md:gap-x-8 lg:grid-cols-5 lg:gap-x-10">
          {PRODUCTS.slice(0, 5).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div className="mt-16 flex justify-center md:mt-20">
          <Link to="/shop" className="btn-primary">
            Shop the Collection
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
