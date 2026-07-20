import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useRef, useEffect } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import ProductCard from "@/components/product/ProductCard";
import { products } from "@/data/products";

export default function Bestsellers() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-ivory text-espresso"
      aria-labelledby="bestsellers-title"
    >
      <div className="max-w-8xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <div className="flex items-end justify-between gap-6 mb-10 md:mb-14">
          <div>
            <p
              id="bestsellers-eyebrow"
              className="eyebrow mb-3"
            >
              Most Loved
            </p>
            <h2
              id="bestsellers-title"
              className="font-serif text-4xl md:text-5xl lg:text-6xl"
            >
              Bestsellers
            </h2>
            <p
              id="bestsellers-subtitle"
              className="mt-3 text-sm md:text-base text-espresso/60 max-w-md"
            >
              The pieces our community keeps reaching for — quiet, considered, and made to last.
            </p>
          </div>
          <Link
            to="/shop"
            className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] link-underline"
          >
            View All
            <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.4} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-7">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} eager={i < 2} />
          ))}
        </div>

        <div className="md:hidden mt-10 text-center">
          <Link to="/shop" className="btn-outline">
            View All Pieces
            <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.4} />
          </Link>
        </div>
      </div>
    </section>
  );
}
