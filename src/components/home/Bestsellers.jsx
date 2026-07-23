import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import ProductCard from "@/components/common/ProductCard";
import { products } from "@/data/products";

export default function Bestsellers() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-parchment py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-14 gap-4">
          <div>
            <p className="font-sans text-xs tracking-widest uppercase text-gold mb-3">
              Curated for You
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-velvet tracking-wide">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="self-start md:self-auto font-sans text-xs tracking-widest uppercase text-driftwood hover:text-gold border-b border-driftwood hover:border-gold pb-0.5 transition-colors duration-300"
          >
            View All
          </Link>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
